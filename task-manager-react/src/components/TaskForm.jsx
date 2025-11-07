import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim() !== '') {
      onAddTask(inputValue)
      setInputValue('')
    }
  }

  return (
    <form className="task_form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="add_task_button">Add Task</button>
    </form>
  )
}

export default TaskForm

