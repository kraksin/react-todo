import React from 'react';
import TodoTemplate from './TodoTemplate';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './styles.css';

function App() {
  return (
    <div>
      <TodoTemplate form={<TodoForm />}>
        <TodoList />
      </TodoTemplate>
    </div>
  );
}

export default App;
