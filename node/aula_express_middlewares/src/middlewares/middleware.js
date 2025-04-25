exports.middlewareGlobal = (req, res, next) => {
    
    if(req.body) {
        console.log();
        console.log(`Vi que você postou ${req.body.nome}`);
        console.log();
    }

    next();
}

exports.outroMiddleware = (req, res, next) => {
    console.log('Outro middleware');
    next();
};