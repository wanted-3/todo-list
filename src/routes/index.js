import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import AddTodo from './addTodo/AddTodo'
import Home from './home/Home'
import ModifyTodo from './modifyTodo/ModifyTodo'
import styles from './Routes.module.scss'
import Search from './search/Search'
import Dummy from '../data/todos.json'

function App() {
  const [todoList, setTodoList] = useState(Dummy)

  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/todo/add' element={<AddTodo />} />
        <Route path='/todo/modify' element={<ModifyTodo />} />
        <Route path='/search' element={<Search todoList={todoList} setTodoList={setTodoList} />} />
        <Route path='/' element={<Home todoList={todoList} setTodoList={setTodoList} />} />
      </Routes>
    </div>
  )
}

export default App
