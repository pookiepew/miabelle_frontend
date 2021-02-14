import { useState } from 'react';

import SonglistMods from '../components/SonglistMods';

import TwitchChatMods from '../components/TwitchChatMods';

import Heyo from '../../assets/emotes/xxmiabHeyo.gif';

import './css/Streamer.css';

const Streamer = ({ user }) => {
  const [showSonglistMods, setShowSonglistMods] = useState(false);
  const [showChatMods, setShowChatMods] = useState(false);
  const [showTwitchChat, setShowTwitchChat] = useState(false);

  return (
    <>
      <h1>
        Hi {user.display_name} <img src={Heyo} alt='Waving emote' />
      </h1>
      <ul className='streamer__controls flex flex-space-around mt-3'>
        <li
          className='shadow'
          onClick={() => {
            setShowSonglistMods(true);
            setShowChatMods(false);
            setShowTwitchChat(false);
          }}
        >
          Songlist mods
        </li>
        <li
          className='shadow'
          onClick={() => {
            setShowTwitchChat(true);
            setShowSonglistMods(false);
            setShowChatMods(false);
          }}
        >
          Twitch Chat
        </li>
        <li
          className='shadow'
          onClick={() => {
            setShowChatMods(true);
            setShowSonglistMods(false);
            setShowTwitchChat(false);
          }}
        >
          Twitch chat mods
        </li>
      </ul>
      <div>
        <SonglistMods show={showSonglistMods} />
        <SonglistMods show={showTwitchChat} />
        <TwitchChatMods show={showChatMods} />
      </div>
    </>
  );
};

export default Streamer;
