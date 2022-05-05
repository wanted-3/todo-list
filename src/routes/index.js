import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import AddTodo from './addTodo/AddTodo'
import Home from './home/Home'
import ModifyTodo from './modifyTodo/ModifyTodo'
import styles from './Routes.module.scss'
import Search from './search/Search'

const dummy = [
  {
    id: 1,
    title: 'delectus ',
    done: false,
    date: '2022-03-21',
  },
  {
    id: 2,
    title: 'delectus autem',
    done: false,
    date: '2022-03-21',
  },
  {
    id: 3,
    title: 'delectus aut autem',
    done: false,
    date: '2022-03-21',
  },
]

function App() {
  const [todoList, setTodoList] = useState(dummy)

  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/todo/add' element={<AddTodo setTodoList={setTodoList} />} />
        <Route path='/search' element={<Search todoList={todoList} setTodoList={setTodoList} />} />
        <Route path='/todo/modify' element={<ModifyTodo />} />
        <Route path='/' element={<Home todoList={todoList} setTodoList={setTodoList} />} />
      </Routes>
    </div>
  )
}

export default App
