import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  idCount: 3,
  tasks: [
    {
      id: 3,
      title: 'TASK C',
      completed: false,
    },
    {
      id: 2,
      title: 'TASK B',
      completed: false,
    },
    {
      id: 1,
      title: 'TASK A',
      completed: false,
    },
  ],
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.idCount++;
      const newTask = {
        id: state.idCount,
        title: action.payload,
        completed: false,
      };
      state.tasks = [newTask, ...state.tasks];
    },
    toggleCompleteTask: (state, action) => {
      const task = state.task.find((_task) => _task.id === action.payload.id);
      if (task) task.completed = !task.completed;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(
        (_task) => _task.id !== action.payload.id);
    },
  },
});

export const { addTask, toggleCompleteTask, deleteTask } = taskSlice.actions;
export const selectTasks = (state) => state.tasks;
export default taskSlice.reducer;
