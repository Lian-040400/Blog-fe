import * as S from './styles'
import { Navbar } from '@components/ui/Navbar'

export const PageLayout = ({ children }) => {
  return (
    <S.PageLayoutContainer>
      <Navbar />
      <S.ChildrenContainer>
        {children}
      </S.ChildrenContainer>
    </S.PageLayoutContainer>
  ) 
}