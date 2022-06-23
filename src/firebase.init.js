// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq8ZpLd8q836ThBLU9qaWsYN51DJxVNZM",
  authDomain: "genius-car-services-69d2d.firebaseapp.com",
  projectId: "genius-car-services-69d2d",
  storageBucket: "genius-car-services-69d2d.appspot.com",
  messagingSenderId: "905753657639",
  appId: "1:905753657639:web:211c893518a582e2c7e902"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;