import React, { useState } from 'react';
import Header from './Header';
import TodosList from './TodosList';

const TodoContainer = () => {
  const [state] = useState({
    todos: [
      {
        id: 1,
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: 2,
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: 3,
        title: 'Deploy to live server',
        completed: false,
      },
    ],
  });

  const handleChange = () => {
    console.log('clicked');
  };

  return (
    <div>
      <Header />
      <TodosList todos={state.todos} handleChangeProps={handleChange} />
    </div>
  );
};

export default TodoContainer;
