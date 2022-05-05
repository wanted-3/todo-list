import { useState, useMemo } from 'react'
import { cx } from '../../styles'
import styles from './TodoList.module.scss'
import { CheckIcon, CloseIcon } from '../../assets/svgs'
import DUMMY from '../../data/todos.json'

const INIT_TODO = DUMMY

const TOGGLE_TAB = [
  {
    id: 0,
    name: 'All'
  },
  {
    id: 1,
    name: 'Active'
  },
  {
    id: 2,
    name: 'Completed'
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
        return todoList.filter(({done}) => done === false)
      case 2:
        return todoList.filter(({done}) => done === true)
      default:
        return null
    }
  }, [todoToggle, todoList])
  
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
          {TOGGLE_TAB.map(({id, name}) => (
            <button key={`toggle-${id}`} type='button' data-id={id} 
            className={cx(styles.toggleTab, {[styles.activeTab]: id === todoToggle})} onClick={handleToggle}>{name}</button>
          ))}
        </div>
        
        <ul className={styles.tasks}>
          {filteredList.map((todo) => (
            <li key={`todo-${todo.id}`} className={styles.task}>
              <div className={styles.checkboxWrapper}>
                <input type='checkbox' checked={todo.done} data-id={todo.id} onChange={handleChange} />
                <CheckIcon />
              </div>
              <p className={cx(styles.title, {[styles.checked]: todo.done})}>{todo.title}</p>
              <button type='button' className={styles.deleteButton} data-id={todo.id} onClick={handleDelete} aria-label='Delete button'>
                <CloseIcon/>
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
