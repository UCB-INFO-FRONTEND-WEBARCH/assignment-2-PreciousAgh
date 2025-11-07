import { useState } from 'react'
import TaskList from './components/TaskList'
import TaskItem from './components/TaskItem'
import TaskForm from './components/TaskForm'
import TaskCounter from './components/TaskCounter'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Call Mom', completed: false },
    { id: 2, text: 'Buy the new issue of Scientific American', completed: false },
    { id: 3, text: 'Return the textbook to Josie', completed: false },
    { id: 4, text: 'Buy the new album by Rake', completed: false },
    { id: 5, text: 'Buy a gift card for Dad', completed: false }
  ])
  const [filter, setFilter] = useState('all')

  const addTask = (taskText) => {
    if (taskText.trim() === '') return
    
    const newTask = {
      id: Date.now(),
      text: taskText.trim(),
      completed: false
    }
    setTasks(prevTasks => [...prevTasks, newTask])
  }

  const toggleTask = (id) => {
    setTasks(prevTasks => prevTasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
  }

  const getFilteredTasks = () => {
    if (filter === 'active') {
      return tasks.filter(task => !task.completed)
    }
    if (filter === 'completed') {
      return tasks.filter(task => task.completed)
    }
    return tasks
  }

  const filteredTasks = getFilteredTasks()

  return (
    <div className="app">
      <header className="main_header">
        <div className="header_content">
          <img src="/assets/menu_icon.png" alt="Menu" className="menu_icon" />
          <div className="search_container">
            <img src="/assets/search_icon.png" alt="Search" className="search_icon" />
            <input type="text" placeholder="Quick find" className="quick_find" />
          </div>
          <TaskCounter tasks={tasks} filter={filter} filteredTasks={filteredTasks} />
        </div>
      </header>

      <div className="container">
        <nav className="sidebar">
          <ul className="nav_list">
            <li className="nav_item active">
              <img src="/assets/inbox_icon.png" alt="Inbox" className="nav_icon" />
              <span className="nav_text">Inbox</span>
              <span className="nav_count">{tasks.filter(t => !t.completed).length}</span>
            </li>
            <li className="nav_item">
              <img src="/assets/calendar_icon.png" alt="Today" className="nav_icon" />
              <span className="nav_text">Today</span>
              <span className="nav_count">{tasks.filter(t => !t.completed).length}</span>
            </li>
            <li className="nav_item">
              <img src="/assets/upcoming_icon.png" alt="Upcoming" className="nav_icon" />
              <span className="nav_text">Upcoming</span>
            </li>
          </ul>
        </nav>

        <main className="main_content">
          <h1 className="content_header">Inbox</h1>
          
          <div className="filter_buttons">
            <button
              className={`filter_button ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={`filter_button ${filter === 'active' ? 'active' : ''}`}
              onClick={() => setFilter('active')}
            >
              Active
            </button>
            <button
              className={`filter_button ${filter === 'completed' ? 'active' : ''}`}
              onClick={() => setFilter('completed')}
            >
              Completed
            </button>
          </div>

          <TaskForm onAddTask={addTask} />
          <TaskList
            tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </main>
      </div>
    </div>
  )
}

export default App

