function TaskItem({ task, toggleTaskCompletion, deleteTask }) {
    return (
        // Uses onClick handlers as seen in EventExamples slide
        <li className={`task-item ${task.completed ? 'completed' : ''}`}>
            <span 
                onClick={() => toggleTaskCompletion(task.id)}
                style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            >
                {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>
                Delete
            </button>
        </li>
    );
}

export default TaskItem;



/* Template AI used from the slides directly.
// Method 1: Default parameters (Recommended)
function Button({ text = "Click me", color = "blue" }) {
    return (
        <button style={{ backgroundColor: color }}>
            {text}
        </button>
    );
}

// Usage:
<Button />                     ;{/* Uses defaults }
<Button text="Submit" />        ;{/* Custom text }
<Button color="red" />          ;{/* Custom color }
  */
