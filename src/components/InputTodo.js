import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputTodo = ({ addTodoProps }) => {
  const [data, setData] = useState({ title: '' });

  const onChange = (e) => {
    setData({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.title.trim()) {
      addTodoProps(data.title);
      setData({ title: '' });
    } else {
      alert('Please write item');
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Add Todo"
        value={data.title}
        name="title"
        onChange={(e) => onChange(e)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};

export default InputTodo;
