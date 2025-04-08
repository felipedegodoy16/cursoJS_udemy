function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE');

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Conexão com o BD', rand(1, 3))
    .then(resposta => { // esse parâmetro resposta é a msg que passamos no resolve
        console.log(resposta);
        return esperaAi('Buscando dados no BD', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Tratando dados do BD', rand(1, 3));
    })
    .then(() => {
        console.log('Exibe os dados do BD')
    })
    .catch(e => {
        console.log('ERRO', e);
    });

console.log('Isso aqui vai ser exibido antes de qualquer promise.');

// Funções de callback, foram substituídas por promises, basicamente são utilizadas para garantir que uma função será executada antes de outra
// function esperaAi(msg, tempo, cb) {
//     setTimeout(() => {
//         console.log(msg);
//         if(cb) cb();
//     }, tempo);
// }

// esperaAi('Frase 1', rand(1, 3), function() {
//     esperaAi('Frase 2', rand(1, 3), function() {
//         esperaAi('Frase 3', rand(1, 3));
//     });
// });