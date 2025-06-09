import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZjRvDg2S5A5jB4nmhz06NfCoI1yhEc8w",
  authDomain: "fotografia-3ba3c.firebaseapp.com",
  projectId: "fotografia-3ba3c",
  storageBucket: "fotografia-3ba3c.appspot.com",
  messagingSenderId: "1002393842758",
  appId: "1:1002393842758:web:5c2e02497cbda895c68647",
  measurementId: "G-3Y3DTL1R0D"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
