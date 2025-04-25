const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const { middlewareGlobal, outroMiddleware } = require('./src/middlewares/middleware'); // importação via desestruturação, ou seja, está sendo retornado um objeto desse caminho que estou buscando e desse objeto estou pegando apenas a função que eu quero usar

app.use(express.urlencoded({ extended: true })); // isso é um middleware, todas as requisições passam por esse middleware

app.use(express.static(path.resolve(__dirname, 'public'))); // isso é um middleware, todas as requisições passam por esse middleware

app.set('views', path.resolve(__dirname, 'src', 'views')); // path é usado para pegar o caminho absoluto, e depois é passado o caminho de onde virão as views, ou seja, a rota sempre irá buscar nesse caminho as views a serem renderizadas 
app.set('view engine', 'ejs'); // passa qual a engine que será utilizada para renderizar as views

// Nossos próprios Middlewares
app.use(middlewareGlobal); // colocar essa função faz com que qualquer requisição passe por esse middleware, ou seja, independente do caminho que o usuário usar será executado esse middleware
// app.use(outroMiddleware);
app.use(routes); // isso é um middleware, todas as requisições passam por esse middleware

app.listen(3000, () => { 
    console.log('Acessar http://localhost:3000'); 
    console.log('Servidor executando na porta 3000');
}); 
