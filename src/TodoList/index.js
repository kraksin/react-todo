import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onRemove }) => {

  return (
    <div>
      {todos.map(({ id, text, checked }) => 
        <TodoItem 
          key={id}
          id={id}
          text={text}
          checked={checked}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      )}
    </div>
  )
}

export default React.memo(TodoList, (prevProps, nextProps) => {
  return nextProps.todos === prevProps.todos;
});
