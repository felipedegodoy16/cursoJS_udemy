(function() {
    function criaCalculadora() {
        return {
            display: document.querySelector('.display'),

            inicia() {
                this.cliqueBotoes();
                this.pressionaEnter();
            },

            pressionaEnter() {
                this.display.addEventListener('keyup', e => {
                    if(e.keyCode === 13) {
                        this.realizaConta();
                    }
                });
            },

            btnParaDisplay(valor) {
                this.display.value += valor;
            },

            btnDelete() {
                this.display.value = this.display.value.slice(0, -1);
            },

            clearDisplay() {
                this.display.value = '';
            },

            realizaConta() {
                let conta = this.display.value;

                try {
                    conta = eval(conta);

                    if(!conta) {
                        alert('Conta inválida!');
                        return;
                    }

                    this.display.value = conta;
                } catch(err) {
                    alert('Conta inválida!');
                }
            },

            cliqueBotoes() {
                document.addEventListener('click', (e) => {
                    const el = e.target;

                    if(el.classList.contains('btn-num')) {
                        this.btnParaDisplay(el.innerText);
                    }
            
                    if(el.classList.contains('btn-clear')) {
                        this.clearDisplay();
                    }
            
                    if(el.classList.contains('btn-del')) {
                        this.btnDelete();
                    }

                    if(el.classList.contains('btn-eq')) {
                        this.realizaConta();
                    }
                });
            }
        };
    }

    const calculadora = criaCalculadora();
    calculadora.inicia();
})();
