import React from 'react';
import './styles.css';

const TodoTemplate = ({ form, children }) => {
  return (
    <main className='template-container'>
      <div className='title'>오늘 할 일</div>
      <section className='form-wrapper'>{form}</section>
      <section className='todos-wrapper'>{children}</section>
    </main>
  )
}

export default TodoTemplate;
