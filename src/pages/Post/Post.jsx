import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import * as S from './styles'
import { Loader } from "@components/ui/Loader"
import { getPost } from "@store/actions/posts"
import { formatDate } from '@utils/formatDate'

export const Post = () => {
  const { id } = useParams()
  const currentPost = useSelector((state) => state.posts.currentPost)
  const currentPostLoading = useSelector((state) => state.posts.currentPostLoading)

  useEffect(() => {
    getPost(id)
  }, [id])
  
  if (currentPostLoading) {
    return <Loader/>
  }

  const { author, title, content, created } = currentPost

  return (
    <S.PostContainer>
      <S.PostWrapper>
        <S.PostTitle>{title}</S.PostTitle>
        <S.PostDetail>
          Author: <span>{author}</span>
        </S.PostDetail>
        <S.PostDetail>
          Date: <span>{formatDate(created)}</span>
        </S.PostDetail>
        <S.PostContent>{content}</S.PostContent>
      </S.PostWrapper>
    </S.PostContainer>
  )
}
