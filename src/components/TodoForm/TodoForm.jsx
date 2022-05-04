import { useState } from 'react'

import styles from './TodoForm.module.scss'
import DatePicker from 'react-datepicker'

const dummy = {
  id: 1,
  title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
  done: true,
}

function TodoForm(props) {
  const [startDate, setStartDate] = useState(new Date())
  const [todo, setTodo] = useState('')

  function handleChange(e) {
    const { value } = e.target
    setTodo(value)
  }

  return (
    <div className={styles.form}>
      <div className='middle'>
        <input type='text' placeholder='Enter new task' value={todo} onChange={handleChange} />
        <div className='datapicker'>
          <span>Today</span>
          <DatePicker selected={startDate} onChange={(day) => setStartDate(day)} />
        </div>
      </div>
    </div>
  )
}

export default TodoForm
