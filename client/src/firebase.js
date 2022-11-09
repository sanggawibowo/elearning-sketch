// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.apiKey,
//   authDomain: process.env.authDomain ,
//   projectId: process.env.projectId,
//   storageBucket: process.env.storageBucket,
//   messagingSenderId: process.env.messagingSenderId,
//   appId: process.env.appId
// };

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTZ6cO_l4qDEWC6ssJX7cB65LssYGfugE",
  authDomain: "utube-clone-40889.firebaseapp.com",
  projectId: "utube-clone-40889",
  storageBucket: "utube-clone-40889.appspot.com",
  messagingSenderId: "88269051016",
  appId: "1:88269051016:web:9061e79230391672c87b3d"
};

// export const MockEnv = ()=> {
//   console.log()
// }

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const provider = new GoogleAuthProvider()

export default app