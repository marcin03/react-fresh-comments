import React from 'react';
import {Comment} from './../Comment/Comment'
import {Grid} from '@material-ui/core';

export const CommentsList = ({commentsList}) => {
  const comments = commentsList.map(item => {
    console.log(item);
    return(
      <Grid item xs={12} sm={6} md={4}>
        <Comment {...item} key={item.id}/>
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
