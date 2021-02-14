import { useEffect } from 'react';

import { connect } from 'react-redux';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Authenticate from './shared/components/Authenticate';
import Account from './Account/pages/Account';
import Header from './shared/components/Navigation/Header';
import Home from './Home/Home';
import SongList from './Song/pages/SongList';
import SingleSong from './Song/pages/SingleSong';
import Footer from './shared/components/Footer';
import Weather from './shared/components/overlay/Weather';

import { chat } from './shared/util/chat';

import { loadUser } from './shared/redux/actions/auth';

import { websocket } from './shared/util/websockets';

const twitchClientId = process.env.REACT_APP_TWITCH_CLIENT_ID;
const twitchRedirURI = process.env.REACT_APP_TWITCH_REDIR_URI;
const twitchScopes = process.env.REACT_APP_TWITCH_SCOPES;
const twitchStreamerScopes = process.env.REACT_APP_BASE_TWITCH_STREAMER_SCOPES;

// console.log(twitchClientId);
// console.log(twitchRedirURI);
// console.log(twitchScopes);

const userURL = `https://id.twitch.tv/oauth2/authorize?client_id=${twitchClientId}&redirect_uri=${twitchRedirURI}&response_type=code&scope=${twitchScopes}&state=kj4h5kjh65kjh7lk456g3gyf55v5hj34`;
const streamerURL = `https://id.twitch.tv/oauth2/authorize?client_id=${twitchClientId}&redirect_uri=${twitchRedirURI}&response_type=code&scope=${twitchStreamerScopes}&state=kj4h5kjh65kjh7lk456g3gyf55v5hj34`;

const App = ({ user, loadUser, streamer }) => {
  let routes = null;
  let parsedUser = null;

  console.log('APP render...');
  if (!websocket.connected) websocket.connect();

  const storedUser = localStorage.getItem('user');

  if (storedUser) {
    parsedUser = JSON.parse(storedUser);
  }

  useEffect(() => {
    if (!user.isAuthenticated && parsedUser) {
      const now = Math.floor(Date.now() / 1000);
      if (!chat.connected && parsedUser.iat) {
        if (parsedUser.iat < now) {
          console.log('LOADING USER');
          loadUser({
            twitch_id: parsedUser.twitch_id,
            refresh_token: parsedUser.refresh_token,
            streamer: streamer.login
          });
        }
      }
    }
  }, [user.isAuthenticated, loadUser, parsedUser, streamer.login]);

  useEffect(() => {
    let timeout;
    if (user.isAuthenticated && !chat.connected) {
      timeout = setTimeout(() => {
        chat.connect(user.login, user.access_token, streamer.login);
      }, 5000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [user.isAuthenticated, user.login, user.access_token, streamer.login]);

  routes = (
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/song/list' exact>
        <SongList />
      </Route>
      <Route path='/song/:id' exact>
        <SingleSong />
      </Route>
      <Route exact path='/authenticate' component={Authenticate} />
      <Route exact path='/account' component={Account} />
      <Route
        exact
        path='/login'
        render={() => window.location.replace(userURL)}
      />
      <Route
        exact
        path='/streamer-login'
        render={() => window.location.replace(streamerURL)}
      />
      <Route
        exact
        path='/overlay/weather/rain'
        component={() => <Weather weatherStyle='rain' />}
      />
      <Route
        exact
        path='/overlay/weather/snow'
        component={() => <Weather weatherStyle='snow' />}
      />
    </Switch>
  );

  return (
    <Router>
      <Header user={user} />
      <main>{routes}</main>
      <Footer />
    </Router>
  );
};

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    streamer: state.streamer
  };
};

export default connect(mapStateToProps, { loadUser })(App);
