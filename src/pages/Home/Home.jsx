import { useEffect } from "react"
import { useSelector } from 'react-redux'
import { getAllPosts } from "@store/actions/posts"
import { v4 as uuid } from "uuid";
import { PlusOutlined } from '@ant-design/icons';

import * as S from './styles'
import { useNavigate } from "react-router-dom"

export const Home = () => {
  const navigate = useNavigate()
  // const posts = useSelector(state => state.posts.posts)
  const posts = [
    {
      id: 1,
      // id: uuid(),
      title: "The end of the world",
      description: "This is a short description of this post",
      author: "Lianna Khachatryan",
      created: +new Date(),
    },
    {
      id: 2,
      // id: uuid(),
      title: "The end of the world",
      description: "This is a short description of this post",
      author: "Lianna Khachatryan",
      created: +new Date(),
    },
    {
      id: 3,
      // id: uuid(),
      title: "The end of the world",
      description: "This is a short description of this post",
      author: "Lianna Khachatryan",
      created: +new Date(),
    },
    {
      id: 4,
      // id: uuid(),
      title: "The end of the world",
      description: "This is a short description of this post",
      author: "Lianna Khachatryan",
      created: +new Date(),
    },
    {
      id: 5,
      // id: uuid(),
      title: "The end of the world",
      description: "This is a short description of this post",
      author: "Lianna Khachatryan",
      created: +new Date(),
    },
    {
      id: 6,
      // id: uuid(),
      title: "The end of the world",
      description: "This is a short description of this post",
      author: "Lianna Khachatryan",
      created: +new Date(),
    },

  ]

  const handleAddBlog = () => navigate('/post/create')

  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <S.HomePageContainer>
      {/* <S.AddButton onClick={handleAddBlog}>Add Blog +</S.AddButton> */}
      {posts ? posts.map(({ id, title, description }) => (
        <S.CardWrapper key={id} onClick={() => navigate(`/post/${id}`)}>
          <S.CardTitle>{title}</S.CardTitle>
          <S.CardDescription>{description}</S.CardDescription>
        </S.CardWrapper>
      )) : (
        <div>No blogs yet</div>
      )}
      <S.CardWrapper onClick={() => navigate(`/post/${id}`)}>
        <S.PlusWraper onClick={handleAddBlog}>
            <PlusOutlined />
        </S.PlusWraper>
      </S.CardWrapper>
    </S.HomePageContainer>
  )
}