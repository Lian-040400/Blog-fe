import styles from 'styled-components'

export const NavbarContainer = styles.nav`
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background: grey;
  height: 70px;
`

export const Logo = styles.span`
  font-size: 36px;
  font-weight: 600;
  cursor: pointer;
`