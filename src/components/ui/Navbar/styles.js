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
  height: 20vh;
  background-color: #0cbaba;
  background-image: linear-gradient(315deg, #23ccff 0%, #382336 89%);

`
export const Description = styles.p`
height:90px;
  font-size: 24px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-item:center;
  color: rgba(255,255,255,0.8);
  padding: 15px;

`

export const Logo = styles.span`
  font-size: 36px;
  font-weight: 600;
  cursor: pointer;
  paddimg: 10px;
  color: rgba(255,255,255,0.8);
  padding: 0px 4rem ;
`