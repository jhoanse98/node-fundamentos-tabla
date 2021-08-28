const fs = require('fs');

require('colors')

const Multiplicar = async (base=5, listar, h) => {
    try{
        let salida = '';
        let consola= ''

        for(let i=0; i <= h; i++){
            salida += `${base} x ${i} = ${base * i} \n`
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i} \n`
        }

        if(listar){
            console.log('============='.green)
            console.log('la base es: '.green, `${base}`.blue)
            console.log('============='.green)
            console.log(salida)
        }

        fs.writeFileSync(`./salida/tablade${base}.txt`, salida)

        return `tablade${base}.txt`;
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    Multiplicar
}