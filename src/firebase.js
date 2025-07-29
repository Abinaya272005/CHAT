import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyChxVnWvnWAwQuuoDDIWAUF_RfUcFh2d64",
    authDomain: "mindtalk-c1de9.firebaseapp.com",
    projectId: "mindtalk-c1de9",
    storageBucket: "mindtalk-c1de9.appspot.com",
    messagingSenderId: "638008152565",
    appId: "1:638008152565:web:a7ba2beb66ee49e86150bc",
    measurementId: "G-PWKKQMPQ27"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider };