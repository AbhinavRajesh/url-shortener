import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import "firebase/analytics";

const firebaseApp: FirebaseApp = initializeApp({
  apiKey: "AIzaSyDNVz092cg4413m-QKSMzMIxJEgsfDWLnc",
  authDomain: "weee-tk.firebaseapp.com",
  projectId: "weee-tk",
  storageBucket: "weee-tk.appspot.com",
  messagingSenderId: "237395422680",
  appId: "1:237395422680:web:f93969315c1957b6a796ad",
  measurementId: "G-PF4TY8Q5T3",
});

export const auth = getAuth(firebaseApp);

// Setting up google auth provider
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
