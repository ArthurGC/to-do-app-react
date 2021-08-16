import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo }) => (
  <li>
    <input type="checkbox" />
    {todo.title}
  </li>
);

TodoItem.propTypes = {
  todo: PropTypes.instanceOf(Object).isRequired,
};

export default TodoItem;
