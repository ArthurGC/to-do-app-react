import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, handleChangeProps, deleteTodoProps }) => (
  <li>
    <input type="checkbox" checked={todo.completed} onChange={() => handleChangeProps(todo.id)} />
    <button type="button" onClick={() => deleteTodoProps(todo.id)}>Delete</button>
    {todo.title}
  </li>
);

TodoItem.propTypes = {
  todo: PropTypes.instanceOf(Object).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

export default TodoItem;
