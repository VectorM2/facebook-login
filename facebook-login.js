import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";

import { getAuth, FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBCuqaXwAJ_LTT47__c7nH92db4fViFGbQ",
  authDomain: "login-html-css-3328a.firebaseapp.com",
  projectId: "login-html-css-3328a",
  storageBucket: "login-html-css-3328a.appspot.com",
  messagingSenderId: "1059833278881",
  appId: "1:1059833278881:web:06254824a493fa0ebf5be0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new FacebookAuthProvider();
const auth = getAuth();
auth.languageCode = 'it';
const analytics = getAnalytics(app);

console.log(provider)


const facebook_login = document.getElementById('facebookBtn');

facebook_login.addEventListener('click', function (event) {
  event.preventDefault();



  signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;

      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      alert(result);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
      alert(errorMessage)
      // ...
    });

})