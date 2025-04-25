const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// function meuMiddleware(req, res, next) { // o parâmetro req permanece desde o primeiro middleware até o último
//     req.session = { nome: 'Luiz', sobrenome: 'Miranda' };
//     console.log();
//     console.log('Passei no seu middleware.');
//     console.log();
//     next();
// }

// Rotas da home
// route.get('/', meuMiddleware, homeController.paginaInicial, function(req, res) {
//     console.log('Ainda estou aqui.');
//     console.log(`'ultimoMiddleware' Olha o que tem na req.session.nome da página inicial ${req.session.nome}`);
// }); // o primeiro parâmetro é a '/' que é a home do site, os próximos parâmetros são middlewares, são parâmetros que podem chamar funções por exemplo

route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route;
