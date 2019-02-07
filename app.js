const { argv } = require('./config/yargs');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
var colors = require('colors');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}
//let base = 'abd';

//console.log(process.argv);
// let arg = process.argv;
// let parametro = arg[2];
// base = parametro.split('=')[1];
// console.log(argv.base);
// console.log(argv.limite);
