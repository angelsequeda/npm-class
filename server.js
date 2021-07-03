//console.log('hi with nodemon2');
require('dotenv').config();
const http = require('http');
const server = http.createServer(request);

const {leer_fetch} = require('./modules/library');


async function request(req,res) {
    let resultado = await leer_fetch();
    res.write(`${resultado}`);
    res.end();
};

server.listen(process.env.PORT,process.env.HOST,() =>{
    console.log(`Servidor iniciado en http://${process.env.HOST}:${process.env.PORT}`);
});