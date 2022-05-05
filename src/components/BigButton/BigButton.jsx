import { UpperArrow } from '../../assets/svgs/index'
import styles from './BigButton.module.scss'

// eslint-disable-next-line react/prop-types
function BigButton({ text, onClick }) {
  return (
    <button type='button' className={styles.button} onClick={onClick}>
      <span className={styles.buttonText}>{text}</span>
      <UpperArrow />
    </button>
  )
}

export default BigButton
