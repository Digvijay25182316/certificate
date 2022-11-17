// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} = require("firebase/auth");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3IMyiEsko5kQVMY8XnrnjM6w9D-2HXOQ",
  authDomain: "certificate-generator-3499b.firebaseapp.com",
  projectId: "certificate-generator-3499b",
  storageBucket: "certificate-generator-3499b.appspot.com",
  messagingSenderId: "434021410872",
  appId: "1:434021410872:web:bc670c25ea014f512f1ecd",
  measurementId: "G-MRL2TJRRNV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((data) => {
      const name = data.user.displayName;
      const email = data.user.email;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    })
    .catch((err) => console.log(err));
};
