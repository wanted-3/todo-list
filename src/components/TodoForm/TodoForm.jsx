import date from 'date-and-time'
import PropTypes from 'prop-types'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useNavigate } from 'react-router-dom'
import { Calendar } from '../../assets/svgs'
import BigButton from '../BigButton/BigButton'
import styles from './TodoForm.module.scss'

const today = date.format(new Date(), 'YYYY-MM-DD')
function TodoForm({ todoValue = '', todoDate, setTodoList, type }) {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState(todoValue)
  const [selectedDate, setSelectedDate] = useState(todoDate || today)
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTodo = {
      id: new Date().getTime(),
      title: inputValue,
      date: selectedDate,
      done: false,
    }
    if (type === 'add') {
      setTodoList((prev) => [...prev, newTodo])
    }
    // TODO:수정

    alert('todo 추가됬어요!')
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

  return (
    <div className={styles.todoForm}>
      <form onSubmit={handleSubmit} className={styles.addForm}>
        <input
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
          <span>{selectedDate === today ? 'Today' : selectedDate}</span>
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
