import { createSlice } from '@reduxjs/toolkit'

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: 1, title: 'Learn Redux Toolkit', completed: false },
      { id: 2, title: 'Build a Task Manager App', completed: true },
    ],
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      }
      state.items.push(newTask)
    },
    removeTask: (state, action) => {
      state.items = state.items.filter((item) => {
        return item.id !== action.payload
      })
    },
    toggleTask: (state, action) => {
      const task = state.items.find((item) => item.id === action.payload)
      if (task) {
        task.completed = !task.completed
      }
    },
  },
})

export const { addTask, removeTask, toggleTask } = taskSlice.actions

export default taskSlice.reducer
