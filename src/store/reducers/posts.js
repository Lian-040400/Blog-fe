import { POSTS_TYPES } from "@store/types"

const initialState = {
  posts: [],
  postsLoading: false,
  postsError: null,
  currentPost: null,
  currentPostLoading: false,
  currentPostError: null,
}

export const posts = (state = initialState, action) => {
  switch(action.type) {
    case POSTS_TYPES.GET_ALL_POSTS_REQUEST:
      return {
        ...state,
        postsLoading: true,
        posts: [],
      }
    case POSTS_TYPES.GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        postsLoading: false,
        posts: action.payload,
      }
    case POSTS_TYPES.GET_ALL_POSTS_FAILED:
      return {
        ...state,
        postsLoading: false,
        posts: [],
      }
    case POSTS_TYPES.GET_POST_REQUEST:
      return {
        ...state,
        currentPostLoading: true,
        currentPost: null,
      }
    case POSTS_TYPES.GET_POST_SUUCESS:
      return {
        ...state,
        currentPostLoading: false,
        currentPost: action.payload,
        currentPost: null,
      }
    case POSTS_TYPES.GET_POST_FAILED:
      return {
        ...state,
        currentPostLoading: false,
        currentPost: [],
        currentPost: action.payload,
      }
    default:
      return state
  }
}
