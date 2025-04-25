// exports.paginaInicial = (req, res, next) => {
//     res.render('index'); // usado para renderizar um arquivo, nesse caso um arquivo da pasta view, é mostrado o caminho no arquivo 'server.js' onde também é passado a engine que será utilizada
//     // return; // usado para cortar de vez mesmo a execução, pois, sei que essa é minha última função, ela não é um middleware
//     console.log(`'paginaInicial' Olha o que tem na req.session.nome da página inicial ${req.session.nome}`);
//     next(); // nesse caso já houve a resposta ao cliente que é renderizando uma página index e ainda está chamando uma nova função
// };

exports.paginaInicial = (req, res) => {
    res.render('index');
    return; // usado para cortar de vez mesmo a execução, pois, sei que essa é minha última função, ela não é um middleware
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};