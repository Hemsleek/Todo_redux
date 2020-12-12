import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { deleteTodo, todoDone } from '../store/actionCreators'

function Todos() {
    const allTodos = useSelector(state => state)

    const dispatch = useDispatch()
    return (
      <div className="Todos">
        {
          allTodos.map((todo, todoIndex) => (
            <div className={`todo ${todo.done ? 'done' : ''}`} onClick={() => dispatch(todoDone(todo.id))} key={`todo_${todoIndex}`}>
              <span>{todo.todo}</span>
              <img src="/images/bin.svg" alt="delete" onClick={() => dispatch(deleteTodo(todo.id))} />
            </div>
          ))
        }
      </div>
    )
}

export default Todos
