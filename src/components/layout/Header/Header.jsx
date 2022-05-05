import { Link } from 'react-router-dom'
import { MenuIcon, SearchIcon } from '../../../assets/svgs'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.buttonBox}>
        <button type='button' className={styles.button}>
          <MenuIcon />
        </button>
        <Link to='/search' className={styles.button}>
          <SearchIcon />
        </Link>
      </div>
    </header>
  )
}

export default Header
