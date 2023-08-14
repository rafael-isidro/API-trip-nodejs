const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Conexão ao DB
const conn = require('./db/conn');
conn();

//Rotas
const routes = require('./routes/router');
app.use('/api', routes);

app.listen(3000, function () {
    console.log('Servidor Online.');
});