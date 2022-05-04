import { SearchIcon } from '../../assets/svgs'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'

function SearchBar({ searchValue, setSearchValue }) {
  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <header className={styles.container}>
      <div className={styles.inputContainer}>
        <input value={searchValue} onChange={handleChange} className={styles.input} placeholder='search' />
      </div>
      <button type='button' className={styles.button}>
        <SearchIcon />
      </button>
    </header>
  )
}

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
}
export default SearchBar
