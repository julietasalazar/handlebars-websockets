import { Server } from "socket.io";

export const init = (httpServer) => {
    const socketServer = new Server(httpServer);

    socketServer.on('connection', (socketClient) => {
        console.log(`Nuevo cliente socket conectado ${socketClient.id}`);

        socketClient.emit('start', {status: "ok"});
        
        socketClient.on('message', (msg) => {
            console.log(`Cliente envió un nuevo mensaje: ${msg}`);
        });
    });
}