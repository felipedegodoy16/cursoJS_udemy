const mod1 = require('./mod1'); // importando tudo que exportei no arquivo mod1
const falaNome = require('./mod1').falaNome; // importando apenas a função falaNome
const { nome, sobrenome, falaNomeDes } = require('./mod1'); // importar por meio de desestruturação, ou seja, quebrar tudo que estou exportando em variáveis 

console.log(mod1);
console.log(falaNome());
console.log(falaNomeDes());

const { Pessoa } = require('./mod1'); // o require com ./ só é necessário para casos em que o módulo do qual queremos exportar foi criado por nós

module.exports = {
    nome, sobrenome, Pessoa
}

const path = require('path'); // esse path é instalado junto com o node modules, ou seja, para esses casos não é necessário colocar o caminho desde a origem apenas o nome do módulo já é suficiente

const axios = require('axios'); // outro exemplo que não precisa do caminho completo desde a origem
axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(e));

const p1 = new Pessoa('Luiz');
console.log(p1);
