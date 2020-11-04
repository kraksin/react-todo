import React from 'react';
import TodoTemplate from './TodoTemplate';
import './styles.css';

function App() {
  return (
    <div>
      <TodoTemplate form={<div>테스트폼</div>}>
        칠드런
      </TodoTemplate>
    </div>
  );
}

export default App;
