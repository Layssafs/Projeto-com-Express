# 🚀 API de Usuários com Express.js

Este projeto é uma API simples desenvolvida com Express.js e PostgreSQL para gerenciamento de usuários.

---

# 📦 Dependências

express  
pg  
dotenv  

---

# 🟢 Versão da Linguagem e Versão da ORM

Node.js v24.13.1 
Express express@5.2.1 
Não utiliza ORM (usa driver pg para conexão direta com PostgreSQL)

---

# 📋 Pré-requisitos

Antes de começar, você precisa ter instalado:

- Node.js 18 ou superior
- PostgreSQL
- npm (gerenciador de pacotes do Node)

Verifique sua versão do Node:

```bash
node -v
```

Verifique sua versão do npm:

```bash
npm -v
```

---

# 📦 1️⃣ Clonar o Repositório

```bash
git clone URL_DO_REPOSITORIO
cd NOME_DO_PROJETO
```

---

# 📥 2️⃣ Instalar as Dependências

```bash
npm install
```

Caso precise instalar manualmente:

```bash
npm install express pg dotenv
```

---

# 🗄 3️⃣ Configurar o Banco de Dados

Certifique-se de que o PostgreSQL esteja em execução.

## Criar o banco:

```sql
CREATE DATABASE express_db;
```

---

## Criar a tabela:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL
);
```

---

# 🔐 4️⃣ Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```
DATABASE_URL=postgres://postgres:SUA_SENHA@localhost:5432/express_db
PORT=3000
```

Substitua `SUA_SENHA` pela senha do seu PostgreSQL.

---

# ▶️ 5️⃣ Executar o Projeto

```bash
node src/app.js
```

Se estiver usando nodemon:

```bash
npx nodemon src/app.js
```

---

# 🌐 6️⃣ Acessar a Aplicação

Após iniciar o servidor, acesse:

```
http://localhost:3000
```

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