import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDNVz092cg4413m-QKSMzMIxJEgsfDWLnc",
    authDomain: "weee-tk.firebaseapp.com",
    projectId: "weee-tk",
    storageBucket: "weee-tk.appspot.com",
    messagingSenderId: "237395422680",
    appId: "1:237395422680:web:f93969315c1957b6a796ad",
    measurementId: "G-PF4TY8Q5T3",
  });
  firebase.analytics();
}

export const auth = firebase.auth();
export default firebase;

// Setting up google auth provider
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
