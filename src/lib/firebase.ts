// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2wRHNoLAEkiNkY38oWSX7D8hGV_eEq3U",
  authDomain: "linknexus-2c509.firebaseapp.com",
  projectId: "linknexus-2c509",
  storageBucket: "linknexus-2c509.appspot.com",
  messagingSenderId: "143135107740",
  appId: "1:143135107740:web:bf8ccf3372bc699fb65b59",
  measurementId: "G-H7NE0N4G1T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const db = getFirestore()
export const storage = getStorage()
export const auth = getAuth()