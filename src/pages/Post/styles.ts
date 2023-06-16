import styles from 'styled-components'

export const PostContainer = styles.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`

export const PostWrapper = styles.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`

export const PostTitle = styles.h1``

export const PostDetail = styles.span`
  font-size: 14px;
  > span {
    font-weight: 600;
  }
`

export const PostContent = styles.p`
  white-space: pre-line;
  margin-top: 30px;
  font-family: Georgia;
  font-size: 22px;
  color: rgb(42 42 42);
  line-height: 30px;
`