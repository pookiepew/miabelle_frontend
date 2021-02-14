import tmi from 'tmi.js';

import store from '../redux/store';

import { setConnectionStatus } from '../redux/actions/twitchChat';

import { loadUser } from '../redux/actions/auth';

/** @type {import('tmi.js').Client} */
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
    client.on('connecting', (address, port) => {
      store.dispatch(setConnectionStatus('Connecting'));
    });
    client.on('connected', (address, port) => {
      store.dispatch(setConnectionStatus('Connected'));
    });
    client.on('disconnected', reason => {
      store.dispatch(setConnectionStatus('Disconnected'));
    });
    client.on('message', (channel, tags, message, self) => {
      if (self) return;
      const { twitchChat } = store.getState();
      if (twitchChat.connectionStatus !== 'Connected')
        store.dispatch(setConnectionStatus('Connected'));
      if (message === '!dance') {
        client.say(
          channel,
          'catJAM catJAM catJAM catJAM catJAM catJAM catJAM catJAM'
        );
      }
    });
    try {
      await client.connect();
      chat.connected = true;
    } catch (err) {
      console.log('CATCH client connect!!');
      if (err === 'Login authentication failed') {
        console.log('Loading user / refreshing access token.');
        const { auth } = await store.getState();
        store.dispatch(
          loadUser({
            twitch_id: auth.user.twitch_id,
            refresh_token: auth.user.refresh_token
          })
        );
      }
      store.dispatch(setConnectionStatus('Not Connected due to error!'));
    }
  },
  connected: false,
  say: async function (channel, message) {
    await client.say(channel, message);
  },
  disconnect: async () => {
    try {
      await client.disconnect();
    } catch (error) {
      console.log(error);
    }
  }
};
