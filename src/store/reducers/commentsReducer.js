import {
  REQUEST_GET_COMMENTS,
  RESPONSE_GET_COMMENTS,
  ERROR_GET_COMMENTS,
  SWITCH_IS_FAVOURITE,
  ADD_COMMENT
} from '../actions/actionTypes.js';
import {createSelector} from 'reselect'

const initialState = {
  loadingComments: false,
  loadedCommentsSuccessfully: false,
  errorLoadingComments: false,
  commentsList: [],
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
    case SWITCH_IS_FAVOURITE: {
      const newCommentsList = state.commentsList.map((comment) => {
          if (comment.id === action.payload.id) {
            const isFavourite = !comment.isFavourite;
            return {...comment, isFavourite}
          }
          return comment
        }
      )
      return {
        ...state,
        commentsList: newCommentsList
      };
    }
    case ADD_COMMENT: {
      const maxIdValue = Math.max.apply(Math, state.commentsList.map(function (o) {
        return o.id;
      }))
      const newComment = action.payload.comment;
      newComment.id = maxIdValue+1
      return {
        ...state,
        commentsList: [{...newComment}, ...state.commentsList ]
      };
    }


    default:
      return state;
  }
};

export const selectAllComments = state => state.commentsList;

export const selectFavouriteComments = createSelector(
  [selectAllComments],
  allComments => {
    return allComments.filter((item) => {
      return item.isFavourite
    });
  });

export default commentsReducer;