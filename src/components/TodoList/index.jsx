import { useState, useMemo } from 'react'
import { cx } from '../../styles'
import styles from './TodoList.module.scss'
import { CheckIcon, CloseIcon } from '../../assets/svgs'
import DUMMY from '../../data/todos.json'

const INIT_TODO = DUMMY

function TodoList() {
  const [todoList, setTodoList] = useState(INIT_TODO)
  const [todoToggle, setTodoToggle] = useState("Alltoggle")
  
  const filteredList = useMemo(() => {
    if (todoToggle==="Alltoggle") {
      return todoList
    }

    if(todoToggle==="Activetoggle") {
      return todoList.filter(({ done }) => done===true)
    }

    if (todoToggle === 'Completedtoggle'){
      return todoList.filter(({ done }) => done===false)
    }
    
    return null
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
    setTodoToggle(e.currentTarget.id)
  }

  return (
    <div className={styles.todoList}>
      <div className={styles.centering}>
        <h1>Hi! this is your assignment.</h1>
        <p className={styles.tasksTitle}>Today&apos;s</p>

        <div className={styles.toggleInputWrapper}>
          <input type='checkbox' id='Alltoggle' onChange={handleToggle} />
          <label htmlFor='Alltoggle' className={styles.toggleLabel}>All</label>
          <input type='checkbox' id='Activetoggle' onChange={handleToggle} />
          <label htmlFor='Activetoggle' className={styles.toggleLabel}>Active</label>
          <input type='checkbox' id='Completedtoggle' onChange={handleToggle} />
          <label htmlFor='Completedtoggle' className={styles.toggleLabel}>Completed</label>
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
