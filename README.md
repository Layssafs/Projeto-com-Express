🚀 API de Usuários com Express.js + Prisma + PostgreSQL

Esta é uma API REST desenvolvida com Express.js, utilizando Prisma ORM para integração com PostgreSQL, permitindo o gerenciamento completo de usuários (CRUD).

O projeto foi estruturado seguindo boas práticas de organização, separação de responsabilidades e uso de ORM para facilitar a manutenção e escalabilidade da aplicação.

🛠️ Tecnologias Utilizadas

Node.js v24.13.1

Express v5.2.1

Prisma ORM v7.4.1

PostgreSQL

Nodemon (ambiente de desenvolvimento)

📦 Dependências Principais

express

@prisma/client

prisma

nodemon (dev)

📋 Pré-requisitos

Antes de iniciar, você precisa ter instalado:

Node.js 18 ou superior

PostgreSQL

npm

Verifique as versões:

node -v
npm -v
📥 1️⃣ Clonar o Repositório
git clone URL_DO_REPOSITORIO
cd NOME_DO_PROJETO
📦 2️⃣ Instalar as Dependências
npm install
🗄 3️⃣ Configurar o Banco de Dados

Certifique-se de que o PostgreSQL esteja em execução.

Crie o banco de dados:

CREATE DATABASE express_db;

A conexão com o banco é definida no arquivo:

prisma.config.ts

Exemplo de string de conexão:

postgresql://postgres:SUA_SENHA@localhost:5432/express_db

Substitua SUA_SENHA pela senha do seu PostgreSQL.

🔄 4️⃣ Executar as Migrations

Após configurar o banco, execute:

npx prisma migrate dev --name init

Esse comando irá:

Criar as tabelas no banco

Aplicar as migrations

Gerar o Prisma Client automaticamente

▶️ 5️⃣ Executar o Projeto

Modo desenvolvimento:

npm run dev

A aplicação iniciará na porta definida (geralmente 3000).

🌐 6️⃣ Acessar a Aplicação

Abra no navegador:

http://localhost:3000

---

# 🧪 7️⃣ Testar a API

Você pode testar utilizando:

- Postman  
- Insomnia  
- Thunder Client (VSCode)

Rotas disponíveis:

POST /users  
GET /users  
GET /users/:id  
PUT /users/:id  
DELETE /users/:id  

---

# ✅ Observações

- O banco deve estar ativo antes de iniciar o servidor.
- Verifique se a porta 3000 está livre.
- Caso ocorra erro de conexão, revise usuário, senha e porta do PostgreSQL.
- As consultas são feitas diretamente com SQL utilizando o driver `pg`.


