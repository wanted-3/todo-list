import PropTypes from 'prop-types'
import { classNames } from '../../styles'
import styles from './TodoFilter.module.scss'

const TOGGLE_TAB = [
  {
    id: 0,
    name: 'All',
  },
  {
    id: 1,
    name: 'Active',
  },
  {
    id: 2,
    name: 'Completed',
  },
]

const cx = classNames.bind(styles)

function TodoFilter({ todoToggle, setTodoToggle }) {
  const handleToggle = (e) => {
    const { id } = e.currentTarget.dataset

    setTodoToggle(Number(id))
  }

  return (
    <div className={styles.toggleInputWrapper}>
      {TOGGLE_TAB.map(({ id, name }) => (
        <button
          key={`toggle-${id}`}
          type='button'
          data-id={id}
          className={cx('toggleTab', { activeTab: id === todoToggle })}
          onClick={handleToggle}
        >
          {name}
        </button>
      ))}
    </div>
  )
}

TodoFilter.propTypes = {
  todoToggle: PropTypes.number.isRequired,
  setTodoToggle: PropTypes.func.isRequired,
}

export default TodoFilter
