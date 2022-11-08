const express = require('express');
const bodyParser = require ('body-parser');

const router = express.Router();

var app = express();
app.use(router);
app.use(bodyParser.json());

router.get('/', function(req,res) {
    res.send('Hola desde get');
});
router.post('/', function(req,res) {
    console.log(req.body);
    res.send('Hola desde post');
});
//app.use('/', function(req,res) {
//    res.send('Hola');
//})

app.listen(3000);
console.log('Estoy corriendo en el puerto 3000');