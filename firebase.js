import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMpB1J1dZgOFxfppB-BzMWKSyEEOqD-jc",
    authDomain: "ecommerce-6c625.firebaseapp.com",
    projectId: "ecommerce-6c625",
    storageBucket: "ecommerce-6c625.appspot.com",
    messagingSenderId: "44142611747",
    appId: "1:44142611747:web:6ce801c72236b9fbdcd096"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();