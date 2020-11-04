import React from 'react';
import TodoTemplate from './TodoTemplate';
import TodoForm from './TodoForm';
import './styles.css';

function App() {
  return (
    <div>
      <TodoTemplate form={<TodoForm />}>
        칠드런
      </TodoTemplate>
    </div>
  );
}

export default App;
