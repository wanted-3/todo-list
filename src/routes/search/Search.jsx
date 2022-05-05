import AppContainer from '../../components/layout/AppContainer/AppContainer'
import PropTypes from 'prop-types'
import TodoList from '../../components/TodoList/TodoList'
import Content from '../../components/layout/Content/Content'
import SearchBar from '../../components/SearchBar/SearchBar'
import { useEffect, useState } from 'react'

function Search({ todoList, setTodoList }) {
  const [searchValue, setSearchValue] = useState('')
  const [filteredTodoList, setFilteredTodoList] = useState([])

  useEffect(() => {
    if (searchValue.trim() === '') {
      setFilteredTodoList([])
      return
    }
    const fTodoList = todoList.filter((todo) => {
      const search = searchValue.trim().toLowerCase()
      const current = todo.title.trim().toLowerCase()
      return current.includes(search)
    })
    setFilteredTodoList(fTodoList)
  }, [searchValue, todoList])

  return (
    <AppContainer>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <Content>
        <TodoList todoList={filteredTodoList} setTodoList={setTodoList} />
      </Content>
    </AppContainer>
  )
}

Search.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      done: PropTypes.bool,
      title: PropTypes.string,
    })
  ).isRequired,
  setTodoList: PropTypes.func.isRequired,
}

export default Search
