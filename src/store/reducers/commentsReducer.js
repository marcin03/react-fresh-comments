import {
  REQUEST_GET_COMMENTS,
  RESPONSE_GET_COMMENTS,
  ERROR_GET_COMMENTS,
  SWITCH_IS_FAVOURITE
} from '../actions/actionTypes.js';

const initialState = {
  loadingComments: false,
  loadedCommentsSuccessfully: false,
  errorLoadingComments: false,
  commentsList:[],
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
    case SWITCH_IS_FAVOURITE:{
      const newCommentsList = state.commentsList.map((comment)=>{
        if(comment.id===action.payload.id){
          const isFavourite =!comment.isFavourite;
          return {...comment, isFavourite}
        }

        return {...comment}
      }
      )
      console.log("switcheddddd id:", action.payload.id)
      return {
        ...state,
        commentsList: newCommentsList
      };
    }
    default:
      return state;
  }
};

export const selectAllComments = state => state.commentsList;

export const selectFavouriteComments = state => {
  //console.log("selectFavouriteComments")
  return state.commentsList.filter((item)=>{
    return item.isFavourite
  });
}

export default commentsReducer;