exports.paginaInicial = (req, res) => {
    res.render('index'); // usado para renderizar um arquivo, nesse caso um arquivo da pasta view, é mostrado o caminho no arquivo 'server.js' onde também é passado a engine que será utilizada
};

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de POST');
};