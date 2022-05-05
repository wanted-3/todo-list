import { XIcon } from '../../assets/svgs'
import styles from './SmallButton.module.scss'

function SmallButton() {
  return (
    <div className={styles.smallBContainer}>
      <button type='button' className={styles.closeButton}>
        <XIcon className={styles.xicon} />
      </button>
    </div>
  )
}

export default SmallButton
