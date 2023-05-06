import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA2W-tKhyC_VmoNnlbp9-nhYa3VE1z9NOs",
  authDomain: "loginapp-5d627.firebaseapp.com",
  databaseURL: "https://loginapp-5d627-default-rtdb.firebaseio.com",
  projectId: "loginapp-5d627",
  storageBucket: "loginapp-5d627.appspot.com",
  messagingSenderId: "170274120215",
  appId: "1:170274120215:web:5fe23d5509006ad6dc3252",
  measurementId: "G-XEYNC6V21T"
};

 let app = initializeApp(firebaseConfig)
 const db = getStorage(app)

 export {db}