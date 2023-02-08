import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD_BgnTkqKw9qcxuo1sLtmYbUlGyjcsYgc",
  authDomain: "molber-app-3ff36.firebaseapp.com",
  projectId: "molber-app-3ff36",
  storageBucket: "molber-app-3ff36.appspot.com",
  messagingSenderId: "222873517533",
  appId: "1:222873517533:web:4f13f406c397ccc0ae4a34"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)