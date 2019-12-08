import {commentsPath} from './../../config/Api';

import {
  REQUEST_GET_COMMENTS,
  RESPONSE_GET_COMMENTS,
  ERROR_GET_COMMENTS,
  SWITCH_IS_FAVOURITE,
  ADD_COMMENT
} from './actionTypes';

export const getCommentsFromApi = () => (dispatch => {
  dispatch(requestGetCommentsFromApi());
  fetch(`${commentsPath}`,
    {
      method: 'GET',
      headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',}
    }
  )
    .then(response => response.json())
    .then(data => {
      let firstTwentyComments = data.slice(0, 20);
      dispatch(responseGetCommentsFromApi(firstTwentyComments));
    })
    .catch(error => {
      dispatch(errorGetCommentsFromApi(error));
    })
});

const requestGetCommentsFromApi = () => ({type: REQUEST_GET_COMMENTS});

const responseGetCommentsFromApi = (data) => ({
  type: RESPONSE_GET_COMMENTS,
  payload: {commentsList: data}
});
const errorGetCommentsFromApi = (error) => ({
  type: ERROR_GET_COMMENTS,
  payload: {error}
});

export const switchIsFavouriteComment = (id) => ({
  type: SWITCH_IS_FAVOURITE,
  payload: {id}
});

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  payload: {comment}
});