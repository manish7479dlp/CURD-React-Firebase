// import firebase from "firebase/app";
// import "firebase/database";


//  const firebaseConfig = {
//     apiKey: "AIzaSyAbc5DMjdsZ4ljIyHVKGBDTGpS3nOMo3w8",
//     authDomain: "fir-curd-ccffb.firebaseapp.com",
//     projectId: "fir-curd-ccffb",
//     storageBucket: "fir-curd-ccffb.appspot.com",
//     messagingSenderId: "24609259735",
//     appId: "1:24609259735:web:cbb4b332b4753fcec23092"
//   };
  
//   const fireDb = firebase.initializeApp(firebaseConfig);
//   export default fireDb.database().ref(); 
  
//   // export default firebase.initializeApp(firebaseConfig);
  

import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

var firebaseConfig = {
   // your firebase configuration goes here
   apiKey: "AIzaSyAbc5DMjdsZ4ljIyHVKGBDTGpS3nOMo3w8",
    authDomain: "fir-curd-ccffb.firebaseapp.com",
    projectId: "fir-curd-ccffb",
    storageBucket: "fir-curd-ccffb.appspot.com",
    messagingSenderId: "24609259735",
    appId: "1:24609259735:web:cbb4b332b4753fcec23092"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);

const db = firebaseDB.database().ref();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider, db };