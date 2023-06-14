import { getPost } from "@store/actions/posts"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

export const Post = () => {
  const { id } = useParams()
  const currentPost = useSelector((state) => state.posts.currentPost)

  useEffect(() => {
    getPost(id)
  }, [id])
  
  console.log(id)
  
  return <>Post</>
}