import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <div>
      <TodoItem text="test" checked />
      <TodoItem text="test" checked />
      <TodoItem text="test" />
    </div>
  )
}

export default TodoList;
