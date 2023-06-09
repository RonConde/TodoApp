import React from 'react';
import TodoList from './componentes/Todolist';
import TodoForm from './componentes/TodoForm';

const App = () => {
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-8'>
          <TodoList />
        </div>
        <div className='col-4'>
          <TodoForm />
        </div>
      </div>
    </div>
  );
}

export default App;