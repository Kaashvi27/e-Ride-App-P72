import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
apiKey: "AIzaSyCYDSSIVNxHzxJ-fXsNKbQBil-2uGDb224",
authDomain: "e-ride-app-279be.firebaseapp.com",
projectId: "e-ride-app-279be",
storageBucket: "e-ride-app-279be.appspot.com",
messagingSenderId: "610758738436",
appId: "1:610758738436:web:ca1cb8f38cff0cd6326b51"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
