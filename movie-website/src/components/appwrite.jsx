import { account } from "../lib/appwrite";

import React from "react";

const appwrite = () => {
  return useEffect(() => {
    const checkSession = async () => {
      try {
        const user = await account.get();
        console.log("Appwrite user:", user);
      } catch (error) {
        console.error("Appwrite connection error:", error.message);
      }
    };

    checkSession();
  }, []);
};

export default appwrite;
