(function() {
    function Calculadora() {
        this.display = document.querySelector('.display');

        this.inicia = () => {
            this.cliqueBotoes();
            this.pressionaEnter();
        };

        this.pressionaEnter = () => {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) this.realizaConta();
            });
        };

        this.btnParaDisplay = valor => {
            this.display.value += valor;
            this.display.focus();
        }

        this.btnDelete = () => this.display.value = this.display.value.slice(0, -1);

        this.clearDisplay = () => this.display.value = '';

        this.realizaConta = () => {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('conta inválida!');
                    return;
                }

                this.display.value = conta;
            } catch(err) {
                alert('Conta inválida!');
            }
        };

        this.cliqueBotoes = () => {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);

                if(el.classList.contains('btn-clear')) this.clearDisplay();

                if(el.classList.contains('btn-del')) this.btnDelete();

                if(el.classList.contains('btn-eq')) this.realizaConta();
            });
        };
    }

    const calculadora = new Calculadora();
    calculadora.inicia();
})();
