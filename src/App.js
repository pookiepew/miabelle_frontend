import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SongList from './Song/pages/SongList';

import './App.css';

const App = () => {
  console.log('[APP] render');

  let routes;

  routes = (
    <Switch>
      <Route path='/song/list' exact>
        <SongList />
      </Route>
    </Switch>
  );

  return (
    <Router>
      <main>{routes}</main>
    </Router>
  );
};

export default App;
