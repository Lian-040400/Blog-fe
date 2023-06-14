import { useEffect } from "react"
import { useSelector } from 'react-redux'
import { getAllPosts } from "@store/actions/posts"

import * as S from './styles'
import { useNavigate } from "react-router-dom"

export const Home = () => {
  const navigate = useNavigate()
  const posts = useSelector(state => state.posts.posts)

  const handleAddBlog = () => navigate('/post/create')

  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <S.HomePageContainer>
      <S.AddButton onClick={handleAddBlog}>Add Blog +</S.AddButton>
      {posts ? posts.map(({ id, title, description}) => (
        <S.CardWrapper key={id} onClick={() => navigate(`/post/${id}`)}>
          <S.CardTitle>{title}</S.CardTitle>
          <S.CardDescription>{description}</S.CardDescription>
        </S.CardWrapper>
      )) : (
        <div>No blogs yet</div>
      )}
    </S.HomePageContainer>
  )
}