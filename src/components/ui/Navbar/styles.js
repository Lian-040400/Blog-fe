import styles from 'styled-components'

export const NavbarContainer = styles.nav`
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-item:center;
  flex-direction: column;
  position: fixed;
  height: 70px;
  background-color: #0cbaba;
  background-image: linear-gradient(315deg, #52a9ff 0%, #6500ff 89%);

`

export const Logo = styles.span`
  font-size: 36px;
  font-weight: 600;
  cursor: pointer;
  width: min-content;
  paddimg: 10px;
  color:#fff;
  padding: 0px 4rem ;
`