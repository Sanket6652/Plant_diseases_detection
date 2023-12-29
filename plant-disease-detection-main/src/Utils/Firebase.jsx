import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from 'firebase/storage'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAFYR0i-hXg7Tehr9B9T0RFZy9ks0Hu0y4",
    authDomain: "plant-detection-7cb1c.firebaseapp.com",
    projectId: "plant-detection-7cb1c",
    storageBucket: "plant-detection-7cb1c.appspot.com",
    messagingSenderId: "263641659396",
    appId: "1:263641659396:web:17ebc93a63fb9c25969d51",
    measurementId: "G-F5WNPPWCYW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const analytics = getAnalytics(app);
export const db = getFirestore(app);