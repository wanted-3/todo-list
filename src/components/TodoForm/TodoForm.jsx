import date from 'date-and-time'
import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useNavigate } from 'react-router-dom'
import { v4 } from 'uuid'
import { Calendar } from '../../assets/svgs'
import BigButton from '../BigButton/BigButton'
import styles from './TodoForm.module.scss'

const today = date.format(new Date(), 'YYYY-MM-DD')
function TodoForm({ todoValue = '', todoDate, setTodoList, type }) {
  const navigate = useNavigate()
  const inputRef = useRef(null)
  const [inputValue, setInputValue] = useState(todoValue)
  const [selectedDate, setSelectedDate] = useState(todoDate || today)
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (inputValue === '') {
      alert('todo를 입력해주세요')
      return
    }

    const newTodo = {
      id: v4(),
      title: inputValue,
      date: selectedDate,
      done: false,
    }

    if (type === 'add') {
      setTodoList((prev) => {
        const newTodoList = [...prev, newTodo]
        return newTodoList
      })
    }
    alert('todo 추가됐어요!')
    navigate('/')
  }

  const handleInputChange = (e) => {
    setInputValue(e.currentTarget.value)
  }

  // datePicker click
  const handleDatePickerOpen = () => {
    setIsOpen((_isOpen) => !_isOpen)
  }

  // date change
  const handleDateChange = (_date) => {
    setIsOpen((_isOpen) => !_isOpen)
    setSelectedDate(date.format(_date, 'YYYY-MM-DD'))
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div className={styles.todoForm}>
      <form onSubmit={handleSubmit} className={styles.addForm}>
        <input
          ref={inputRef}
          name='input'
          className={styles.addInput}
          onChange={handleInputChange}
          value={inputValue}
          type='text'
          placeholder='Enter New task'
        />
        <button className={styles.datePickButton} type='button' onClick={handleDatePickerOpen}>
          <span className={styles.calendarIcon}>
            <Calendar />
          </span>
          <span className={styles.calendarText}>{selectedDate === today ? 'Today' : selectedDate}</span>
        </button>
        {isOpen && (
          <DatePicker
            className={styles.datePicker}
            showPopperArrow={false}
            selected={new Date(selectedDate)}
            onChange={handleDateChange}
            dateFormat='YYYY-MM-dd'
            inline
          />
        )}
        <div className={styles.footerButton}>
          <BigButton text='New task' type='submit' />
        </div>
      </form>
    </div>
  )
}

TodoForm.propTypes = {
  todoValue: PropTypes.string,
  todoDate: PropTypes.string,
  type: PropTypes.oneOf(['add', 'modify']).isRequired,
  setTodoList: PropTypes.func.isRequired,
}
export default TodoForm
