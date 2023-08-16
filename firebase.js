import firebase from 'firebase/app';
import { initializeApp ,getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyCx9kdB4YUDW8TVz3-tHNV7Gybwor8LKHg",
  authDomain: "user-registartion-e8c5a.firebaseapp.com",
  projectId: "user-registartion-e8c5a",
  storageBucket: "user-registartion-e8c5a.appspot.com",
  messagingSenderId: "9690501719",
  appId: "1:9690501719:web:3c69ad4a6c4964c749c912",
  measurementId: "G-QJXNHR4QWX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db  = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
 export const storage = getStorage(app);

















