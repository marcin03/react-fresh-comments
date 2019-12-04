import {
  REQUEST_GET_COMMENTS,
  RESPONSE_GET_COMMENTS,
  ERROR_GET_COMMENTS,
} from '../actions/actionTypes.js';

const initialState = {
  loadingComments: false,
  loadedCommentsSuccessfully: false,
  errorLoadingComments: false,
  commentsList:[]
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_GET_COMMENTS:
      return {
        ...state,
        loadingComments: true,
        loadedCommentsSuccessfully: false,
        errorLoadingComments: false,
      };
    case RESPONSE_GET_COMMENTS:
      return {
        ...state,
        loadingComments: true,
        loadedCommentsSuccessfully: false,
        errorLoadingComments: false,
        commentsList: action.payload.commentsList
      };
    case ERROR_GET_COMMENTS:
      return {
        ...state,
        loadingComments: true,
        loadedCommentsSuccessfully: false,
        errorLoadingComments: action.payload.error,
      };
    default:
      return state;
  }
};

export const selectAllComments = state => state.commentsList;

export default commentsReducer;