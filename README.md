
<h1 align="center">
    <a href="#" alt="API Trip"> API Trip </a>
</h1>

<h3 align="center">
    API RESTful desenvolvida utilizando Node.js, Express, Mongoose, com integração ao Banco de Dados.
</h3>


Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto]
   * [Funcionalidades]
   * [Como executar o projeto]
     * [Pré-requisitos]
     * [Rodando o Projeto]
   * [Tecnologias]
   * [Estrutura do Projeto]
   * [Autor]
<!--te-->


## 💻 Sobre o projeto

O projeto API Trip foi desenvolvido dispondo das operações de Criar, Listar, Alterar e Excluir dados de viagens e serviços (operações CRUD), validando o valor total de serviços incluídos em determinada viagem com o orçamento disponível, permitindo que o usuário planeje viagens de acordo com o seu orçamento. O projeto possui uma estrutura simples e conexão ao banco de dados MongoDB Atlas utilizando o Mongoose.

---

## ⚙️ Funcionalidades

- [x] (/trips) As funcionalidades de viagens são:
    - [x] Criar viagem, onde deve-se informar no 'body':
        - Destino (String)
        - Data (String: dd/mm/aaaa)
        - Descrição (String)
        - Orçamento (Number)
        - Imagem (String)
        - Serviços (Opcional)
    - [x] Listar viagens
    - [x] Listar viagem específica, informando o seu id como 'parâmetro de rota'
    - [x] Alterar viagem pelo id informado no parâmetro de rota, onde deve-se informar no 'body' pelo menos uma das propriedades para alteração:
        - Destino (String)
        - Data (String: dd/mm/aaaa)
        - Descrição (String)
        - Orçamento (Number)
        - Imagem (String)
        - Serviços (Opcional)
    - [x] Excluir viagem específica, informando o seu id como 'parâmetro de rota'

- [x] (/services) As funcionalidades de serviços são:
    - [x] Criar serviço, onde deve-se informar no 'body':
        - Nome (String)
        - Descrição (String)
        - Preço (Number)
        - Imagem (String)
    - [x] Listar serviços
    - [x] Listar serviço específico, informando o seu id como 'parâmetro de rota'
    - [x] Alterar serviço pelo id informado no 'parâmetro de rota', onde deve-se informar no 'body' pelo menos uma das propriedades para alteração:
        - Nome (String)
        - Descrição (String)
        - Preço (Number)
        - Imagem (String)
    - [x] Excluir serviço específico, informando o seu id como 'parâmetro de rota'

---

## ▶️ Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### Rodando o projeto

```bash

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3000 - acesse http://localhost:3000 

*OBS.: Em db > conn.js > `YOUR_DB_CONNECTION_STRING` will be your MongoDB connection string.

```
---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

-   **[Node Js](https://nodejs.org/en)**
-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[Mongoose](https://mongoosejs.com/docs/guide.html)**
-   **[Date-fns](https://date-fns.org/docs/Getting-Started)**

## 🧱 Estrutura do Projeto

```sh
.
├── app.js
├── package.json
├── controllers
│   ├── serviceController.js
│   └── tripController.js
├── db
│   └── conn.js
├── middlewares
│   └── middlewares.js
├── models
│   ├── Service.js
│   └── Trip.js
└── routes
    ├── router.js
    ├── services.js
    └── trips.js


## 🦸 Autor

<a href="https://github.com/rafael-isidro">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/118776145?v=4" width="100px;" alt="Foto de perfil - Rafael Isidro"/>
 <br />
 <sub><b>Rafael Isidro</b></sub></a> <a href="https://github.com/rafael-isidro" title="Github">🚀</a>
 <br />

 [![Linkedin Badge](https://img.shields.io/badge/-Rafael%20Isidro-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/rafael-isidro/)](https://www.linkedin.com/in/rafael-isidro/) 