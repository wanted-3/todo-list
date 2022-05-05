import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Dummy from '../data/todos.json'
import AddTodo from './addTodo/AddTodo'
import Home from './home/Home'
import ModifyTodo from './modifyTodo/ModifyTodo'
import styles from './Routes.module.scss'
import Search from './search/Search'

function App() {
  const [todoList, setTodoList] = useState(Dummy)

  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/todo/add' element={<AddTodo />} />
        <Route path='/search' element={<Search todoList={todoList} setTodoList={setTodoList} />} />
        <Route path='/todo/modify' element={<ModifyTodo todoValue='코딩하기' todoDate={new Date(2020 - 10 - 22)} />} />
        <Route path='/' element={<Home todoList={todoList} setTodoList={setTodoList} />} />
      </Routes>
    </div>
  )
}

export default App
