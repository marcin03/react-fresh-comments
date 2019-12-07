import React  from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import {store} from './store/store';
import CommentsScreen from './components/CommentsScreen/CommentsScreen';

  function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CommentsScreen/>
      </div>
    </Provider>
  );
}

export default App;
