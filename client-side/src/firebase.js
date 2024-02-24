import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCXm0VJQOni_skMSVp2kbZknivl1oyWGko",
  authDomain: "lifeline-30f58.firebaseapp.com",
  projectId: "lifeline-30f58",
  storageBucket: "lifeline-30f58.appspot.com",
  messagingSenderId: "3432724946",
  appId: "1:3432724946:web:20830fc6f9b7ae9cb2700b",
  measurementId: "G-L91BTPV2FW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()
export const signInWithGoogle = () =>{
    signInWithPopup(auth,provider).then((result) =>{
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });
}