import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDcWGNctVFGfKT9eykx56S4nvzZ4CzPIgk",
    authDomain: "crown-clothing-db-9.firebaseapp.com",
    projectId: "crown-clothing-db-9",
    storageBucket: "crown-clothing-db-9.appspot.com",
    messagingSenderId: "18438153078",
    appId: "1:18438153078:web:d2d11c964b70d6d1ea5057"
  };
  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    // If the user is not exist, create the user
    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt
            });
        } catch (error){
            console.log('Error creating the user', error.message);
        }
    }

    // If the user exist, return the user
    return userDocRef;
}