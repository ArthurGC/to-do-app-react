import React, { useState } from 'react';

const InputTodo = () => {
  const [state] = useState({ title: '' });
  return (
    <form>
      <input type="text" placeholder="Add Todo" value={state.title} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputTodo;
