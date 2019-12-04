import {commentsPath} from './../../config/Api';

import {
  REQUEST_GET_COMMENTS,
  RESPONSE_GET_COMMENTS,
  ERROR_GET_COMMENTS,
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
      //console.log("data", data)
      dispatch(responseGetCommentsFromApi(data));
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