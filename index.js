const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

io.on('connection', function(socket) {
    console.log('Nuevo cliente connectado')
    socket.emit('mensaje','bienvenido!')
})

setInterval(function () {
    io.emit('mensaje', 'Hola a todos');
},3000);

server.listen(8080, function() {
    console.log('Server init in 8080');
});