const form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validacoes();
});

function validacoes() {
    const inputPeso = document.querySelector('#peso');
    const inputAltura = document.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso) {
        msg = 'Peso inválido';
        cor = 'red';
        setResultado(msg, cor);
        return;
    } else if(!altura) {
        msg = 'Altura inválida';
        cor = 'red';
        setResultado(msg, cor);
        return;
    }

    calculo(peso, altura);
}

function calculo(peso, altura) {
    
    let imc = peso / (altura**2);

    verificaPeso(imc);
}

function verificaPeso(imc) {

    msg = `Seu IMC é ${imc.toFixed(2)}, `;

    if(imc < 18.5) {
        msg += 'Abaixo do peso';
    } else if(imc < 25) {
        msg += 'Peso normal';
    } else if(imc < 30) {
        msg += 'Sobrepeso';
    } else if(imc < 35) {
        msg += 'Obesidade grau 1';
    } else if(imc < 40) {
        msg += 'Obesidade grau 2';
    } else {
        msg += 'Obesidade grau 3';
    }

    setResultado(msg);
}

function setResultado(msg, cor='green') {
    const resultado = document.querySelector('#resultado');
    resultado.style.backgroundColor = cor;

    const p = document.createElement('p');
    p.innerHTML = msg;

    resultado.appendChild(p);
}