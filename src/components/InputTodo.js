import React, { useState } from 'react';

const InputTodo = () => {
  const [data, setData] = useState({ title: '' });

  const onChange = (e) => {
    setData({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

export default InputTodo;
