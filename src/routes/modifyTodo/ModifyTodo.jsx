import { useEffect, useState } from "react"
import TodoForm from "../../components/TodoForm/TodoForm"
import styles from './modifyTodo.module.scss'

function ModifyTodo() {
  const [todoValue, setTodoValue] = useState('')
  const [date,setDate] = useState('')
  
  useEffect(() => {
    setTodoValue(localStorage.getItem())
    localStorage.removeItem()
  },[])

  return (
    <div>
      <TodoForm  />
    </div>
  )
}

export default ModifyTodo
