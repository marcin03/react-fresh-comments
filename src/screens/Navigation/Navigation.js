import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import {CommentsScreen} from './../CommentsScreen/CommentsScreen';
import {AddCommentScreen} from './../AddCommentScreen/AddCommentScreen';
import {FavouriteCommentsScreen} from './../FavouriteCommentsScreen/FavouriteCommentsScreen';
import {AppBar, Tabs, Tab} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {getCommentsFromApi} from '../../store/actions/index';
import {selectAllComments} from '../../store/reducers/commentsReducer';

export const Navigation = () => {
  const commentsList = useSelector(selectAllComments);
  useEffect(() => {
      if(commentsList.length===0){
        dispatch(getCommentsFromApi())
      }
    }
    //eslint-disable-next-line
    , []);
  const dispatch = useDispatch();


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
      <div className="App">
      <Switch>
        <Route path="/add" component={AddCommentScreen}/>
        <Route path="/favourites" component={FavouriteCommentsScreen}/>
        <Route path="/" component={CommentsScreen}/>
      </Switch>
      </div>
    </Router>
  );
}
