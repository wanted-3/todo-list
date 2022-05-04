import { MenuIcon, SearchIcon } from '../../../assets/svgs'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.buttonBox}>
        <button type='button' className={styles.button}>
          <MenuIcon />
        </button>
        <button type='button' className={styles.button}>
          <SearchIcon />
        </button>
      </div>
    </header>
  )
}

export default Header
