// const multiplicacao = require('./mod1');

// console.log(multiplicacao(2, 2));

// const aaaa = require('./B/C/D/mod1');

// const cachorrinho = new aaaa('Dog');
// cachorrinho.latir();

const Cachorro = require('./Z/mod2');

const c1 = new Cachorro('Dog');

c1.latir();

// ./ -> usado para caminhar nas pastas a partir da pasta que você está
// ../ -> usado para caminhar nas pastas voltando uma pasta a partir da que você está

console.log(__filename); // filename ele vai caminhar desde a raiz da sua pasta até o arquivo que você está
console.log(__dirname); // dirname ele vai caminhar desde a raiz da sua pasta até a pasta/diretório que você está

const path = require('path');
console.log(path.resolve(__dirname, '..', '..')); // path é usado pois não saberemos onde nossos softwares vão ser utilizados, por exemplo em qual SO ele vai ser rodado, se será em um servidor ou se será em um computador normal... Usamos então o path pois ele resolve isso pra gente, geralmente é passado como parâmetro o __dirname e também passar se quer voltar uma páginaou colocar o nome de uma pasta para ele avançar, etc...


