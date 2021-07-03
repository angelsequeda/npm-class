const moment = require('moment');
const fetch = require('node-fetch');
module.exports.fechaCool = () =>{
    const fecha = new moment('2/07/2021','DD/MM/YYYY');
    const fechaFormateada = fecha.format('MM/DD/YY');
    return fechaFormateada;
}

module.exports.leer_fetch = async () =>{
    let lectura = await fetch('https://api.chucknorris.io/jokes/random');
    let lectura_json = await lectura.json();
    return lectura_json.value;
}