import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCommentsFromApi} from '../../store/actions/index';
import {selectAllComments} from '../../store/reducers/commentsReducer';
import {CommentsList} from '../../components/CommentsList/CommentsList'

export const CommentsScreen = () => {
  const commentsList = useSelector(selectAllComments);
  useEffect(() => {
    if(commentsList.length==0){
      dispatch(getCommentsFromApi())
    }
    }
    //eslint-disable-next-line
    , []);
  const dispatch = useDispatch();

  return (
    <div className="commentsScreen">
      <CommentsList commentsList={commentsList}/>
    </div>
  );
};
