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

// Função para validar a senha (exemplo customizado)
const validatePassword = (password) => {
    return {
        isValid: password.length >= 8, // Exemplo: senha deve ter pelo menos 8 caracteres
        containsLowercaseLetter: /[a-z]/.test(password),
        containsUppercaseLetter: /[A-Z]/.test(password),
        containsNumber: /\d/.test(password),
    };
};

// Botão de submit para o registro
const submitreg = document.getElementById("submitreg");
submitreg.addEventListener("click", async function (event) {
    event.preventDefault();

    // Inputs para login
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Validação da senha
    const status = validatePassword(senha);
    if (!status.isValid) {
        const needsLowerCase = status.containsLowercaseLetter !== true;
        const needsUpperCase = status.containsUppercaseLetter !== true;
        const needsNumber = status.containsNumber !== true;

        console.log("Requisitos faltando:");
        if (needsLowerCase) console.log("- Precisamos de uma letra minúscula.");
        if (needsUpperCase) console.log("- Precisamos de uma letra maiúscula.");
        if (needsNumber) console.log("- Precisamos de um número.");
        return; // Interrompe o cadastro se a senha for inválida
    }

    // Criar conta no Firebase
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
        console.log("Conta criada com sucesso:", userCredential.user);
        alert("Conta criada com sucesso!");
        window.location.href = "login.html";

        
    } catch (error) {
        console.error("Erro ao criar conta:", error.message);
        alert(`Erro: ${error.message}`);
    }
});




// Botão de login

const submitlog = document.getElementById("submitlog");
submitlog.addEventListener("click", async function (event) {
    event.preventDefault();

    // Inputs para login
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

   
    // Criar conta no Firebase
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, senha);
        console.log("Conta criada com sucesso:", userCredential.user);
        alert("Conta criada com sucesso!");
        window.location.href = "login.html";

        
    } catch (error) {
        console.error("Erro ao criar conta:", error.message);
        alert(`Erro: ${error.message}`);
    }
});
