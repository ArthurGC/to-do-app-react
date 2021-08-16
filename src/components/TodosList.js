import React from 'react';
import PropTypes from 'prop-types';

const TodosList = ({ todos }) => (
  <ul>
    {todos.map((todo) => (
      <li key={todo.id}>{todo.title}</li>
    ))}
  </ul>
);

TodosList.propTypes = {
  todos: PropTypes.isRequired,
};

export default TodosList;
