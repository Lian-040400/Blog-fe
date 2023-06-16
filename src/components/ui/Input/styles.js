import styles from 'styled-components'

export const Input = styles.input`
  padding: 10px;
  border-radius: 4px;
  border: none;
  background: #e8ebf1;
  outline: border: 1px solid #52a9ff;
  &:focus-visible, &:hover{
    outline: 1px solid #52a9ff;
  }
`