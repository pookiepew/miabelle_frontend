import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './shared/components/Navigation/Header';
import Home from './Home/Home';
import SongList from './Song/pages/SongList';

const App = () => {
  console.log('[APP] render');

  let routes;

  routes = (
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/song/list' exact>
        <SongList />
      </Route>
    </Switch>
  );

  return (
    <Router>
      <Header />
      <main>{routes}</main>
    </Router>
  );
};

export default App;
