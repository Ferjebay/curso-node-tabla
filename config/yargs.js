const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .check( (argv, options) => {
        if(isNaN(argv.base)){
            throw 'La base tiene que se un numero';
        }  
        return true;      
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',        
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',        
        demandOption: false,
        default: 10,
        describe: 'permite multiplicar hasta un numero de veces'
    })
    .argv;

module.exports = argv;