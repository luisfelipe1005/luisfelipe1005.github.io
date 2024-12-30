  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
  import {getAuth, createUserWithEmailAndPassword, validatePassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
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

  const status = await validatePassword(getAuth(), passwordFromUser);
  if (!status.isValid) {
    // Password could not be validated. Use the status to show what
    // requirements are met and which are missing.
  
    // If a criterion is undefined, it is not required by policy. If the
    // criterion is defined but false, it is required but not fulfilled by
    // the given password. For example:
    const needsLowerCase = status.containsLowercaseLetter !== true;
    const needsUpperCase = status.containsUppercaseLetter !== true;
    const needsNumber = status.containsNumber !== true;

    console.log("Requisitos faltando:");
    if (needsLowerCase) console.log("- Precisamos de uma letra minúscula.");
    if (needsUpperCase) console.log("- Precisamos de uma letra maiúscula.");
    if (needsNumber) console.log("- Precisamos de um número.");
   else {
    console.log("Senha válida!");
  }
}

  //botão de submit

  const submit = document.getElementById('submit');
  submit.addEventListener("click",function(event){
event.preventDefault()
//inputs para login

const email = document.getElementById('email').value;
const senha=document.getElementById('senha').value;
try {
  const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
  console.log("Conta criada com sucesso:", userCredential.user);
  alert("Conta criada com sucesso!");
} catch (error) {
  console.error("Erro ao criar conta:", error.message);
  alert(`Erro: ${error.message}`);
}
});