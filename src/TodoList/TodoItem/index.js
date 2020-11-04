import React from 'react';
import './styles.css';

const TodoItem = ({ id, text, checked, onRemove, onToggle }) => {
  
  const remove = (e) => {
    e.stopPropagation();
    onRemove(id);
  }

  return (
    <div className='todo-item' onClick={() => onToggle(id)}>
      <div className='remove' onClick={e => remove(e)}>&times;</div>
      <div className={`todo-text ${checked && 'checked'}`}>
        <div>{text}</div>
      </div>
      {
        checked && (<div className='check-mark'>✓</div>)
      }
    </div>
  )
}

export default TodoItem;
