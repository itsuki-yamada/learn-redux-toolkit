import React from 'react';
import { useSelector } from 'react-redux';
import { selectTasks } from './taskSlice';
import TaskItem from './TaskItem';

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  return (
    <>
      {tasks.map((_task) => <TaskItem key={_task.id} task={_task}/>)}
    </>
  );
};

export default TaskList;