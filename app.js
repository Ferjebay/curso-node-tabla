
const { options } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(error => console.log(error));



















