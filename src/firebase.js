import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCj5oxbRBu31FJhr4EuKsU-Fd8HhoOGpSc",
    authDomain: "database-46a3c.firebaseapp.com",
    databaseURL: "https://database-46a3c-default-rtdb.firebaseio.com",
    projectId: "database-46a3c",
    storageBucket: "database-46a3c.appspot.com",
    messagingSenderId: "1078948395770",
    appId: "1:1078948395770:web:ed7fdd6aae9d77df45e743"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const db = getFirestore();
const colRef = collection(db, 'users');

export { auth, provider, db, colRef, facebookProvider }