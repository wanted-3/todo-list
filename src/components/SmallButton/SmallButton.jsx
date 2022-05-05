import styles from './SmallButton.module.scss'

function SmallButton(props) {
  return (
    <button type="button" aria-label="button" className={styles.closeButton} />
  )
}

export default SmallButton