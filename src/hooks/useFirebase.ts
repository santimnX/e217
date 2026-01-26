import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const useFirebase = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setIsInitialized(true);
  }, []);

  const getModelUrl = async (modelPath: string): Promise<string | null> => {
    try {
      const modelRef = ref(storage, `models/${modelPath}`);
      const url = await getDownloadURL(modelRef);
      return url;
    } catch (error) {
      console.error('Error getting model URL:', error);
      return null;
    }
  };

  return { isInitialized, getModelUrl };
};