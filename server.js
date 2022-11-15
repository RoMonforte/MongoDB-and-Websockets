const express = require('express');
const bodyParser = require ('body-parser');

const response = require('./network/response')

const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/message', function(req,res) {
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado",
    })
    response.sucess(req, res, 'Lista de mensajes');
});

router.get('/', function(req,res) {
    res.send('Hola desde get');
});




router.post('/message', function(req,res) {
    console.log(req.query);
    if(req.query.error == "ok") {
        response.error(req, res, 'Error inesperado', 500, 'Solo una simulacion')
    } else {
        response.sucess(req, res, 'Creado correctamente', 201);      
    }
    console.log(req.body);
});
//app.use('/', function(req,res) {
//    res.send('Hola');
//})


app.use('/app', express.static('public'));
app.listen(3000);
console.log('Estoy corriendo en el puerto 3000');