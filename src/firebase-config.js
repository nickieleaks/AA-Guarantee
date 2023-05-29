import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAp6gsljaSrysr8wigE5Fc0PT_jZY_OGpY",
  authDomain: "lifehack-2a4cf.firebaseapp.com",
  projectId: "lifehack-2a4cf",
  storageBucket: "lifehack-2a4cf.appspot.com",
  messagingSenderId: "226996803267",
  appId: "1:226996803267:web:5c6b3da5e304bfca09b476"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);