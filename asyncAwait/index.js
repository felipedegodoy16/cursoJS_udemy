function rand(min=0, max=3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('CAI NO ERRO');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}

// esperaAi('Fase 1', rand())
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('Fase 2', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperaAi('Fase 3', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//     })
//     .catch(e => console.log(e));

/* Async / Await -> fazem com que o código espere eles terminarem de executar para depois dar continuidade no código, ou seja, usado para fazer como as promises fazem porém com um código um pouco mais limpo, a diferença entre eles é que nesse caso seria necessário utilizar o bloco try catch para conseguir tratar o erro caso haja um 'reject' e ele irá parar a execução a partir do ponto que ocorreu o erro, antes disso ele irá executar normalmente */
async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1', rand());
        console.log(fase1);
    
        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);
    
        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3);
    } catch(e) {
        console.log(e);
    }
}

executa();
