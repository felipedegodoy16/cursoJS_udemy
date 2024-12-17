const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' }
];

const section = document.querySelector('.container');
const divTextos = document.createElement('div');

for(let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);
    divTextos.appendChild(tagCriada);
}

section.appendChild(divTextos);

// Uso de desestruturação e uma forma diferente de se criar e texto e inserir esse texto em uma tag com o createTextNode()