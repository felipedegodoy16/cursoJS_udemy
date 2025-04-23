const nome = 'Luiz';
const sobrenome = 'Miranda';

const falaNome = () => {
    return nome + ' ' + sobrenome;
};

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

exports.NOME = nome; // posso colocar o nome da chave do jeito que eu quiser
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'O que eu quiser exportar.';

// console.log(module.exports);

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;
