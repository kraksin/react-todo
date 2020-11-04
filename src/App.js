import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoTemplate from './TodoTemplate';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './styles.css';

function App() {
  const [input, setInput] = useState('');
  const [todos, sestTodos] = useState([]);

  const insertTodo = () => {
    const newId = uuidv4();
    
    const newTodos = [...todos, { id: newId, text: input, checked: false }];
    sestTodos(newTodos);
    setInput('');
  }

  const keyPressEnterTodo = (e) => {
    if (e.key === 'Enter') {
      insertTodo();
    }
  }

  const removeTodo = (id) => {
    const newTodo = todos.filter(item => item.id !== id);
    sestTodos(newTodo);
  }

  const toggleTodo = (id) => {
    const index = todos.findIndex(item => item.id === id);
    const selected = todos[index];

    const newTodos = [...todos];

    newTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    sestTodos(newTodos);
  }

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
