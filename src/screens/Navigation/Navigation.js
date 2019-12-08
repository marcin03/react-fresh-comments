import React  from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import {CommentsScreen} from './../CommentsScreen/CommentsScreen';
import {FavouriteCommentsScreen} from './../FavouriteCommentsScreen/FavouriteCommentsScreen';
import {AppBar, Tabs, Tab, Box} from '@material-ui/core';

export const Navigation = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Router>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
        >
          <Tab
            label="All"
            component={Link}
            to="/"/>
          />
          <Tab
            label="Favourites"
            component={Link}
            to="/favourites"/>
          />
          <Tab
            label="Add"
            component={Link}
            to="/add"/>
          />
        </Tabs>
      </AppBar>
      <Switch>
        <Route path="/add" >
          Add Screen
        </Route>
        <Route path="/favourites" component={FavouriteCommentsScreen}/>
        <Route path="/" component={CommentsScreen}/>
      </Switch>
    </Router>
  );
}
