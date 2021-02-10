import { io } from 'socket.io-client';

export let socket;

export const websocket = {
  connect: async () => {
    socket = await io('ws://192.168.86.118:8000', {
      auth: { client: 'website' }
    });
    socket.on('connect', () => {
      console.log('Socket.io connected');
      // websocket.ping(socket);
      websocket.connected = true;
    });
    socket.on('ping', ({ iat }) => {
      // console.log('Websocket ping', Date.now() - iat, 'ms');
    });
  },
  ping: socket => {
    let startTime;

    setInterval(function () {
      startTime = Date.now();
      console.log('Sending Ping!');
      socket.emit('ping');
    }, 10000);

    socket.on('pong', () => {
      let latency = Date.now() - startTime;
      console.log('Websocket ping ' + latency + ' ms');
    });
  },
  connected: false
};
