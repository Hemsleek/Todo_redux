import './App.css';

const Todos = () => {
  const generateId = () => Math.random().toString(36).substr(2, 4)

  const defaultTodos = [{ todo: 'Buy some milks', id: generateId(), done: false },
  { todo: 'Cook some food', id: generateId(), done: false }
  ]
  return (
    <div className="Todos">
      {
        defaultTodos.map(todo => (
          <div className="todo">
            <span>{todo.todo}</span>
            <img src="/images/bin.svg" alt="delete" />
          </div>
        ))
      }
    </div>
  )
}

const FormInput = () => {
  const handleSubmit = () => {


  }

  return (
    <form className="FormInput" onSubmit={handleSubmit}>
      <span>Add a new todo:</span>
      <input placeholder="Enter task and press Enter" type="text" />
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
