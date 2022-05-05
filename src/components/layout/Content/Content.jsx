import PropTypes from 'prop-types'
import styles from './Content.module.scss'

function Content({ children }) {
  return <main className={styles.container}>{children}</main>
}

Content.propTypes = {
  children: PropTypes.node,
}

export default Content
