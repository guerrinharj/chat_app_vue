# Canal de Mensagens - Frontend (Vue 3)

Este é o frontend de uma aplicação de chat em tempo real, construído com **Vue 3**, **Vite**, **Vuex** e **Vue Router**. Ele se conecta a uma API Rails e usa **WebSockets (ActionCable)** para troca de mensagens em tempo real.

## 🚀 Funcionalidades

- Registro e login de usuários
- Armazenamento de token JWT no Vuex
- Conexão automática com WebSocket após login
- Envio e recebimento de mensagens em tempo real
- Interface responsiva e moderna
- Navegação entre páginas com Vue Router

## 🧩 Estrutura do Projeto

├── components/ # Componentes reutilizáveis como formulário e itens de mensagem
├── pages/ # Páginas principais: Home, Login, Register, Chat
├── store/ # Vuex para autenticação e mensagens
├── router/ # Configuração de rotas com guards de autenticação
├── utils/ # Funções auxiliares (ex: conexão WebSocket)
├── App.vue
└── main.js


## 🛠️ Instalação

### 🔹 Pré-requisitos

- Node.js `>= 18`
- Yarn
- A API backend Rails em execução em `http://localhost:3000`

1. Clone o repositório (ou entre na pasta do frontend):

```bash
cd chat_app_vue
```
2. Instale as dependências:

```bash
yarn
```
3. Inicie o servidor de desenvolvimento:

```bash
yarn dev
```


4.Acesse a aplicação:

```arduino 
http://localhost:5173
```