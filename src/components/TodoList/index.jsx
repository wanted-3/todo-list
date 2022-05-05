import { useState } from 'react'
import styles from './TodoList.module.scss'
import { CheckIcon,SearchIcon, MenuIcon } from '../../assets/svgs'
import DUMMY from '../../data/todos.json'

const INIT_TODO = DUMMY

function TodoList() {
  const [search, setSearch] = useState("");
  const [clickIcon, setClickIcon] = useState(false);
  const [todoList, setTodoList] = useState(INIT_TODO)
  console.log(INIT_TODO[0])
  console.log(todoList[0])

  // 검색내용 setState에 담아주기
  const onChange = (e) =>{
    setSearch(e.currentTarget.value)
}
  // 돋보기 아이콘 누르면 열고 닫기(필요가 있을까?)
const handleIconClick = () =>{
    setClickIcon(!clickIcon)
}

// map 배열에 담을 요소
// filter로 걸러준 검색어를 변수에 담아준다.
  const filterData = todoList.filter(
    (list,idx)=>{
    console.log(list)
    // truthy "2312313213" 1 2 3 4 true {}
    // falsy "" 0 false 
    return list.title.toUpperCase().includes(search.toUpperCase())
  }
  )

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

  return (
    <div className={styles.todoList}>
      <div className={styles.centering}>
        <h1>Hi! this is your assignment.</h1>
        <ul className={styles.tasks}>
          <p className={styles.tasksTitle}>Today&apos;s</p>
          {
          filterData.map((todo) => (
            <li key={`todo-${todo.id}`} className={styles.task}>
              <div className={styles.checkboxWrapper}>
                <input type='checkbox' checked={todo.done} data-id={todo.id} onChange={handleChange} />
                <CheckIcon />
              </div>
              <p className={styles.title}>{todo.title}</p>
            </li>
          ))}
        </ul>
        <button type='button' className={styles.addButton} onClick={handleAddClick} aria-label='Add button' />
      </div>
    </div>
  )
}

export default TodoList
