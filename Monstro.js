  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
  import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD4pj-vv2AUd9BUjMpGppHrgK7aFkfQ96Q",
    authDomain: "tormenta-projeto.firebaseapp.com",
    databaseURL: "https://tormenta-projeto-default-rtdb.firebaseio.com",
    projectId: "tormenta-projeto",
    storageBucket: "tormenta-projeto.firebasestorage.app",
    messagingSenderId: "840338790531",
    appId: "1:840338790531:web:713b137e4fc6a8640623b6",
    measurementId: "G-H43EHD51KJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

  //botão de submit

  const submit = document.getElementById('submit');
  submit.addEventListener("click",function(event){
    alert(1)
event.preventDefault()
alert(2)
//inputs para login

const email = document.getElementById('email').value;
const senha=document.getElementById('senha').value;
alert(3)
createUserWithEmailAndPassword(auth, email, senha)
.then((userCredential) => {
// Signed up
const user = userCredential.user;
alert("Criando conta.")
})
.catch((erroг) => {
const errorCode = error.code;
const errorMessage = error.message;
alert(errorMessage)
});

  })