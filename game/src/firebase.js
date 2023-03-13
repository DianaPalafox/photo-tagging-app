// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
export default function ConnectToDatabase() {
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_dNo2PwggwiQ98TOgE3ONA0vzgxnmqSc",
  authDomain: "wheres-waldo-848b5.firebaseapp.com",
  projectId: "wheres-waldo-848b5",
  storageBucket: "wheres-waldo-848b5.appspot.com",
  messagingSenderId: "950421506523",
  appId: "1:950421506523:web:219c6d79b5d4e52c7ffffe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

return db;

}