/*
const {Multiplicar} = require('./helpers/Multiplicar');

Multiplicar(7)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));

*/


/******************* CONFIGURACION DE YARGS *************/



//console.log(process.argv);
const argv = require('./config/yargs')
const {Multiplicar} = require('./helpers/Multiplicar');

Multiplicar(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));

