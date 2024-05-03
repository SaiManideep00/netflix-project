// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5u_C8BPnl2-wFGUjFGZZINHWBWFgroeU",
  authDomain: "netflixgpt-72225.firebaseapp.com",
  projectId: "netflixgpt-72225",
  storageBucket: "netflixgpt-72225.appspot.com",
  messagingSenderId: "328570925610",
  appId: "1:328570925610:web:528bda21920e59b3bec953",
  measurementId: "G-K6TQ95FKPL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
