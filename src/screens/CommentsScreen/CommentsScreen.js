import React from 'react';
import {useSelector} from 'react-redux';
import {selectAllComments} from '../../store/reducers/commentsReducer';
import {CommentsList} from '../../components/CommentsList/CommentsList'

export const CommentsScreen = () => {
  const commentsList = useSelector(selectAllComments);
  return (
    <div className="commentsScreen">
      <CommentsList commentsList={commentsList}/>
    </div>
  );
};
