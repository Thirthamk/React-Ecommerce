import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCKwKrGSORn1g-nFpm6plp0PV7CV4eBWxM",
    authDomain: "ecommerce-website-e5ba1.firebaseapp.com",
    projectId: "ecommerce-website-e5ba1",
    storageBucket: "ecommerce-website-e5ba1.appspot.com",
    messagingSenderId: "475374992575",
    appId: "1:475374992575:web:1b6cbabd67eed22ef5da0a",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export { auth, fs, storage };
