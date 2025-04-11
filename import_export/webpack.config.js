const path = require('path'); // CommonJS

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{ // esse rules comporta um array e pra cada tipo de arquivo são definidas algumas regras, nesse caso usaremos apenas para js, mas se tivesse algo para um arquivo css por exemplo teríamos que criar outro objeto com regras para esse tipo de arquivo
            exclude: /node_modules/, // excluindo a pasta node_modules para que o babel não fique traduzindo os arquivos dessa pasta, tem muitos arquivos nessa pasta
            test: /\.js$/, // expressão para falar o tipo do arquivo que irá compor o meu arquivo bundle
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devtool: 'source-map' // usado para mostrar onde foi o erro, o arquivo bundle comporta todos os arquivos 'js' da aplicação, então utilizando esse 'devtool', irá mostrar em que arquivo original foi o erro, se não utilizar isso ele vai dar erro na linha por exemplo 150 do bundle e você não saberá que linha é essa no seu arquivo original 
};