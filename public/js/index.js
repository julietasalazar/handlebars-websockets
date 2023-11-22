const socket = io();

socket.emit('message', 'Hello from the client.');

socket.on('start', (data) => {
    console.log('event start', data);
});