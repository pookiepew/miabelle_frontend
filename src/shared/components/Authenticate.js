import { useEffect } from 'react';

import { useLocation, Redirect } from 'react-router-dom';

import Spinner from '../UIElements/Spinner';

import { connect } from 'react-redux';

import { login } from '../redux/actions/auth';

import './css/Authenticate.css';

const Authenticate = ({ login, user, loading, streamer }) => {
  const location = useLocation();

  useEffect(() => {
    // HANDLE THIS!!!!!!!
    // http://localhost:3000/authenticate?error=access_denied&error_description=The+user+denied+you+access&state=kj4h5kjh65kjh7lk456g3gyf55v5hj34

    // if (location.search) {
    //   const laa = location.search.split('?error=')[1].split('&')[0];
    //   if (laa) return <Redirect to='/' />;
    // }

    if (location.search) {
      const code = location.search.split('?code=')[1].split('&scope=')[0];
      login(code, streamer.login);
    }

    window.history.replaceState(
      {},
      '',
      window.location.origin + '/authenticate'
    );
  }, [location.search, login, streamer.login]);

  let output;

  if (loading || !user) {
    output = <Spinner />;
  } else if (user && user.isAuthenticated) {
    output = <Redirect to='/account' />;
  }
  if (!location.search) {
    output = <Redirect to='/login' />;
  }
  return (
    <div className={'main__container'}>
      <h1 className={'indie'}>{loading && 'Hold on, logging you in'}</h1>
      <div>{output}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  loading: state.auth.loading,
  streamer: state.streamer
});

export default connect(mapStateToProps, { login })(Authenticate);
