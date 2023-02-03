// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDOkn_zma3tSk6v-7Si4XrWsZtEQ_gMDBw",
  authDomain: "realtor-5827b.firebaseapp.com",
  projectId: "realtor-5827b",
  storageBucket: "realtor-5827b.appspot.com",
  messagingSenderId: "229260994185",
  appId: "1:229260994185:web:788f32467d15e5808dc858"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db=getFirestore()