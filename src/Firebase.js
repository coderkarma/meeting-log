import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtrYV8DSr9958VAwZLL-j4rZsbdRnUL4A",
    authDomain: "react-spas-afc38.firebaseapp.com",
    databaseURL: "https://react-spas-afc38.firebaseio.com",
    projectId: "react-spas-afc38",
    storageBucket: "react-spas-afc38.appspot.com",
    messagingSenderId: "1047810575620",
    appId: "1:1047810575620:web:02d9dbb9ea0aa695"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;