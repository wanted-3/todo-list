import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { ArrowLeftIcon, SearchIcon } from '../../assets/svgs'
import styles from './SearchBar.module.scss'

function SearchBar({ searchValue, setSearchValue }) {
  const navigate = useNavigate()

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  const handleBackBtnClick = () => {
    navigate(-1)
  }

  const handleSearchBtnClick = () => {}

  return (
    <header className={styles.container}>
      <button onClick={handleBackBtnClick} type='button' className={styles.button}>
        <ArrowLeftIcon />
      </button>
      <div className={styles.inputContainer}>
        <input value={searchValue} onChange={handleChange} className={styles.input} placeholder='search' />
      </div>
      <button onClick={handleSearchBtnClick} type='button' className={styles.button}>
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
