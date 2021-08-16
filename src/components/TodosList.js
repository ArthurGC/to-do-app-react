import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({ todos, handleChangeProps }) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} handleChangeProps={handleChangeProps} />
    ))}
  </ul>
);

TodosList.propTypes = {
  todos: PropTypes.instanceOf(Array).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
};

export default TodosList;
