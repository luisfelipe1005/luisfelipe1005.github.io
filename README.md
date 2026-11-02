# 🐉 Gerenciador e Gerador de Monstros - Tormenta RPG

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

Este projeto web foi desenvolvido para auxiliar mestres do sistema **Tormenta RPG** na criação, balanceamento automático e gerenciamento de fichas de monstros, utilizando tabelas oficiais de Nível de Desafio (ND) e integração com banco de dados em nuvem.

---

## 🎯 Funcionalidades Principais

- **Autenticação de Usuários:** Sistema completo de cadastro e login de usuários utilizando **Firebase Auth** e **Cloud Firestore** para salvar as informações de perfil[cite: 3].
- **Criador Manual e Automático de Monstros:** Interface interativa para preenchimento de atributos, tipos, subtipos, tamanhos, deslocamento e equipamentos.
- **Auto-Preenchimento Inteligente Baseado em ND:** O sistema cruza automaticamente o Nível de Desafio (ND) e o papel do monstro em combate (*Solo*, *Lacaio* ou *Especial*) para sugerir valores balanceados de Defesa (CA), Resistências (Fortitude, Reflexo, Vontade), Pontos de Vida (PV), bônus de ataque e dano médio.
- **Templates de Armas Base:** Atalhos rápidos para preenchimento de ataques padrão (chifres, mordida, cauda, espada longa, pistola) com cálculo automático de dados e margens de crítico.
- **Listagem e Consulta Dinâmica:** Visualização de fichas cadastradas puxadas diretamente do **Firebase Realtime Database**, exibindo atributos formatados e estatísticas de combate prontas para uso em mesa.

---

## 🧠 Tecnologias e Conceitos Aplicados

- **Front-end:** HTML5 estilizado com CSS inline responsivo e temas customizados baseados no universo de Arton e Tormenta.
- **JavaScript Moderno (ES6+):** Manipulação avançada do DOM, funções assíncronas (`async/await`) e gerenciamento de eventos.
- **Banco de Dados e Backend as a Service (BaaS):** 
  - **Firebase Realtime Database:** Armazenamento e consulta síncrona das fichas de monstros cadastradas.
  - **Firebase Authentication & Firestore:** Gerenciamento de contas de usuário e armazenamento de metadados de cadastro.

---

## 📂 Estrutura de Arquivos

```text
├── index.html                 # Página inicial com menu de navegação
├── criar_monstro.html         # Formulário de criação e auto-preenchimento de monstros
├── mostrar_monstros.html      # Tela de listagem e consulta de fichas cadastradas
├── login.html                 # Tela de autenticação de usuários
├── registro.html              # Tela de cadastro de novas contas
├── firebase.js                # Configuração e lógica de integração com o Firebase (Auth/Firestore)
└── avaliar_monstro.html       # Página complementar de avaliação de fichas
