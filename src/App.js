import Todos from './components/Todos'
import FormInput from './components/FormInput'

import './App.css';

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
