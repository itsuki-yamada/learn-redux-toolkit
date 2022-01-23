import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './taskSlice';

const TaskInput = () => {
  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState('');
  const handleTitleChange = (e) => setTodoTitle(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(todoTitle));
    setTodoTitle('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoTitle}
        onChange={handleTitleChange}
        placeholder="Please type in"
      />
      <button>Add Task</button>
    </form>
  );
};

export default TaskInput;