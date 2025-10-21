// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeTI7O4Ye_bq5gQ03K2sPYZrIRcZ01zlQ",
  authDomain: "sing-in-out-db82c.firebaseapp.com",
  projectId: "sing-in-out-db82c",
  storageBucket: "sing-in-out-db82c.firebasestorage.app",
  messagingSenderId: "61609772797",
  appId: "1:61609772797:web:d275ca9a74e19864caa094"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);