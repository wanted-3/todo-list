import PropTypes from 'prop-types'
import { CheckIcon, CloseIcon } from '../../assets/svgs'
import styles from './TodoItem.module.scss'
import { classNames } from '../../styles'

const cx = classNames.bind(styles)

function TodoItem({ todo, setTodoList }) {
  const handleChange = (e) => {
    const {
      dataset: { id },
      checked,
    } = e.currentTarget

    setTodoList((prev) => {
      const targetIndex = prev.findIndex((todoItem) => todoItem.id === Number(id))
      const newList = [...prev]
      newList[targetIndex].done = checked

      return newList
    })
  }
  const handleDelete = (e) => {
    const { id } = e.currentTarget.dataset

    setTodoList((prev) => prev.filter((listItem) => listItem.id !== Number(id)))
  }

  return (
    <li key={`todo-${todo.id}`} className={styles.task}>
      <div className={styles.checkboxWrapper}>
        <input type='checkbox' checked={todo.done} data-id={todo.id} onChange={handleChange} />
        <CheckIcon />
      </div>
      <p className={cx('title', { checked: todo.done })}>{todo.title}</p>
      <button
        type='button'
        className={styles.deleteButton}
        data-id={todo.id}
        onClick={handleDelete}
        aria-label='Delete button'
      >
        <CloseIcon />
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    done: PropTypes.bool,
    title: PropTypes.string,
  }).isRequired,

  setTodoList: PropTypes.func.isRequired,
}

export default TodoItem
