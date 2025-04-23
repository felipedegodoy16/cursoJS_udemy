const express = require('express');
const app = express();

// http://facebook.com/profiles/12345?campanha=googleads&nome=seila

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="post">
            Nome do cliente: <input type="text" name="qualquercoisa">
            <button>Enviar</button>
        </form>`);
});

// req.params -> são os parâmetros que são passados na URL /testes/1 -> '1' é um parâmetro
// req.query -> são os pares de chave e valor passados pela URL /testes/?chave=valor&outro=outroV -> chave=valor e para separar um par de cada é usado &
app.get('/testes/:idUsuarios', (req, res) => { // essa rota indica que depois de acessar a url testes/ eu irei receber um parâmetro chamado idUsuarios, o problema de se usar isso é que não é possível mais acessar o caminho /testes sem parâmetros, obrigatoriamente tem que ser passado algo, para deixar que um parâmetro seja opcional basta colocar uma interrogação '?' na frente do idUsuarios e para colocar mais parâmetros é só ir colocando igual nesse caminho
    console.log(req.params); // irá logar o nome da chave que nesse caso é 'idUsuarios: valor passado ela url'
    console.log(req.query);
    res.send(req.params.idUsuarios);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.qualquercoisa}`); // esse 'nome' vem do 'name' do input
});

app.listen(3000, () => { 
    console.log('Acessar http://localhost:3000'); 
    console.log('Servidor executando na porta 3000');
}); 
