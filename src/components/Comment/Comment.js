import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import {
  CardHeader,
  Card,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {switchIsFavouriteComment} from './../../store/actions';

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
  }
}));

export const Comment = ({name, email, body, id, isFavourite}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <>
    <Card className={classes.card}>
      <CardHeader
        title={name}
        subheader={email}
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {body.slice(0, 20)}...
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={()=>dispatch(switchIsFavouriteComment(id))}
          color={isFavourite?'secondary':'default'}
        >
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
    </>
  );
};
