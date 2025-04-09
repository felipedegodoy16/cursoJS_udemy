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

async function carregaPagina(el) {
    const href = el.getAttribute('href');

    const objConfig = {
        method: 'GET',
        url: href,
    }

    try {
        const response = await request(objConfig);
        carregaResultado(response);
    } catch(e) {
        console.log(e);
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}
