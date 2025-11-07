function TaskCounter({ tasks, filter, filteredTasks }) {
  const totalTasks = tasks.length
  const completedTasks = tasks.filter(t => t.completed).length

  const getDisplayText = () => {
    if (filter === 'all') {
      return `${completedTasks}/${totalTasks}`
    }
    if (filter === 'active') {
      const activeCount = filteredTasks.length
      return `${activeCount}/${totalTasks}`
    }
    if (filter === 'completed') {
      const completedCount = filteredTasks.length
      return `${completedCount}/${totalTasks}`
    }
    return `${completedTasks}/${totalTasks}`
  }

  return (
    <div className="count_task">
      <img src="/assets/check_icon.png" alt="Checkmark" className="check_icon" />
      <span className="counter_text">{getDisplayText()}</span>
    </div>
  )
}

export default TaskCounter

