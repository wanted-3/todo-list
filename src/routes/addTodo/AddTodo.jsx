import SmallButton from '../../components/SmallButton/SmallButton'
import TodoForm from '../../components/TodoForm/TodoForm'
import styles from './AddTodo.module.scss'

function AddTodo() {
  const handleClose = () => {

  }

  return (
    <div className={styles.addTodoPage}>
        <div className={styles.button}>
          <SmallButton onClick={handleClose}/>
        </div>
        <TodoForm />
    </div>
  )
}

export default AddTodo
