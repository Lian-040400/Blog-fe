import { POSTS_TYPES } from "@store/types"

const initialState = {
  posts: [],
  postsLoading: true,
  currentPost: null,
  currentPostLoading: true,
  currentPostError: null,
  createPostLoading: false
}

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_TYPES.GET_ALL_POSTS_REQUEST:
      return {
        ...state,
        postsLoading: true,
        posts: [],
        postsError: null,
      }
    case POSTS_TYPES.GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        postsLoading: false,
        posts: action.payload,
        postsError: null,
      }
    case POSTS_TYPES.GET_POST_REQUEST:
      return {
        ...state,
        currentPostLoading: true,
        currentPost: null,
        currentPostError: null,
      }
    case POSTS_TYPES.GET_POST_SUUCESS:
      return {
        ...state,
        currentPostLoading: false,
        currentPost: action.payload,
        currentPostError: null,
      }
    case POSTS_TYPES.GET_POST_FAILED:
      return {
        ...state,
        currentPostLoading: false,
        currentPost: [],
        currentPostError: action.payload,
      }
    case POSTS_TYPES.CREATE_POST_REQUEST:
      return {
        ...state,
        createPostLoading: true
      }
    case POSTS_TYPES.CREATE_POST_SUCCESS:
      return {
        ...state,
        createPostLoading: false
      }
    default:
      return state
  }
}
