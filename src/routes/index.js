import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { getLocalStorage, LOCAL_STORAGE_KEY, setLocalStorage } from '../util/localStorageUtil'
import AddTodo from './addTodo/AddTodo'
import Home from './home/Home'
import styles from './Routes.module.scss'
import Search from './search/Search'

function App() {
  const [todoList, setTodoList] = useState(getLocalStorage(LOCAL_STORAGE_KEY.TODO_LIST))

  useEffect(() => {
    setLocalStorage(LOCAL_STORAGE_KEY.TODO_LIST, todoList)
  }, [todoList])

  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/todo/add' element={<AddTodo setTodoList={setTodoList} />} />
        <Route path='/search' element={<Search todoList={todoList} setTodoList={setTodoList} />} />
        <Route path='/' element={<Home todoList={todoList} setTodoList={setTodoList} />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  )
}

export default App
