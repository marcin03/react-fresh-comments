import React from 'react';
import {useSelector} from 'react-redux';
import {selectFavouriteComments} from '../../store/reducers/commentsReducer';
import {CommentsList} from '../../components/CommentsList/CommentsList'

export const FavouriteCommentsScreen = () => {
  const favouriteCommentsList = useSelector(selectFavouriteComments);

  return (
    <div className="commentsScreen">
      <CommentsList commentsList={favouriteCommentsList}/>
    </div>
  );
};


