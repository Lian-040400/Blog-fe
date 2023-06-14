import { delay } from "@utils/delay"
import { StorageService } from "@services/StorageService"

export const getAllPosts = async () => {
  await delay() 
  return StorageService.get('posts') ?? []
  // return posts.map(({content, ...rest}) => ({
  //   ...rest,
  //   content: 
  // }))
}

export const getPost = async (id) => {
  await delay() 
  const posts = StorageService.get('posts') ?? []
  const post = posts.find((post) => post.id === id)

  if (!post) {
    const error = new Error("Blog not found")
    error.code = "404"
    throw error;
  }
  
  return post
}
