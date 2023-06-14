import { v4 as uuid } from "uuid";

import { store } from "@store";
import { POSTS_TYPES } from '@store/types'
import {
  getPost as getPostApi,
  getAllPosts as getAllPostsApi,
} from "@api/posts";

export const getAllPosts = async () => {
  store.dispatch({
    type: POSTS_TYPES.GET_ALL_POSTS_REQUEST,
  })
  
  const posts = await getAllPostsApi()

  store.dispatch({
    type: POSTS_TYPES.GET_ALL_POSTS_SUCCESS,
    payload: posts
  })
}

export const getPost = async (id) => {
  try {
    store.dispatch({
      type: POSTS_TYPES.GET_POST_REQUEST,
    })
    
    const post = await getPostApi(id)
    
    store.dispatch({
      type: POSTS_TYPES.GET_POST_SUUCESS,
      payload: post
    })
  } catch (e) {
    store.dispatch({
      type: POSTS_TYPES.GET_POST_REQUEST,
      payload: e.message
    })
  }
}

// const posts = [
//   {
//     id: uuid(),
//     title: "The end of the world",
//     description: "This is a short description of this post",
//     author: "Lianna Khachatryan"
//     created: +new Date()
//   },
// ]
