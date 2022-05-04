import PropTypes from 'prop-types'
import { CheckIcon } from '../../assets/svgs'
import styles from './TodoListItem.module.scss'

function TodoListItem({ todo, setTodoList }) {
  const handleChange = (e) => {
    const { dataset, checked } = e.currentTarget
    const { id } = dataset

    setTodoList((prev) => {
      const targetIndex = prev.findIndex((_todo) => _todo.id === Number(id))
      const newList = [...prev]
      newList[targetIndex].done = checked
      return newList
    })
  }

  return (
    <li key={`todo-${todo.id}`} className={styles.task}>
      <div className={styles.checkboxWrapper}>
        <input type='checkbox' checked={todo.done} data-id={todo.id} onChange={handleChange} />
        <CheckIcon />
      </div>
      <p className={styles.title}>{todo.title}</p>
    </li>
  )
}

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    done: PropTypes.bool,
    title: PropTypes.string,
  }).isRequired,

  setTodoList: PropTypes.func.isRequired,
}

export default TodoListItem
