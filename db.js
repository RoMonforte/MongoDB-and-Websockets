const db = require('mongoose');

db.Promise = global.Promise;
//url = 'mongodb+srv://db_user:51uXojEQY8NaSD4k@cluster0.qcakis2.mongodb.net/test'
async function connect(url) {
     db.connect(url, {
        useNewUrlParser: true,
    });
    
    console.log('[db] Conectado con exito'); 
}


module.exports = connect;