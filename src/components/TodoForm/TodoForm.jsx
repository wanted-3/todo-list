import { useState } from 'react'
import BigButton from '../BigButton/BigButton'
import DatePicker from 'react-datepicker'
import { Calendar } from '../../assets/svgs'
import styles from './TodoForm.module.scss'
import moment from 'moment'

function TodoForm() {
  const [inputValue, setInputValue] = useState('')
  const [date, setdate] = useState(new Date())

  const handleValue = (e) => {
    setInputValue(e.currentTarget.value)
  }

  const handleAdd = () => {
    inputValue !== '' && localStorage.setItem(date, inputValue)
    setInputValue('')
  }

  // datePicker click
  const dateClickHandler = (e) => {
    setIsOpen((isOpen) => !isOpen)
  }
  // date change
  const dateChangeHandler = (e) => {
    setIsOpen((isOpen) => !isOpen)
    setdate(e)
  }
  // yyyy-mm-dd 포맷 날짜 생성
  const getYmd10 = (d) => {
    return `${d.getFullYear()}-${d.getMonth() + 1 > 9 ? (d.getMonth() + 1).toString() : `0${d.getMonth() + 1}`}-${
      d.getDate() > 9 ? d.getDate().toString() : `0${d.getDate().toString()}`
    }`
  }
  // date format 변경, 오늘날짜면 Today를 출력
  const getDateformat = () => {
    return getYmd10(date) === new Date(+new Date() + 3240 * 10000).toISOString().split('T')[0]
  }

  return (
    <div className={styles.todoForm}>
      <div className={styles.addForm}>
        <input name="input" className={styles.addInput} onChange={handleValue} value={inputValue} type="text" placeholder="Enter new task"/>
        <button className={styles.datePickButton} type='button' onClick={dateClickHandler}>
          <span className={styles.calendarIcon}>
            <Calendar />
          </span>
          <span>{getDateformat() ? 'Today' : getYmd10(date)}</span>
        </button>
        {isOpen && (
          <DatePicker
            className={styles.datePicker}
            showPopperArrow={false}
            selected={date}
            onChange={dateChangeHandler}
            dateFormat='YY-MM-dd'
            inline
          />)
        }
      </div>
      <div className={styles.footerButton}>
        <BigButton text='New task' onClick={handleAdd} />
      </div>
    </div>
  )
}

export default TodoForm
