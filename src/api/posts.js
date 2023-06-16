import { v4 as uuid } from "uuid";
import { delay } from "@utils/delay"
import { StorageService } from "@services/StorageService"

export const getAllPosts = async () => {
  await delay() 
  const posts = StorageService.get('posts') ?? []

  return posts.map(item => ({
    ...item,
    content: item.content.slice(0, 130)
  })) 
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


export const createPost = async ({ title, author, content }) => {
  await delay()

  const posts = StorageService.get('posts') ?? []
  const updatedPosts = [
    {
      id: uuid(),
      title,
      author,
      content,
      created: +new Date(),
    },
    ...posts,
  ]

  StorageService.set('posts', updatedPosts)

  return updatedPosts
}