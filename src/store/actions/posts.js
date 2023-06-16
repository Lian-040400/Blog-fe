import { toast } from "react-toastify";

import { store } from "@store";
import { POSTS_TYPES } from '@store/types'
import mockPostsData from '@__mock__/posts.json'
import { StorageService } from "@services/StorageService";
import {
  getPost as getPostApi,
  getAllPosts as getAllPostsApi,
  createPost as createPostApi
} from "@api/posts";

export const addMockPosts = () => {
  const posts = StorageService.get('posts') ?? []

  if (posts.length) return

  StorageService.set('posts', mockPostsData)
}

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
    toast.error(e.message)
    store.dispatch({
      type: POSTS_TYPES.GET_POST_FAILED,
      payload: e.message
    })
  }
}

export const createPost = async (params, onSuccess) => {
  try {
    store.dispatch({
      type: POSTS_TYPES.CREATE_POST_REQUEST,
    })
  
    await createPostApi(params)
  
    store.dispatch({
      type: POSTS_TYPES.CREATE_POST_SUCCESS,
    })

    onSuccess()
  } catch (e) {
    console.log(e)
  }
}
