import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, handleChangeProps }) => (
  <li>
    <input type="checkbox" checked={todo.completed} onChange={() => handleChangeProps(todo.id)} />
    {todo.title}
  </li>
);

TodoItem.propTypes = {
  todo: PropTypes.instanceOf(Object).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
};

export default TodoItem;
