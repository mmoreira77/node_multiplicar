const fs = require('fs');
var colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`Base no es un número`);
            return;
        }

        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (error) => {
            if (error) reject(error);
            else
                resolve(`tablas/tabla-${base}.txt`);
            console.log(`El archivo tabla-${base} ha sido creado`);
        });
    });
};

let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`.green);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
};

