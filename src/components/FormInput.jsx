import React from 'react'
import {  useDispatch } from 'react-redux'
import { addTodo } from '../store/actionCreators'
import { generateId } from '../utils'



function FormInput() {
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
      e.preventDefault()
      const todo = (e.target.todo.value).trim()
      if (!todo) return null
      const id = generateId()
      dispatch(addTodo(id, todo))
      e.target.reset()
  
    }
  
    return (
      <form className="FormInput" onSubmit={handleSubmit}>
        <span>Add a new todo:</span>
        <input name='todo' placeholder="Enter task and press Enter" type="text" />
      </form>
    )
  }
  

export default FormInput
