const numero = Number(prompt('Digite um número:'));

const spanTitle = document.getElementById('numero-titulo');
spanTitle.innerText = numero;

const divTexto = document.getElementById('texto');
divTexto.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`;
divTexto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
divTexto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
divTexto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}</p>`;
divTexto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`;
divTexto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;