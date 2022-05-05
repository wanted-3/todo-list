import styles from './AddButton.module.scss'
import PropTypes from 'prop-types'

function AddButton({ handleAddClick }) {
  return <button type='button' className={styles.addButton} onClick={handleAddClick} aria-label='Add button' />
}
AddButton.propTypes = {
  handleAddClick: PropTypes.func.isRequired,
}

export default AddButton
