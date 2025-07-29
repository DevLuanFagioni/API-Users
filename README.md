# API de Usuários com Express e Prisma + MongoDB

Esta é uma API simples para gerenciamento de usuários, construída com **Express.js** e **Prisma ORM**.

---

## 📋 Requisitos

- Node.js (versão 14 ou superior)  
- npm ou yarn  
- Banco de dados configurado com Prisma (MongoDB)

---

## 🛠️ Instalação

### Clone o repositório:
```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

### Instale as dependências:
```bash
npm install
# ou
yarn install
```

### Configure o banco de dados e execute as migrações:
Edite o arquivo `prisma/schema.prisma` com sua conexão e execute:
```bash
npx prisma migrate dev --name init
```

### Inicie o servidor:
```bash
npm start
# ou
yarn start
```

---

## 🌐 Endpoints

### `GET /users`
**Descrição:** Retorna todos os usuários cadastrados  
**Resposta de sucesso:**
```json
[
  {
    "id": "1",
    "email": "usuario@example.com",
    "name": "João Silva",
    "age": 30
  }
]
```

---

### `POST /users`
**Descrição:** Cria um novo usuário  
**Corpo da requisição:**
```json
{
  "email": "novo@example.com",
  "name": "Maria Souza",
  "age": 25
}
```
**Resposta de sucesso:** `201 Created` com a mensagem `"User created"`

---

### `PUT /users/:id`
**Descrição:** Atualiza um usuário existente  
**Parâmetros:**  
- `id`: ID do usuário a ser atualizado  

**Corpo da requisição:**
```json
{
  "email": "atualizado@example.com",
  "name": "Nome Atualizado",
  "age": 35
}
```

---

### `DELETE /users/:id`
**Descrição:** Remove um usuário  
**Parâmetros:**  
- `id`: ID do usuário a ser removido  

**Resposta de sucesso:** Mensagem `"User deleted"`

---

## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com a seguinte variável:

```env
DATABASE_URL="sua-string-de-conexao"
```

---

## 🚀 Executando em Desenvolvimento

Para iniciar com recarregamento automático:

```bash
npm run dev
# ou
yarn dev
```

---

## 🦸 Autor

Olá, eu sou Luan Fagioni, desenvolvedor Front-end/Full-Stack

<p>
  <a href="mailto:luanfagioni@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank">
  <a href= "https://www.linkedin.com/in/luanfagioni/"><img alt="" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
  <a href= "https://www.instagram.com/devluanfagioni/"><img alt="" src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"></a>
  <a href= "https://www.youtube.com/@luanfagioni"><img alt="" src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white"></a>
</p>

---

&nbsp;
<a id="-licença"></a>

## 📝 Licença

Este projeto é [MIT licensed](./LICENSE).
