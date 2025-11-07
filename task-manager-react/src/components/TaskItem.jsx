function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task_item">
      <input
        type="checkbox"
        className="task_checkbox"
        id={`task-${task.id}`}
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <label
        htmlFor={`task-${task.id}`}
        className="task_label"
      >
        {task.text}
      </label>
      <button onClick={() => onDelete(task.id)}>×</button>
    </li>
  )
}

export default TaskItem

