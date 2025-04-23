const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.set('views', path.resolve(__dirname, 'src', 'views')); // path é usado para pegar o caminho absoluto, e depois é passado o caminho de onde virão as views, ou seja, a rota sempre irá buscar nesse caminho as views a serem renderizadas 
app.set('view engine', 'ejs'); // passa qual a engine que será utilizada para renderizar as views

app.use(routes);

app.listen(3000, () => { 
    console.log('Acessar http://localhost:3000'); 
    console.log('Servidor executando na porta 3000');
}); 
