import styles from './AppContainer.module.scss'
import PropTypes from 'prop-types'

function AppContainer({ children }) {
  return <div className={styles.container}>{children}</div>
}

AppContainer.propTypes = {
  children: PropTypes.node,
}

export default AppContainer
