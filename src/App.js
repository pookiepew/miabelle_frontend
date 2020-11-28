import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <h1>Working</h1>
    </Provider>
  );
};

export default App;
