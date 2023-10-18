// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQmUDCHr5M9-auWx3MeOU-DZL5Piz1mMw",
  authDomain: "assingment-10-projects.firebaseapp.com",
  projectId: "assingment-10-projects",
  storageBucket: "assingment-10-projects.appspot.com",
  messagingSenderId: "288475631054",
  appId: "1:288475631054:web:20a404cf657d88e7166f9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;