import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAcQ4_3G6SjXL9TzfanoNXqf2VAkgaAgbc",
  authDomain: "logowanie-c59b7.firebaseapp.com",
  projectId: "logowanie-c59b7",
  storageBucket: "logowanie-c59b7.appspot.com",
  messagingSenderId: "437694394185",
  appId: "1:437694394185:web:0ebcd6f0ed63126dadb498"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);