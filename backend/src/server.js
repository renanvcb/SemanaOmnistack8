const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers = {};

io.on('connection', socket => {
    const { user } = socket.handshake.query;
    
    connectedUsers[user] = socket.id;
});

//Conexão com banco de dados
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-5n312.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
});
//Permite que o backend seja acessado:
app.use(cors());

//Informa que estamos utilizando JSON
app.use(express.json());

//Seta as rotas no routes.js
app.use(routes);

//Informa qual porta o servidor irá "escutar"
server.listen(3333);