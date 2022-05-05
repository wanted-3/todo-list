import { forwardRef, useState } from 'react'

import styles from './TodoForm.module.scss'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Calendar } from '../../assets/svgs'
import moment from 'moment'

const dummy = {
  id: 1,
  title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
  done: true,
}

function TodoForm(props) {
  const [startDate, setStartDate] = useState(new Date())
  const [todo, setTodo] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  function handleChange(e) {
    const { value } = e.target
    setTodo(value)
  }

  // datePicker click
  const dateClickHandler = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }
  // date change
  const dateChangeHandler = (e) => {
    setIsOpen(!isOpen)
    setStartDate(e)
  }
  // yyyy-mm-dd 포맷 날짜 생성
  const getYmd10 = (d) => {
    return `${d.getFullYear()}-${d.getMonth() + 1 > 9 ? (d.getMonth() + 1).toString() : `0${d.getMonth() + 1}`}-${
      d.getDate() > 9 ? d.getDate().toString() : `0${d.getDate().toString()}`
    }`
  }
  // date format 변경, 오늘날짜면 Today를 출력
  const getDateformat = () => {
    return getYmd10(startDate) === new Date(+new Date() + 3240 * 10000).toISOString().split('T')[0]
  }

  // 데이터 확인용
  const ClickHandler = () => {
    const d = getYmd10(startDate)
    console.log(startDate, todo, d)
  }
  // console.log(moment().format('YY-MM-DD'))
  return (
    <div className={styles.form}>
      <div className={styles.todoForm}>
        <input
          className={styles.todoInput}
          type='text'
          placeholder='Enter new task'
          value={todo}
          onChange={handleChange}
        />
        <button className={styles.datePickerBtn} type='button' onClick={dateClickHandler}>
          <Calendar />
          {getDateformat() ? 'Today' : getYmd10(startDate)}
        </button>
        {isOpen && (
          <DatePicker
            className={styles.datePicker}
            showPopperArrow={false} // 쓸대없는 화살표 날림
            selected={startDate}
            onChange={dateChangeHandler}
            dateFormat='YY-MM-dd'
            inline
          />
        )}
        <button type='button' onClick={ClickHandler}>
          데이터 확인용 버튼
        </button>
      </div>
    </div>
  )
}

export default TodoForm
