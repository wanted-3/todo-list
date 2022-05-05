import Header from '../../components/layout/Header/Header'
import AppContainer from '../../components/layout/AppContainer/AppContainer'
import PropTypes from 'prop-types'
import TodoList from '../../components/TodoList/TodoList'
import Content from '../../components/layout/Content/Content'

function Home({ todoList, setTodoList }) {
  return (
    <AppContainer>
      <Header />
      <Content>
        <TodoList todoList={todoList} setTodoList={setTodoList} />
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
