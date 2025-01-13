console.log('arquivo carregado de forma correta')
// Importar as funções necessárias do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
// import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";


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

const pagina = document.body.dataset.page;

if (pagina === "registro") {

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
    const nome = document.getElementById("nome").value;
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
        const userCredential = await createUserWithEmailAndPassword(auth, email, senha,nome);
        console.log("Conta criada com sucesso:", userCredential.user);

        await setDoc(doc(db, "users", user.uid), {
            nome: nome,
            email: email,
            criadoEm: new Date().toISOString()
        });

        alert("Conta criada com sucesso!");
        window.location.href = "login.html";

        
    } catch (error) {
        console.error("Erro ao criar conta:", error.message);
        alert(`Erro: ${error.message}`);
    }
});
}



// Botão de login
if (pagina === "login") {
const submitlog = document.getElementById("submitlog");

submitlog.addEventListener("click", async function (event) {
    event.preventDefault();
    // Inputs para login
    const email = document.getElementById("loginemail").value;
    const senha = document.getElementById("loginsenha").value;
  

   
    // Criar conta no Firebase
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, senha);
        const user = userCredential.user;

        // Busca informações do usuário no Firestore
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
            const userData = userDoc.data();
            console.log("Nome do usuário recuperado:", userData.nome);
            alert(`Bem-vindo de volta, ${userData.nome}!`);
        } else {
            console.log("Usuário não encontrado no banco de dados.");
            alert("Erro: Informações adicionais não encontradas.");
        }
        window.location.href = "index.html";

        
    } catch (error) {
        console.error("Erro ao logar:", error.message);
        alert(`Erro: ${error.message}`);
    }
});
}