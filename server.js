const express = require('express');
const bodyParser = require ('body-parser');

const response = require('./network/response')

const router = require('./network/routes');


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(router);

router(app);



app.use('/app', express.static('public'));
app.listen(3000);
console.log('Estoy corriendo en el puerto 3000');