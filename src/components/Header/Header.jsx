import {useState} from 'react';
import { SearchIcon, MenuIcon } from '../../assets/svgs'
import styles from './Header.modules.scss'



function Header(props) {

  const [clickIcon, setClickIcon] = useState(false)
  const [todoList, setTodoList] = useState(INIT_TODO)
  const [search, setSearch] = useState("")

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
    return (
      <div className={styles.headerWrap}>
        <MenuIcon className={styles.MenuIcon}/>
        {
            clickIcon === false ? 
              <input 
            className={styles.SearchInput} 
            placeholder="Search"
                onChange={onChange}/>
            :
            null
        }
        <SearchIcon 
            className={styles.SearchIcon}
            onClick={handleIconClick}/>
      </div>
    )
}

export default Header