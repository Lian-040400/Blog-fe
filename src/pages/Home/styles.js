import styles from 'styled-components'

export const HomePageContainer = styles.div`
  gap: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: max-content;
`

export const PlusWraper = styles.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #2f85e0;
  font-size: 36px;
  opacity: 0.8;
`

export const CardWrapper = styles.div`
  width: 300px;
  height: 300px;
  cursor: pointer;
  display: flex;
  padding: 20px;
  border-radius: 7px;
  background: #e8ebf1;
  flex-direction: column;
`

export const CardDetail = styles.p`
  font-size: 12px;
`

export const CardTitle = styles.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`

export const CardDescription = styles.p`
  max-height: 100%;
  white-space: normal;
  overflow: hidden;
  width: 100%;
`

