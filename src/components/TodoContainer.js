import React, { useState } from 'react';
import Header from './Header';
import TodosList from './TodosList';

const TodoContainer = () => {
  const [state, setStates] = useState({
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

  const handleChange = (id) => {
    setStates({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };

  const delTodo = (id) => {
    setStates({
      todos: [
        ...state.todos.filter((todo) => todo.id !== id),
      ],
    });
  };

  return (
    <div>
      <Header />
      <TodosList todos={state.todos} handleChangeProps={handleChange} deleteTodoProps={delTodo} />
    </div>
  );
};

export default TodoContainer;
