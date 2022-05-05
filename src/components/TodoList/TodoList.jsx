import PropTypes from 'prop-types'
import TodoItem from '../TodoItem/TodoItem'
import styles from './TodoList.module.scss'

function TodoList({ todoList, setTodoList }) {
  return (
    <ul className={styles.tasks}>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} setTodoList={setTodoList} />
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      done: PropTypes.bool,
      title: PropTypes.string,
    })
  ).isRequired,
  setTodoList: PropTypes.func.isRequired,
}

export default TodoList
