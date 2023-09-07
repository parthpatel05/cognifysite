import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrCHC_H2ngucaJ2AOrxSJHQTN53CDXswQ",
  authDomain: "cognify-a1d49.firebaseapp.com",
  projectId: "cognify-a1d49",
  storageBucket: "cognify-a1d49.appspot.com",
  messagingSenderId: "780668747581",
  appId: "1:780668747581:web:adef1ba0e822a95c5d4f54",
  measurementId: "G-BH24FHN774"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };