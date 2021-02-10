import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';

import Spinner from '../../shared/UIElements/Spinner';

import Users from '../components/Users';

import Streamer from '../components/Streamer';

import './css/Account.css';

const Account = ({ user, twitchChat, streamer }) => {
  console.log('[Account] Render');

  return (
    <section className='container account'>
      {!user.isAuthenticated && <Redirect to='/' />}
      {user.loading && (
        <div class='account__spinner'>
          <Spinner />
        </div>
      )}
      {!user.loading && user.login === streamer.login ? (
        <Users user={user} twitchChat={twitchChat} streamer={streamer} />
      ) : (
        <Streamer user={user} />
      )}
    </section>
  );
};

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    twitchChat: state.twitchChat,
    streamer: state.streamer
  };
};

export default connect(mapStateToProps)(Account);
