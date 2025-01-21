import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, removeTask, toggleTask } from '../features/tasks/taskSlice.js'

function TaskManager() {
  const [newTask, setNewTask] = useState('')
  const tasks = useSelector((state) => state.tasks.items)
  const dispatch = useDispatch()

  const handleAddTask = () => {
    dispatch(addTask({ title: newTask }))
    setNewTask('')
  }

  return (
    <div>
      <h2>Task Manager</h2>
      <input
        type='text'
        placeholder='New Task'
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              onClick={() => dispatch(toggleTask(task.id))}
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              {task.title}
            </span>
            <button onClick={() => dispatch(removeTask(task.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskManager
