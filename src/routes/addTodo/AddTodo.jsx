import { Link } from 'react-router-dom'
import SmallButton from '../../components/SmallButton/SmallButton'
import TodoForm from '../../components/TodoForm/TodoForm'
import styles from './AddTodo.module.scss'

function AddTodo() {
  return (
    <div className={styles.addTodoPage}>
      <div className={styles.button}>
        <Link to="/">
          <SmallButton />
        </Link>
      </div>
      <TodoForm />
    </div>
  )
}

export default AddTodo
