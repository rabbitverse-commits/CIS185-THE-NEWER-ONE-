import React, { useState, useEffect, useMemo } from 'react';
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import FilterButtons from './FilterButtons';

/* function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}  */



// The main application component, rewritten to manage tasks
function App() {
    // 1. Use useState for task management (initialize from localStorage)
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('react-task-manager-tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [filter, setFilter] = useState('all');

    // 2. Use useEffect to save to localStorage whenever 'tasks' changes
    useEffect(() => {
        try {
            localStorage.setItem('react-task-manager-tasks', JSON.stringify(tasks));
        } catch (error) {
            console.error("Could not save tasks to localStorage", error);
        }
    }, [tasks]); 

    // Function to add new tasks
    const addTask = (text) => {
        const newTask = {
            id: Date.now(), 
            text,
            completed: false,
            createdAt: new Date().toISOString(),
        };
        setTasks((prevTasks) => [newTask, ...prevTasks]);
    };

    // Function to toggle task completion status
    const toggleTask = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    // Function to delete a task
    const deleteTask = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    // 3. Implement task filtering using useMemo
    const filteredTasks = useMemo(() => {
        switch (filter) {
            case 'active':
                return tasks.filter((task) => !task.completed);
            case 'completed':
                return tasks.filter((task) => task.completed);
            case 'all':
            default:
                return tasks;
        }
    }, [tasks, filter]);

    // Calculate task counts for display in FilterButtons
    const taskCount = useMemo(() => ({
        active: tasks.filter(t => !t.completed).length,
        total: tasks.length
    }), [tasks]);

    return (
        // The main container for the task manager app
        <div className="app-container">
            <header>
                <h1>Task Manager App</h1>
            </header>
            <main>
               
                <TaskInput addTask={addTask} />
                <FilterButtons 
                    filter={filter} 
                    setFilter={setFilter} 
                    taskCount={taskCount}
                />
                <TaskList
                    tasks={filteredTasks} 
                    toggleTask={toggleTask}
                    deleteTask={deleteTask}
                />
            </main>
        </div>
    );
} 

export default App;