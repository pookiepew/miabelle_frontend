import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './shared/components/Navigation/Header';
import Home from './Home/Home';
import SongList from './Song/pages/SongList';
import SingleSong from './Song/pages/SingleSong';
import Footer from './shared/components/Footer';

const App = () => {
  let routes;

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
    </Switch>
  );

  return (
    <Router>
      <Header />
      <main>{routes}</main>
      <Footer />
    </Router>
  );
};

export default App;
