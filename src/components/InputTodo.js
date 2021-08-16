import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';

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
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add Todo"
        value={data.title}
        name="title"
        onChange={(e) => onChange(e)}
      />
      <button type="submit" className="input-submit">
        <FaPlusCircle />
      </button>
    </form>
  );
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};

export default InputTodo;
