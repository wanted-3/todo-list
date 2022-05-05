import { useState, useMemo } from 'react'
import { cx } from '../../styles'
import styles from './TodoList.module.scss'
import { CheckIcon } from '../../assets/svgs'
import DUMMY from '../../data/todos.json'

const INIT_TODO = DUMMY

function TodoList() {
  const [todoList, setTodoList] = useState(INIT_TODO)
  const [todoToggle, setTodoToggle] = useState(false)

  const filteredList = useMemo(
    () => (todoToggle ? todoList.filter(({ done }) => !done) : todoList),
    [todoToggle, todoList]
  )
  const handleAddClick = (e) => {
    // console.log('handleAddClick')
  }

  const handleChange = (e) => {
    const { dataset, checked } = e.currentTarget
    const { id } = dataset

    setTodoList((prev) => {
      const targetIndex = prev.findIndex((todo) => todo.id === Number(id))
      const newList = [...prev]
      newList[targetIndex].done = checked

      return newList
    })
  }

  const handleDelete = (e) => {
    const { id } = e.currentTarget.dataset

    setTodoList((todoLists) => todoLists.filter((listItem) => listItem.id !== Number(id)))
  }

  const handleToggle = () => {
    setTodoToggle((prev) => !prev)
  }

  return (
    <div className={styles.todoList}>
      <div className={styles.centering}>
        <h1>Hi! this is your assignment.</h1>
        <p className={styles.tasksTitle}>Today&apos;s</p>
        <input type='checkbox' className={styles.toggle} id='toggle' onChange={handleToggle} />
        <label htmlFor='toggle'>toggle</label>
        <ul className={styles.tasks}>
          {filteredList.map((todo) => (
            <li key={`todo-${todo.id}`} className={styles.task}>
              <div className={styles.checkboxWrapper}>
                <input type='checkbox' checked={todo.done} data-id={todo.id} onChange={handleChange} />
                <CheckIcon />
              </div>
              <p className={cx(styles.title, {[styles.checked]: todo.done})}>{todo.title}</p>
              <button type='button' data-id={todo.id} onClick={handleDelete} aria-label='Delete button'>
                X
              </button>
            </li>
          ))}
        </ul>
        <button type='button' className={styles.addButton} onClick={handleAddClick} aria-label='Add button' />
      </div>
    </div>
  )
}
export default TodoList
