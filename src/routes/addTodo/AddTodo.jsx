import TodoForm from '../../components/TodoForm/TodoForm'
import styles from './AddTodo.module.scss'

function AddTodo() {
  return (
    <div className={styles.addTodoPage}>
      <TodoForm  />
    </div>
  )
}

export default AddTodo
