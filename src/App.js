import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo } from './store/actionCreators'
import { generateId } from './utils'

import './App.css';

const Todos = () => {
  const allTodos = useSelector(state => state)
  console.log(allTodos)
  const dispatch = useDispatch()
  return (
    <div className="Todos">
      {
        allTodos.map(todo => (
          <div className="todo">
            <span>{todo.todo}</span>
            <img src="/images/bin.svg" alt="delete" onClick={() => dispatch(deleteTodo(todo.id))} />
          </div>
        ))
      }
    </div>
  )
}

const FormInput = () => {
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

function App() {

  return (
    <div className="App">
      <p className="heading">
        Todo
      </p>
      <div className='container'>
        <Todos />
        <FormInput />
      </div>
    </div>
  );
}

export default App;
