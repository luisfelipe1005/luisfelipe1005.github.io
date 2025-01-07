// Importar as funções necessárias do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD4pj-vv2AUd9BUjMpGppHrgK7aFkfQ96Q",
    authDomain: "tormenta-projeto.firebaseapp.com",
    databaseURL: "https://tormenta-projeto-default-rtdb.firebaseio.com",
    projectId: "tormenta-projeto",
    storageBucket: "tormenta-projeto.firebasestorage.app",
    messagingSenderId: "840338790531",
    appId: "1:840338790531:web:713b137e4fc6a8640623b6",
    measurementId: "G-H43EHD51KJ",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);




// Botão de login 
//

const submitlog = document.getElementById("submitlog");

submitlog.addEventListener("click", async function (event) {
    event.preventDefault();
alert(1)
    // Inputs para login
    const email = document.getElementById("loginemail").value;
    const senha = document.getElementById("loginsenha").value;
    alert(2)

   
    // Criar conta no Firebase
    try {
        alert(3)
        const userCredential = await signInWithEmailAndPassword(auth, email, senha);
        console.log("Conta criada com sucesso:", userCredential.user);
        alert("Logado com sucesso!");
        window.location.href = "index.html";

        
    } catch (error) {
        console.error("Erro ao logar:", error.message);
        alert(`Erro: ${error.message}`);
    }
});
