const fs = require('fs').promises;
// const path = require('path');
// const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json');

// const pessoas = [
//     { nome : 'João' },
//     { nome : 'Maria' },
//     { nome : 'Eduarda' },
//     { nome : 'Luiza' }
// ];
// const json = JSON.stringify(pessoas, '', 2);

// fs.writeFile(caminhoArquivo, 'Frase 1', { flag: 'a', encoding: 'utf8' }); // flag nesse caso apaga tudo que tem no arquivo e escreve a Frase 1 que foi mandada, o encoding nesse caso não é necessário mandar pois por padrão ele já é utf8, vou deixar para exemplificar

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w' }); 
};
