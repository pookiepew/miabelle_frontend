import Heyo from '../../assets/emotes/xxmiabHeyo.gif';

import Hype from '../../assets/emotes/hype.png';

import { chat } from '../../shared/util/chat';

import './css/Users.css';

const Users = ({ user, twitchChat, streamer }) => {
  let statusColor = 'danger';

  console.log('[Users] Render');

  if (twitchChat.connectionStatus === 'Connected') statusColor = 'success';
  if (twitchChat.connectionStatus === 'Not Connected') statusColor = 'danger';
  if (twitchChat.connectionStatus === 'Disconnected') statusColor = 'danger';

  return (
    <>
      <h1 className='users__heading'>
        Hi {user.display_name} <img src={Heyo} alt='Waving emote' />
      </h1>
      <p className='container'>
        There isn't much you can do here yet, but we will add more later on!{' '}
        <img className='account__emote' src={Hype} alt='Hype emote' />
      </p>
      {twitchChat.connectionStatus && (
        <div>
          <p>
            Twitch Chat Connection Status:{' '}
            <span className={statusColor}>{twitchChat.connectionStatus}</span>
          </p>
          {twitchChat.connectionStatus === 'Disconnected' && (
            <button
              onClick={() =>
                chat.connect(user.login, user.access_token, streamer.login)
              }
              className='btn mt-1 success'
            >
              Reconnect to chat!
            </button>
          )}
        </div>
      )}
      {twitchChat.connectionStatus === 'Connected' && (
        <>
          <button onClick={chat.disconnect} className='btn mt-2 danger'>
            Disconnect from Twitch chat
          </button>
          <p>
            If you disconnect from Twitch chat you won't be able to request
            songs.
          </p>
        </>
      )}
    </>
  );
};

export default Users;
