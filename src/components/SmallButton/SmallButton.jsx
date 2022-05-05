import { XIcon } from '../../assets/svgs'
import styles from './smallButton.module.scss'

// eslint-disable-next-line react/prop-types
function SmallButton() {
  return (
    <div className={styles.smallBContainer}>
      <button type='button' className={styles.btn}>
        <XIcon className={styles.xicon} />
      </button>
    </div>
  )
}

export default SmallButton
