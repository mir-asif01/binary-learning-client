// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyARPncH2Mn5V_a-RyXzxOohQFBne6hxOjU",
  // authDomain: "binary-learning-3fa53.firebaseapp.com",
  // projectId: "binary-learning-3fa53",
  // storageBucket: "binary-learning-3fa53.appspot.com",
  // messagingSenderId: "434420555825",
  // appId: "1:434420555825:web:844e6b282e990b35c93510"

  // apiKey: "AIzaSyARPncH2Mn5V_a-RyXzxOohQFBne6hxOjU",
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app