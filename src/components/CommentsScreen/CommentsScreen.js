import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCommentsFromApi} from './../../store/actions';
import {selectAllComments} from './../../store/reducers/commentsReducer';
import {CommentsList} from './../CommentsList/CommentsList'

const CommentsScreen = () => {
  useEffect(() => {
      dispatch(getCommentsFromApi())
      //console.log('mounted')
    }
    //eslint-disable-next-line
    , []);
  const dispatch = useDispatch();
  const commentsList = useSelector(selectAllComments);
  console.log("commentsList", commentsList)

  return (
    <div className="commentsScreen">
      <CommentsList commentsList={commentsList}/>
    </div>
  );
};

export default CommentsScreen;


