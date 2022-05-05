import { useState, useMemo } from 'react'
import styles from './TodoList.module.scss'
import DUMMY from '../../data/todos.json'
import TodoItem from '../TodoItem/TodoItem'
import { classNames } from '../../styles'

const cx = classNames.bind(styles)

const INIT_TODO = DUMMY

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

function TodoList() {
  const [todoList, setTodoList] = useState(INIT_TODO)
  const [todoToggle, setTodoToggle] = useState(0)

  const filteredList = useMemo(() => {
    switch (todoToggle) {
      case 0:
        return todoList
      case 1:
        return todoList.filter(({ done }) => done === false)
      case 2:
        return todoList.filter(({ done }) => done === true)
      default:
        return null
    }
  }, [todoToggle, todoList])

  const handleAddClick = () => {}

  const handleToggle = (e) => {
    const { id } = e.currentTarget.dataset
    setTodoToggle(Number(id))
  }

  return (
    <div className={styles.todoList}>
      <div className={styles.centering}>
        <h1>Hi! this is your assignment.</h1>
        <p className={styles.tasksTitle}>Today&apos;s</p>

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

        <ul className={styles.tasks}>
          {filteredList.map((todo) => (
            <TodoItem key={`todo-item-${todo.id}`} todo={todo} setTodoList={setTodoList} />
          ))}
        </ul>

        <button type='button' className={styles.addButton} onClick={handleAddClick} aria-label='Add button' />
      </div>
    </div>
  )
}
export default TodoList
