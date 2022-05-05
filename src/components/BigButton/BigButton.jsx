import { UpperArrow } from '../../assets/svgs/index'
import styles from './BigButton.module.scss'

function BigButton({ text, onClick }) {
  return (
    <button type='button' className={styles.button} onClick={onClick}>
      <span className={styles.buttonText}>{text}</span>
      <UpperArrow />
    </button>
  )
}

export default BigButton
