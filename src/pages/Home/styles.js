import styles from 'styled-components'

export const HomePageContainer = styles.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`


export const AddButton = styles.button`
  border: 0 solid;
  background: green;
  cursor: pointer;
  padding: 10px;
`

export const CardWrapper =  styles.div`
  width: 100%;
  display: flex;
  padding: 20px;
  border-radius: 7px;
  height: max-content;
  background: #ededed;
  flex-direction: column;
`

export const CardTitle = styles.p`
  font-size: 20px;
  font-weight: 500;
`

export const CardDescription = styles.p``