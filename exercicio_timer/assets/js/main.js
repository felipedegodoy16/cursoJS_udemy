function relogio() {
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;

    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    function iniciaRelogio() {
        timer = setInterval(() => {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }

    document.addEventListener('click', (e) => {
        const el = e.target;
        
        if(el.classList.contains('iniciar')) {
            clearInterval(timer);
            iniciaRelogio();
            document.querySelector('.pausar').innerHTML = 'Pausar';
            relogio.style.color = 'black';
        }

        if(el.classList.contains('pausar')) {
            if(el.innerHTML === 'Continuar') {
                iniciaRelogio();
                el.innerHTML = 'Pausar';
                relogio.style.color = 'black';
            } else {
                clearInterval(timer);
                el.innerHTML = 'Continuar';
                relogio.style.color = 'red';
            }
        }

        if(el.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.style.color = 'black';
            document.querySelector('.pausar').innerHTML = 'Pausar';
            segundos = 0;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }
    });
}

relogio();
