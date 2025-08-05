# 💪 Vida Ativa API

API RESTful desenvolvida para registrar e monitorar a frequência de alunos em uma associação. Professores autenticados podem gerenciar o cadastro de alunos, registrar presenças e consultar faltas por dia, semana ou datas específicas.

![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/-Express.js-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

---

## 🧠 Funcionalidades

- Autenticação de professores (login obrigatório)
- Cadastro e gerenciamento de alunos
- Registro de presença dos alunos
- Consulta de faltas por dia, semana ou mês
- Consulta de frequência por data específica

---

## 🔐 Autenticação

Todas as ações no sistema exigem que o professor esteja autenticado.  
A autenticação é feita via login (`/auth`) e as rotas subsequentes exigem token de acesso que é fornecido pelo front-end.

---

## 🔗 Frontend do projeto

O frontend que consome essa API está disponível em:  
➡️ [Repositório do Frontend no GitHub](https://github.com/Kaua032/Vida_Ativa_Front_End)

## 🔗 Principais Endpoints

```http
# Autenticação
POST    /auth

# Usuário (professor)
POST    /user/register
PUT     /user/changepassword
PUT     /user/update
GET     /user/all
GET     /user/finduser

# Aluno
POST    /student/register
GET     /student/all

# Frequência
POST    /frequence/add
GET     /frequence/consult
GET     /frequence/allmonth
GET     /frequence/allweek
```
## 📦 Como rodar o projeto localmente

> Pré-requisitos:
> - Node.js instalado
> - No .env deve ser fornecido uma Porta, Mongo_uri, secret_jwt

```bash
git clone https://github.com/Kaua032/Vida_Ativa_API.git
cd Vida_Ativa_API
npm install
npm run dev
