import React, { useState } from 'react';
import Header from './Header';
import InputTodo from './InputTodo';
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

  const addTodoItem = (title) => {
    const newTodo = {
        id: 4,
        title: title,
        completed: false
    };
    setStates({
        todos: [...state.todos, newTodo]
    })
  };

  return (
    <div>
      <Header />
      <InputTodo addTodoProps={addTodoItem} />
      <TodosList todos={state.todos} handleChangeProps={handleChange} deleteTodoProps={delTodo} />
    </div>
  );
};

export default TodoContainer;
