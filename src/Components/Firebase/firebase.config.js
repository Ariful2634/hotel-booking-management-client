// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmETyROEsLyQiasMm4kAvtgWPIm-W1nJQ",
  authDomain: "hotel-booking-management-928e5.firebaseapp.com",
  projectId: "hotel-booking-management-928e5",
  storageBucket: "hotel-booking-management-928e5.appspot.com",
  messagingSenderId: "359268954935",
  appId: "1:359268954935:web:a5cde7484b23346b78a0b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;