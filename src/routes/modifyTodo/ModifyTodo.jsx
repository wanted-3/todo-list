import { Link } from 'react-router-dom'

import SmallButton from '../../components/SmallButton/SmallButton'
import TodoForm from '../../components/TodoForm/TodoForm'

import styles from './Modify.module.scss'

import modify from '../../assets/modify.png'

const dummy = {
  id: 2,
  content: '원티드 수업 2강 수강',
}

function ModifyTodo({}) {
  return (
    <div>
      <div className={styles.addTodoPage}>
        <div className={styles.modifyGuide}>
          <p>{dummy.id}번 Todo</p>
          <p>
            수정 중
            <div>
              <img src={modify} width='100px' height='100px' />
            </div>
          </p>
        </div>

        <div className={styles.button}>
          <Link to='/'>
            <SmallButton />
          </Link>
        </div>
        <TodoForm data={dummy} modifyMode={true} />
      </div>
    </div>
  )
}

export default ModifyTodo
