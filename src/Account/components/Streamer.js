import { useState } from 'react';

import SonglistMods from '../components/SonglistMods';

import TwitchChatMods from '../components/TwitchChatMods';

import Heyo from '../../assets/emotes/xxmiabHeyo.gif';

import './css/Streamer.css';

const Streamer = ({ user }) => {
  const [showSonglistMods, setShowSonglistMods] = useState(false);
  const [showChatMods, setShowChatMods] = useState(false);

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
          }}
        >
          Songlist mods
        </li>
        <li
          className='shadow'
          onClick={() => {
            setShowSonglistMods(false);
            setShowChatMods(true);
          }}
        >
          Twitch chat mods
        </li>
      </ul>
      <div>
        <SonglistMods show={showSonglistMods} />
        <TwitchChatMods show={showChatMods} />
      </div>
    </>
  );
};

export default Streamer;
