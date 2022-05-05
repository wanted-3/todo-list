import { Link } from 'react-router-dom'
import SmallButton from '../../components/SmallButton/SmallButton'
import TodoForm from '../../components/TodoForm/TodoForm'
import styles from './AddTodo.module.scss'
import PropTypes from 'prop-types'

function AddTodo({ setTodoList }) {
  return (
    <div className={styles.addTodoPage}>
      <div className={styles.xbutton}>
        <Link to='/'>
          <SmallButton />
        </Link>
      </div>
      <TodoForm setTodoList={setTodoList} type='add' />
    </div>
  )
}

AddTodo.propTypes = {
  setTodoList: PropTypes.func.isRequired,
}

export default AddTodo
