const fs = require('fs');

const crearArchivo = async ( base = 5, listar, hasta ) => {
    try {
        let salida = '';

        salida += "=========================== \n";
        salida += `Tabla de multiplicar del ${base} \n`;
        salida += "=========================== \n";
    
        for (let index = 1; index <= hasta; index++) {
            salida += `${base} x ${index} = ${base*index} \n`;
        }
    
        fs.writeFileSync(`./salida/tabla${base}.txt`, salida);
    
        if(listar)
            console.log(salida);

        return `tabla${base}.txt`;        
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}