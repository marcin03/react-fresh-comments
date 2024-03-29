import React from 'react';
import {Comment} from './../Comment/Comment'
import {Grid} from '@material-ui/core';

export const CommentsList = ({commentsList}) => {
  const comments = commentsList.map(item => {
    return(
      <Grid item xs={12} sm={6} md={4} key={item.id}>
        <Comment {...item} />
      </Grid>
    )
  })
  return (
    <div className="commentsList">
      <Grid container spacing={2}>
        {comments}
      </Grid>
    </div>
  );
};
