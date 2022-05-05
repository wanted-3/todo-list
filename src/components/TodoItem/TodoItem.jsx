import PropTypes from 'prop-types'
import { CheckIcon, CloseIcon } from '../../assets/svgs'
import { classNames } from '../../styles'
import styles from './TodoItem.module.scss'

const cx = classNames.bind(styles)

function TodoItem({ todo, setTodoList }) {
  const handleChange = () => {
    setTodoList((prev) => {
      const newTodoList = prev.map((item) => {
        if (item.id === todo.id) return { ...item, done: !item.done }
        return item
      })
      return newTodoList
    })
  }
  const handleDelete = () => {
    setTodoList((prev) => prev.filter((listItem) => listItem.id !== todo.id))
  }

  return (
    <li key={`todo-${todo.id}`} className={styles.task}>
      <div className={styles.checkboxWrapper}>
        <input type='checkbox' checked={todo.done} data-id={todo.id} onChange={handleChange} />
        <CheckIcon />
      </div>
      <p className={cx('title', { checked: todo.done })}>{todo.title}</p>
      <button type='button' className={styles.deleteButton} onClick={handleDelete} aria-label='Delete button'>
        <CloseIcon />
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    done: PropTypes.bool,
    title: PropTypes.string,
  }).isRequired,

  setTodoList: PropTypes.func.isRequired,
}

export default TodoItem
