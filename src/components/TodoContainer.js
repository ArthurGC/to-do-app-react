import React, { useState, useEffect } from 'react';
import '../App.css';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

const TodoContainer = () => {
  const [state, setStates] = useState({ todos: [] });

  useEffect(() => {
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      setStates({
        todos: loadedTodos,
      });
    }
  }, []);

  useEffect(() => {
    const temp = JSON.stringify(state.todos);
    localStorage.setItem('todos', temp);
  }, [state.todos]);

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
      todos: [...state.todos.filter((todo) => todo.id !== id)],
    });
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setStates({
      todos: [...state.todos, newTodo],
    });
  };

  const setUpdate = (updateTitle, id) => {
    setStates({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updateTitle;
        }
        return todo;
      }),
    });
  };

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <TodosList
          todos={state.todos}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
};

export default TodoContainer;
