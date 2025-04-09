// CÓDIGO AJAX COM CALLBACK
// const request = obj => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method, obj.url, true);
//     xhr.send();

//     // Vamos usar código HTTPS, se quiser saber mais buscar no google para saber sobre
//     xhr.addEventListener('load', () => {
//         if(xhr.status >= 200 && xhr.status < 300) {
//             obj.success(xhr.responseText);
//         } else {
//             obj.error(xhr.statusText);
//         }
//     });
// };

// document.addEventListener('click', e => {
//     const el = e.target;
//     const tag = el.tagName.toLowerCase();

//     if(tag === 'a') {
//         e.preventDefault();
//         carregaPagina(el);
//     }
// });

// function carregaPagina(el) {
//     const href = el.getAttribute('href');

//     request({
//         method: 'GET',
//         url: href,
//         success(response) {
//             carregaResultado(response);
//         },
//         error(errorText) {
//             console.log(errorText);
//         }
//     });
// }

// function carregaResultado(response) {
//     const resultado = document.querySelector('.resultado');
//     resultado.innerHTML = response;
// }

// ---------------------------------------------------------------------------------------------------

// CÓDIGO AJAX COM PROMISE
// const request = obj => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(obj.method, obj.url, true);
//         xhr.send();
    
//         // Vamos usar código HTTPS, se quiser saber mais buscar no google para saber sobre
//         xhr.addEventListener('load', () => {
//             if(xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.responseText);
//             } else {
//                 reject(xhr.statusText);
//             }
//         });
//     });
// };

// document.addEventListener('click', e => {
//     const el = e.target;
//     const tag = el.tagName.toLowerCase();

//     if(tag === 'a') {
//         e.preventDefault();
//         carregaPagina(el);
//     }
// });

// function carregaPagina(el) {
//     const href = el.getAttribute('href');

//     const objConfig = {
//         method: 'GET',
//         url: href,
//     }

//     request(objConfig)
//         .then(response => {
//             carregaResultado(response);
//         })
//         .catch(error => console.log(error));
// }

// function carregaResultado(response) {
//     const resultado = document.querySelector('.resultado');
//     resultado.innerHTML = response;
// }

// ---------------------------------------------------------------------------------------------------

// CÓDIGO COM PROMISE E ASYNC E AWAIT
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();
    
        // Vamos usar código HTTPS, se quiser saber mais buscar no google para saber sobre
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        });
    });
};

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

// Usando async e await para utilizar a fetch api
async function carregaPagina(el) {
    try {
        const href = el.getAttribute('href');
        const response = await fetch(href);
    
        if(response.status !== 200) throw new Error('ERRO 404');
    
        const html = await response.text();
        carregaResultado(html);
    } catch(e) {
        console.log(e);
    }

    // Usando Fetch API para fazer uma requisição e tratar a resposta
    // fetch(href)
    //     .then(response => {
    //         if(response.status !== 200) throw new Error('ERRO 404');
    //         return response.text();
    //     })
    //     .then(html => carregaResultado(html))
    //     .catch(e => console.log(e));
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

fetch('pagina1.html')
    .then(resposta => {
        if(resposta.status !== 200) throw new Error('ERRO 404 NOSSO');
        return resposta.text();
    })
    .then(html => console.log(html))
    .catch(e => console.log(e));
