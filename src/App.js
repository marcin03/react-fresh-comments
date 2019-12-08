import React  from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {Navigation} from './screens/Navigation/Navigation';

function App() {
  return (
    <Provider store={store}>
      <Navigation/>
      <div className="App">
      </div>
    </Provider>
  );
}

export default App;
