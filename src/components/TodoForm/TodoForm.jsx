import { useState } from 'react'
import BigButton from '../BigButton/BigButton'
import styles from './TodoForm.module.scss'

function TodoForm() {
  const [inputValue, setInputValue] = useState('')

  const handleValue = (e) => {
    setInputValue(e.currentTarget.value)
  }

  const handleAdd = () => {
      inputValue !== '' && localStorage.setItem(Date.now(), inputValue)
      setInputValue('')
  }

  return (
    <div className={styles.todoForm}>
      <div className={styles.addForm}>
        <input name="input" className={styles.addInput} onChange={handleValue} value={inputValue} type="text" placeholder="Enter new task"/>
        <button aria-label="datePickBtn" type="button" className={styles.datePicker}>datePicker</button>
      </div>
      <div className={styles.button}>
        <BigButton text='New task' onClick={handleAdd} />
      </div>
    </div>
  )
}

export default TodoForm
