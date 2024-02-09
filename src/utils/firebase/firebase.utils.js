import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';


// My web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcWGNctVFGfKT9eykx56S4nvzZ4CzPIgk",
    authDomain: "crown-clothing-db-9.firebaseapp.com",
    projectId: "crown-clothing-db-9",
    storageBucket: "crown-clothing-db-9.appspot.com",
    messagingSenderId: "18438153078",
    appId: "1:18438153078:web:d2d11c964b70d6d1ea5057"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
