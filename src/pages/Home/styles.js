import styles from 'styled-components'

export const HomePageContainer = styles.div`
  width: 100%;
  display: flex;
  // flex-direction: column;
  // justify-content: end;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 20px;
`

export const PlusWraper = styles.div`
width:100%;
height:100%;
display: inline-flex;
justify-content: center;
align-items:center;
color:#2f85e0;
font-size:36px;
opacity:0.8;
`



export const CardWrapper = styles.div`
  width: 100%;
  // height:px;
  display: flex;
  padding: 20px;
  border-radius: 7px;
  // height: max-content;
  background: #ededed;
  flex-direction: column;
`

export const CardTitle = styles.p`
  font-size: 20px;
  font-weight: 500;
`

export const CardDescription = styles.p``

