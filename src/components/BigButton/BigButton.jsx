import PropTypes from 'prop-types'
import styles from './BigButton.module.scss'

function BigButton({ text, type = 'button' }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={styles.button}>
      <span className={styles.buttonText}>{text}</span>
    </button>
  )
}

BigButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
}

export default BigButton
