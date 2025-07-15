import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import axios from "axios";
import { toast } from "react-hot-toast";
import { getUserEmail } from "../utils/auth";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const navigate = useNavigate();

  const handleUpload = (e) => {
    console.log("File upload triggered");
    const uploadedFile = e.target.files[0];
    if (!uploadedFile) return;

    console.log("File selected:", uploadedFile.name);
    setFile(uploadedFile);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(uploadedFile);
  };

  const extractProductName = (filename) => {
    console.log("Extracting product name from:", filename);
    if (!filename) return "";
    const nameWithoutExt = filename.split(".")[0];
    const productName = nameWithoutExt.match(/[a-zA-Z]+/);
    const result = productName ? productName[0].toLowerCase() : "";
    console.log("Extracted product name:", result);
    return result;
  };

  const handleGenerate = async () => {
    console.log("Generate button clicked");
    if (!file) {
      toast.error("Please upload an image first.");
      return;
    }

    const userEmail = getUserEmail();
    if (!userEmail) {
      toast.error("User email not found. Please log in again.");
      return;
    }

    const productName = extractProductName(file.name);
    if (!productName) {
      toast.error(
        "Cannot detect product name from file name. Please rename your image accordingly."
      );
      return;
    }

    setIsWaiting(true);
    toast.dismiss();
    toast.loading("Your description is generating, please wait...", {
      position: "top-center",
      style: {
        borderRadius: "10px",
        background: "#7c3aed", // purple shade
        color: "white",
        fontWeight: "bold",
        fontSize: "16px",
      },
      duration: 5000,
    });

    // Hold for 5 seconds before API call
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setIsWaiting(false);

    setIsLoading(true);
    toast.dismiss();

    const loadingToast = toast.loading("Generating your description. Please wait...");

    try {
      console.log("Preparing form data with:", {
        productName,
        email: userEmail,
      });

      const formData = new FormData();
      formData.append("image", file);
      formData.append("email", userEmail);
      formData.append("productName", productName);

      console.log("Sending request to /api/generate-description");

      const response = await axios.post(
        "http://localhost:5000/api/generate-description",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          timeout: 30000,
        }
      );

      console.log("Response received:", response.status);
      console.log("Response data:", response.data);

      toast.dismiss(loadingToast);

      if (response.data && response.data.description) {
        toast.success("Description generated!");

        // If description is an array (multiple options), pick one randomly
        let selectedDescription = "";
        if (Array.isArray(response.data.description)) {
          const descriptionsArray = response.data.description;
          const randomIndex = Math.floor(Math.random() * descriptionsArray.length);
          selectedDescription = descriptionsArray[randomIndex];
          console.log("Selected one description from array:", selectedDescription);
        } else {
          selectedDescription = response.data.description;
        }

        // Store data in localStorage for the description page
        if (previewUrl) {
          localStorage.setItem("uploadedImage", previewUrl);
        }
        localStorage.setItem("productName", productName);
        localStorage.setItem("generatedDescription", selectedDescription);

        const existingDescriptions = JSON.parse(localStorage.getItem("myDescriptions")) || [];
        const newEntry = {
          image: previewUrl,
          description: selectedDescription,
          timestamp: new Date().toISOString(),
        };
        localStorage.setItem("myDescriptions", JSON.stringify([newEntry, ...existingDescriptions]));

        console.log("Navigating to description page");

        // Small delay to ensure localStorage updates before navigation
        setTimeout(() => {
          navigate("/description");
        }, 100);
      } else {
        toast.error("No description returned from the server.");
      }
    } catch (err) {
      toast.dismiss(loadingToast);
      console.error("Error:", err);
      if (!err.response) {
        toast.error("Network error. Check if the server is running.");
      } else if (err.response.status === 404) {
        toast.error(
          "Product not found. Available products: " +
            (err.response.data.availableProducts || []).join(", ")
        );
      } else {
        toast.error(err.response?.data?.message || "Something went wrong. Try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <MainHeader />
      <div className="max-w-4xl mx-auto px-4 sm:px-8 mt-16 mb-24">
        <motion.div
          className="grid grid-cols-1 gap-10"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.div
            className="w-full bg-white rounded-2xl shadow-md p-10 flex flex-col items-center justify-center"
            variants={fadeInUp}
            custom={1}
          >
            <h2 className="text-3xl font-bold text-purple-800 mb-4">📤 Upload Your Image</h2>

            <label className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-medium py-2 px-6 rounded-lg cursor-pointer transition">
              Choose File
              <input
                type="file"
                accept="image/*"
                onChange={handleUpload}
                className="hidden"
                disabled={isLoading || isWaiting}
              />
            </label>

            {file && (
              <>
                <p className="mt-4 text-sm text-gray-600">
                  Selected: <span className="font-medium">{file.name}</span>
                </p>
                <p className="mt-1 text-sm text-purple-600">
                  Detected product:{" "}
                  <span className="font-medium">
                    {extractProductName(file.name) || "None"}
                  </span>
                </p>
                <div className="mt-6 w-64 h-64 relative rounded-xl border overflow-hidden">
                  <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                </div>
              </>
            )}
          </motion.div>

          <motion.div className="w-full text-center" variants={fadeInUp} custom={2}>
            <Button
              onClick={handleGenerate}
              disabled={isLoading || !file || isWaiting}
              variant="default"
              className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-xl font-semibold text-base transition duration-300"
            >
              {isLoading || isWaiting ? "Generating..." : "Generate Description"}
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default UploadPage;
