API de Usuários com Express e Prisma
Esta é uma API simples para gerenciamento de usuários, construída com Express.js e Prisma ORM.

📋 Requisitos
Node.js (versão 14 ou superior)

npm ou yarn

Banco de dados configurado com Prisma (PostgreSQL, MySQL, SQLite, etc.)

🛠️ Instalação
Clone o repositório:

bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
Instale as dependências:

bash
npm install
# ou
yarn install
Configure seu banco de dados no arquivo prisma/schema.prisma e execute as migrações:

bash
npx prisma migrate dev --name init
Inicie o servidor:

bash
npm start
# ou
yarn start

🌐 Endpoints
GET /users
Descrição: Retorna todos os usuários cadastrados
Resposta de sucesso:
json
[
  {
    "id": "1",
    "email": "usuario@example.com",
    "name": "João Silva",
    "age": 30
  }
]
POST /users

Descrição: Cria um novo usuário
Corpo da requisição:
json
{
  "email": "novo@example.com",
  "name": "Maria Souza",
  "age": 25
}
Resposta de sucesso: 201 Created com mensagem "User created"

PUT /users/:id
Descrição: Atualiza um usuário existente

Parâmetros:
id: ID do usuário a ser atualizado
Corpo da requisição:

json
{
  "email": "atualizado@example.com",
  "name": "Nome Atualizado",
  "age": 35
}
DELETE /users/:id
Descrição: Remove um usuário
Parâmetros:
id: ID do usuário a ser removido
Resposta de sucesso: Mensagem "User deleted"

⚙️ Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

text
DATABASE_URL="sua-string-de-conexao"

🚀 Executando em Desenvolvimento
Para desenvolvimento com recarregamento automático:

bash
npm run dev
# ou
yarn dev

🤝 Contribuição
Contribuições são bem-vindas! Siga estes passos:
Faça um fork do projeto
Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)
Commit suas mudanças (git commit -m 'Add some AmazingFeature')
Push para a branch (git push origin feature/AmazingFeature)
Abra um Pull Request

📄 Licença
Distribuído sob a licença MIT. Veja LICENSE para mais informações.

✉️ Contato
Seu Nome - seu-email@example.com
Link do Projeto: https://github.com/seu-usuario/nome-do-repositorio
