import styles from 'styled-components'

export const Loader = styles.div`
  background: #ffffff6e;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-item: center;
  font-size: 36px;
  color: #5877ff;

  > span {
    display: flex;
    align-items: center;
  }
`