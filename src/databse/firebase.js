import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  //usar do firebase
};

 let app = initializeApp(firebaseConfig)
 const db = getStorage(app)

 export {db}