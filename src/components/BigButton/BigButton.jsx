import { UpperArrow } from '../../assets/svgs/index'
import styles from './BigButton.module.scss'
import PropTypes from 'prop-types'

function BigButton({ text, type = 'button' }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={styles.button}>
      <span className={styles.buttonText}>{text}</span>
      <UpperArrow />
    </button>
  )
}

BigButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
}

export default BigButton
