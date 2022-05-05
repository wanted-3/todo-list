import { Link } from 'react-router-dom'
import SmallButton from '../../components/SmallButton/SmallButton'
import TodoForm from '../../components/TodoForm/TodoForm'
import styles from './Modify.module.scss'

// eslint-disable-next-line react/prop-types
function ModifyTodo({ todoValue, todoDate }) {
  return (
    <div className={styles.addTodoPage}>
      <div className={styles.xbutton}>
        <Link to='/'>
          <SmallButton />
        </Link>
      </div>
      <TodoForm todoValue={todoValue} todoDate={todoDate} />
    </div>
  )
}

export default ModifyTodo
