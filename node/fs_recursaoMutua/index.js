const fs = require('fs').promises;
const path = require('path');

// fs.readdir(path.resolve(__dirname))
//     .then(files => console.log(files))
//     .catch(e => console.log(e));

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir) { // essa é uma função que tem no python muito utilizada
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);

        if(/\.git/g.test(fileFullPath)) continue; // expressão regular para não entrar em diretórios .git

        if(/\node_modules/g.test(fileFullPath)) continue; // expressão para não entrar em diretórios node_modules
        
        if(stats.isDirectory()) { // verificando se o arquivo atual tem como status ser um diretório
            readdir(fileFullPath); // chamada recursiva para a primeira função passando o endereço do diretório atual
            continue;
        }

        if(!/\.css$/g.test(fileFullPath)) continue; // fazendo com que arquivos qe não sejam .css sejam listados

        console.log(file, stats.isDirectory());
    }
}

readdir('/Documentos/FELIPE_BACKUP/FELIPE/ESTUDOS/js/cursoJS_udemy/');
