import { useNavigate } from 'react-router-dom'
import * as S from './styles'

export const Navbar = () => {
  const navigate = useNavigate()
  const handleClick = () => navigate('/')

  return (
    <S.NavbarContainer>
      <S.Logo onClick={handleClick}>Blog</S.Logo>
    </S.NavbarContainer>
  )
}