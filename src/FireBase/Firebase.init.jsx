// do not use this
// do not store config  on the client side



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOZowemxLa9LvOkgDo5sf70nXlbxc2pxg",
    authDomain: "simple-signin-9f22a.firebaseapp.com",
    projectId: "simple-signin-9f22a",
    storageBucket: "simple-signin-9f22a.firebasestorage.app",
    messagingSenderId: "613407617105",
    appId: "1:613407617105:web:61eba88fa3c7b6d7fb0870"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
export default auth;
