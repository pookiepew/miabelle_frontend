import { useEffect } from 'react';

import { connect } from 'react-redux';

import { getUsersByStreamer } from '../../shared/redux/actions/streamer';

import Userlist from './Userlist';

import './css/SonglistMods.css';

const SonglistMods = ({ show, streamer, getUsersByStreamer }) => {
  useEffect(() => {
    getUsersByStreamer(streamer.login);
  }, [getUsersByStreamer, streamer.login]);
  return (
    <div className={show ? 'block mt-3' : 'hide'}>
      <h2>Connected users:</h2>
      <Userlist users={streamer.users.all} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    streamer: state.streamer
  };
};

export default connect(mapStateToProps, { getUsersByStreamer })(SonglistMods);
