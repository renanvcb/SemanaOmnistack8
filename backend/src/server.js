const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

//Conexão com banco de dados
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-5n312.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

//Permite que o backend seja acessado:
server.use(cors());

//Informa que estamos utilizando JSON
server.use(express.json());

//Seta as rotas no routes.js
server.use(routes);

//Informa qual porta o servidor irá "escutar"
server.listen(3333);