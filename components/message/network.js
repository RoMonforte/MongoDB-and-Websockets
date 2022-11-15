const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', function(req,res) {
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado",
    })
    response.sucess(req, res, 'Lista de mensajes');
});

router.get('/', function(req,res) {
    res.send('Hola desde get');
});




router.post('/', function(req,res) {

    controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
        response.sucess(req, res, fullMessage, 201)
    })
    .catch(error => {
        response.error(req, res, 'Informacion invalida', 400, 'Error en el controlador')   
    })

});

module.exports = router;