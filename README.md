VISION2TEXT

VISION2TEXT is a third-year project that enables users to upload images of electronic products and automatically generates descriptive, catalog-style text using AI models. It simplifies content generation for e-commerce and inventory systems by providing detailed product captions from visuals.


🚀 Features

- 🖼️ Upload images of electronics (e.g., smartphones, chargers, blenders)
- 🤖 Automatically generates 4–5 line product descriptions
- 🔁 Fallback static description system: If the AI model fails or is unreachable (e.g., no internet or API issue), predefined static descriptions are used based on image filename
- 💾 Saves descriptions per user in a MongoDB database
- 🔐 Secure login/register system
- 📂 “My Descriptions” page to view uploaded image history
- 🎨 Clean React frontend and REST API backend with Node.js + Express

📁 Project Structure
vision2text/
├── client/ # React frontend
├── server/ # Node.js backend with MongoDB
├── .env # Environment variables (not pushed to GitHub)
├── .gitignore
└── README.md # This file

⚙️ Tech Stack

- Frontend: React.js, Tailwind CSS, Framer Motion
- Backend: Node.js, Express.js
- Database: MongoDB
- AI Model: Hugging Face 
- Fallback Logic: Static product descriptions stored in backend
- Authentication: JWT (JSON Web Tokens)

🧪 How to Run Locally
1. Clone the repo

```bash
git clone https://github.com/Snehanadapara/vision2text.git
cd vision2text

2.Install Dependencies
# For backend
cd server
npm install

# For frontend
cd ../client
npm install

3. Setup .env files
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
AZURE_API_KEY=your_azure_api_key   # optional if using Azure

4. Start the app
# In one terminal - backend
cd server
node server.js

# In another terminal - frontend
cd client
npm start

🖼️ Sample Use Case
📲 A user uploads an image named headphones.jpg
⚙️ System checks filename → matches “headphones” → uses AI model to describe
❌ If AI API fails → falls back to 4–5 line static description for “headphones”
💾 Saves to MongoDB under the user’s account
