import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
	getAuth,
	signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig =  {
  apiKey: "AIzaSyALcydsuW2piC34gGRsjt69H_0b0Ohmpx8",
  authDomain: "authentication-test-2e124.firebaseapp.com",
  projectId: "authentication-test-2e124",
  storageBucket: "authentication-test-2e124.appspot.com",
  messagingSenderId: "991399458655",
  appId: "1:991399458655:web:6c0bb3956f20cd823d28ea",
  measurementId: "G-TPTJ4X9G29"
};
console.log("User ID:", user.uid);
console.log("Email:", user.email)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.querySelector('.register-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get email and password from the input fields
  const email = document.getElementById('emailInput').value;
  const password = document.getElementById('passwordInput').value;

  // Sign in the user with email and password
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in successfully
      const user = userCredential.user;
      alert('Login Successful!');
      // Redirect to another page if needed
    })
    .catch((error) => {
      // Handle errors
      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`);
    });
});