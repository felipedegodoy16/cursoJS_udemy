const nome = 'Luiz';
const sobrenome = 'Miranda';
export const idade = 30;

function soma(x, y) {
    return x + y;
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export { nome as nome2, sobrenome, soma };
