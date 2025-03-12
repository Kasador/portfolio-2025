import { useState, useEffect } from "react";
import { storage } from "@/firebase/firebaseConfig";
import { ref, getDownloadURL } from "firebase/storage";

const useFirebaseStorage = (filePath) => {
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!filePath) return;

    const fetchUrl = async () => {
      try {
        const fileRef = ref(storage, filePath);
        const downloadURL = await getDownloadURL(fileRef);
        console.log("Fetched Firebase URL:", downloadURL);
        setUrl(downloadURL);
      } catch (err) {
        console.error("Error fetching Firebase Storage URL:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUrl();
  }, [filePath]);

  return { url, loading, error };
};

export default useFirebaseStorage;