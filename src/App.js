import React  from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import {CommentsScreen} from './screens/CommentsScreen/CommentsScreen';
import {FavouriteCommentsScreen} from './screens/FavouriteCommentsScreen/FavouriteCommentsScreen';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/favourite-comments">Favourite</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/favourite-comments" component={FavouriteCommentsScreen}/>
            <Route path="/" component={CommentsScreen}/>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
