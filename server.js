const express = require('express');
const bodyParser = require ('body-parser');
const response = require('./network/response')
const db = require('./db');
const router = require('./network/routes');


db('mongodb+srv://db_user:51uXojEQY8NaSD4k@cluster0.qcakis2.mongodb.net/test');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(router);

router(app);



app.use('/app', express.static('public'));
app.listen(3000);
console.log('Estoy corriendo en el puerto 3000');