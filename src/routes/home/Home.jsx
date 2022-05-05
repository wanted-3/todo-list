import Header from '../../components/layout/Header/Header'
import AppContainer from '../../components/layout/AppContainer/AppContainer'
import PropTypes from 'prop-types'
import TodoList from '../../components/TodoList/TodoList'
import Content from '../../components/layout/Content/Content'
import TodoFilter from '../../components/TodoFilter/TodoFilter'
import AddButton from '../../components/AddButton/AddButton'
import styles from './Home.module.scss'
import { useMemo, useState } from 'react'

function Home({ todoList, setTodoList }) {
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

  return (
    <AppContainer>
      <Header />
      <Content>
        <h1>Hi! this is your assignment.</h1>
        <p className={styles.tasksTitle}>Today&apos;s</p>

        <TodoFilter todoToggle={todoToggle} setTodoToggle={setTodoToggle} />

        <TodoList todoList={filteredList} setTodoList={setTodoList} />
        <AddButton handleAddClick={handleAddClick} />
      </Content>
    </AppContainer>
  )
}

Home.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      done: PropTypes.bool,
      title: PropTypes.string,
    })
  ).isRequired,
  setTodoList: PropTypes.func.isRequired,
}

export default Home
