// src/App.js
import React from 'react'
import TaskManager from './components/TaskManager'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode } from './features/theme/themeSlice'

function App() {
  const dispatch = useDispatch()
  const darkMode = useSelector((state) => state.theme.darkMode)

  return (
    <div
      style={{
        backgroundColor: darkMode ? '#333' : '#fff',
        color: darkMode ? '#fff' : '#000',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <button onClick={() => dispatch(toggleDarkMode())}>
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>
      <TaskManager />
    </div>
  )
}

export default App
