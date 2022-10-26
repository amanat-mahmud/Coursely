// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAearbTJpQVUMiyWZdHPMjG8XizNQPtWDs",
  authDomain: "coursely-client.firebaseapp.com",
  projectId: "coursely-client",
  storageBucket: "coursely-client.appspot.com",
  messagingSenderId: "39246188945",
  appId: "1:39246188945:web:90fead4292afc17bd88a30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;