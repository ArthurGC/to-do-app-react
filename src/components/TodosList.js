import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({ todos }) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ))}
  </ul>
);

TodosList.propTypes = {
  todos: PropTypes.instanceOf(Array).isRequired,
};

export default TodosList;
