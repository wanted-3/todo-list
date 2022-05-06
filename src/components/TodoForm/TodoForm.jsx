import { useState } from 'react'
import BigButton from '../BigButton/BigButton'
import DatePicker from 'react-datepicker'
import { Calendar } from '../../assets/svgs'
import styles from './TodoForm.module.scss'

import 'react-datepicker/dist/react-datepicker.css'

function TodoForm({ data }) {
  const [inputValue, setInputValue] = useState(data.content)
  const [date, setdate] = useState(new Date())
  const [isOpen, setIsOpen] = useState({
    calendar: false,
  })

  const handleChange = (e) => {
    setInputValue(e.currentTarget.value)
  }

  const handleAdd = () => {
    inputValue !== '' && localStorage.setItem(getday(date), inputValue)
    setInputValue('')
  }

  // datePicker click
  const dateClickHandler = () => {
    setIsOpen((prev) => ({ ...prev, calendar: !prev.calendar }))
  }
  // date change
  const dateChangeHandler = (e) => {
    setIsOpen((prev) => ({ ...prev, calendar: !prev.calendar }))
    setdate(e)
  }
  // yyyy-mm-dd 포맷 날짜 생성
  const getYmd10 = (d) => {
    return `${d.getFullYear()}-${d.getMonth() + 1 > 9 ? (d.getMonth() + 1).toString() : `0${d.getMonth() + 1}`}-${
      d.getDate() > 9 ? d.getDate().toString() : `0${d.getDate().toString()}`
    }`
  }

  const getday = (d) => {
    return `${(d.getMonth() + 1).toString()}월 ${d.getDate().toString()}일`
  }

  // date format 변경, 오늘날짜면 Today를 출력
  const getDateformat = () => {
    return getYmd10(date) === new Date(+new Date() + 3240 * 10000).toISOString().split('T')[0]
  }

  return (
    <div className={styles.todoForm}>
      <div className={styles.addForm}>
        <h1>
          What's your <span>{getday(date)}</span> todo ?
        </h1>
        <input
          name='input'
          className={styles.addInput}
          onChange={handleChange}
          value={inputValue}
          type='text'
          placeholder='Enter new task'
        />

        <button className={styles.datePickButton} type='button' onClick={dateClickHandler}>
          <span className={styles.calendarIcon}>
            <Calendar />
          </span>
          <span>{getDateformat() ? 'Today' : getYmd10(date)}</span>
        </button>

        {isOpen.calendar && (
          <DatePicker
            className={styles.datePicker}
            showPopperArrow={false}
            selected={date}
            onChange={dateChangeHandler}
            dateFormat='YY-MM-dd'
            inline
          />
        )}
      </div>
      <div className={styles.footerButton}>
        <BigButton text='New task' onClick={handleAdd} />
      </div>
    </div>
  )
}

export default TodoForm
