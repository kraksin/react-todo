import React, { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoTemplate from './TodoTemplate';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './styles.css';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const insertTodo = () => {
    if (input === '') return;
  
    setTodos(todos => [...todos, { id: uuidv4(), text: input, checked: false }]);
    setInput('');
  };

  const keyPressEnterTodo = (e) => {
    if (input === '') return;

    if (e.key === 'Enter') {
      insertTodo();
    }
  }

  const removeTodo = useCallback((id) => 
    setTodos(todos => todos.filter(item => item.id !== id))
  , []);

  const toggleTodo = useCallback((id) => {
    setTodos(todos => 
      todos.map(todo => 
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }, []);

  return (
    <div>
      <TodoTemplate 
        form={
          <TodoForm 
            value={input} 
            onChange={e => setInput(e.target.value)}
            onInsert={insertTodo}
            onKeyPress={keyPressEnterTodo} 
          />
        }
      >
        <TodoList todos={todos} onToggle={toggleTodo} onRemove={removeTodo} />
      </TodoTemplate>
    </div>
  );
}

export default App;
