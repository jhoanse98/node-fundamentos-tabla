

/******************* CONFIGURACION DE YARGS *************/

const { number, describe } = require('yargs');

const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'La base de la tabla de multiplicar'
            })
            .option('h', {
                alias: 'hasta',
                type: 'number',
                demandOption: true,
                default: 10,
                describe: 'Indica el límite de la tabla'
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                describe: 'Muestra la tabla en consola',
                default: false,
            })
            .check((argv, options) => {
                if(isNaN(argv.b)){
                    throw ' la base debe ser un número'
                }
                return true;
            })
            .argv;

module.exports = argv