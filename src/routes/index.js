import { Route, Routes } from 'react-router-dom'
import AddTodo from './addTodo/AddTodo'
import Home from './home/Home'
import TodoForm from '../components/TodoForm/TodoForm'
import ModifyTodo from './modifyTodo/ModifyTodo'
import styles from './Routes.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/todo/add' element={<AddTodo />} />
        <Route path='/todo/modify' element={<ModifyTodo todoValue='코딩하기' todoDate={new Date(2020 - 10 - 22)} />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
