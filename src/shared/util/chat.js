import tmi from 'tmi.js';

export let client;

export const chat = {
  connect: async function (username, password, channel) {
    client = new tmi.Client({
      options: { debug: true },
      connection: {
        reconnect: true,
        secure: true
      },
      identity: {
        username,
        password
      },
      channels: [channel]
    });
    try {
      await client.connect();
      client.on('connected', () => {
        console.log('TMI Connected!');
        chat.connected = true;
      });
    } catch (err) {
      console.log('CATCH client connect!!');
      if (err === 'Login authentication failed')
        console.log('Login authentication failed');
    }
  },
  connected: false,
  say: async function (channel, message) {
    await client.say(channel, message);
  }
};
