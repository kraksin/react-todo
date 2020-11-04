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
        <TodoList todos={todos}/>
      </TodoTemplate>
    </div>
  );
}

export default App;
