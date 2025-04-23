const express = require('express');
const app = express();

//         CRIAR   LER   ATUALIZAR  DELETAR
// CRUD -> CREATE, READ, UPDATE,    DELETE
//         POST    GET   PUT        DELETE

// http://meusite.com/ <- GET -> Entregue a página / que seria a home
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

// get vai ler, essa '/' é a rota inicial, nesse caso seria a home do site e recebe ainda uma função que irá tratar a requisição feita pelo usuário e a resposta do servidor
app.get('/', (req, res) => { // req(request) -> requisição feita pelo cliente | res(response) -> resposta do servidor 
    res.send(`
        <form action="/" method="post">
            Nome do cliente: <input type="text" name="nome">
            <button>Enviar</button>
        </form>`); // send -> é uma função que passa o que o será enviado como resposta
});

// é possível ter um tipo de requisição para cada página, ou seja, a '/' nesse caso que é nossa home pode ter um GET, um POST, um PUT e um DELETE juntos
app.post('/', (req, res) => {
    res.send('Recebi o formulário');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato.');
});

app.listen(3000, () => { // esse listen é usado para escutar uma porta, o parâmetro que foi passado é a porta que ele ficará ouvindo e o outro parâmetro é uma função que executará algo
    console.log('Acessar http://localhost:3000'); // isso gera um link no terminal que irá abrir uma guia no navegador
    console.log('Servidor executando na porta 3000');
}); 
