import React from 'react';
import './styles.css';

const TodoForm = ({ value, onChange, onInsert, onKeyPress }) => {
  


  return (
    <div className='form'>
      <input 
        value={value} 
        placeholder='할일을 입력해주세요' 
        onChange={onChange} 
        onKeyPress={onKeyPress} 
      />
      <div className='insert-btn' onClick={onInsert}>추가</div>
    </div>
  )
}

export default TodoForm;
