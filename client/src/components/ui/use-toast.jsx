import { useState } from "react";

export const useToast = () => {
  const [toast, setToast] = useState(null);

  const toastNotification = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000); // Hide after 3 seconds
  };

  return {
    toast,
    toastNotification,
  };
};
