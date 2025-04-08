function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject('BAD VALUE');
            return;
        }

        setTimeout(() => {
            resolve(msg);
            return;
        }, tempo);
    });
}

// Promise.all -> executa todas as promises e retorna ao final todos os valores juntos. Se uma das promises for rejeitada ele para a execução e retorna apenas o erro, ou seja, não retorna nem as que deram certo
const promisesAll = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    'Outro valor'
];

Promise.all(promisesAll)
    .then(function(valor) {
        console.log(valor)
    })
    .catch(function(erro) {
        console.log(erro)
    });
    
// Promise.race -> executa as promises e retorna apenas o primeiro valor que for retornado. Ele não para de executar o código, ou seja, ele continuará executando as outras funções mas não retornará nada, nesse caso se o erro não estiver dentro do setTimeout que usamos dentro da função será retornado o erro, se estiver com um tempo mesmo que haja o erro e ele não for o primeiro a ser retornado irá aparecer apenas o primeiro resultado que foi retornado
const promisesRace = [
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi(222, rand(1, 5)),
];

Promise.race(promisesRace)
    .then(valor => {
        console.log(valor);
    })
    .catch(erro => {
        console.log(erro);
    });

// Promise.resolve -> usado para que caso alguma condição seja atendida ele irá executar direto o resolve, caso não ele irá chamar outra função por exemplo e irá executar essa outra função, nesse caso é uma simulação de uma página da web que esteja salva em cache ou não, se estiver salva ele retorna direto essa página, se não ele chama a função 'esperaAi'
function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log(e));

// Promise.reject -> mesma ideia do '.resolve', porém, caso alguma condição seja diretamente atendida ele irá direto para o then
function baixaPaginaReject() {
    const emCache = true;

    if(emCache) {
        return Promise.reject('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPaginaReject()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log(e));