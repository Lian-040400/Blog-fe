import styles from 'styled-components'

export const CreatePostContainer = styles.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`

export const Form = styles.form`
  display: flex;
  width: 40%;
  flex-direction: column;
  gap: 10px;
`

export const TextArea = styles.textarea`
  resize: none;
  font-family: Poppins;
  height: 300px;
  padding: 10px;
  border-radius: 4px;
  border: none;
  background: #e8ebf1;
  outline: border: 1px solid #52a9ff;
  &:focus-visible, &:hover{
    outline: 1px solid #52a9ff;
  }
`
export const ButtonWraper = styles.div`
  display: flex;
  align-items: center;
  justify-content: center; 
`
export const Error = styles.span`
  color:red;
  font-size: 12px; 
`
export const Button = styles.button`
  cursor: pointer;
  width:50%;
  margin-right:5px;
  border: 0 solid;
  padding: 10px;
  border-radius: 4px;
  color: black;
  background: #e8ebf1;
  
  ${p => p.primary && `
    color: white;
    background: #52a9ff;
  `}

  ${p => p.disabled && `
    opacity:55%
  `}
`