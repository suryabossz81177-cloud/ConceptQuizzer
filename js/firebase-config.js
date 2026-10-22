// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe5hrG-yA-Qk3oSHlIE4ypflwLKV_XuzM",
  authDomain: "concept-quizzer.firebaseapp.com",
  projectId: "concept-quizzer",
  storageBucket: "concept-quizzer.firebasestorage.app",
  messagingSenderId: "765897125690",
  appId: "1:765897125690:web:8d13a564888d772b7eaa03",
  measurementId: "G-6PF88N207H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
