module.exports = (io) => {
    const router = require('express').Router();

    io.on('connection', (socket) => {
        console.log('New client connected');

        socket.on('message', (data) => {
            io.emit('message', data); // Broadcast message to all clients
        });

        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });
    });

    return router;
};

