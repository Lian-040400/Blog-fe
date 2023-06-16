import { useEffect, useLayoutEffect } from "react"
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { PlusOutlined } from '@ant-design/icons';

import * as S from './styles'
import { Loader } from "@components/ui/Loader";
import { formatDate } from "@utils/formatDate";
import { getAllPosts, addMockPosts } from "@store/actions/posts"

export const Home = () => {
  const navigate = useNavigate()
  const posts = useSelector(state => state.posts.posts)
  const postsLoading = useSelector(state => state.posts.postsLoading)

  useLayoutEffect(() => {
    addMockPosts()
  }, [])

  useEffect(() => {
    getAllPosts()
  }, [])

  if (postsLoading) {
    return <Loader/>
  }

  return (
    <S.HomePageContainer>
      <S.CardWrapper onClick={() => navigate('/post/create')}>
        <S.PlusWraper>
          <PlusOutlined />
        </S.PlusWraper>
      </S.CardWrapper>
      {!!posts.length && posts.map(({ id, title, content, created }) => (
        <S.CardWrapper key={id} onClick={() => navigate(`/post/${id}`)}>
          <S.CardDetail>{formatDate(created)}</S.CardDetail>
          <S.CardTitle>{title}</S.CardTitle>
          <S.CardDescription>{content}...</S.CardDescription>
        </S.CardWrapper>
      ))}
    </S.HomePageContainer>
  )
}