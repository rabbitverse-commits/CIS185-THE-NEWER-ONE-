# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
-----------------------------------------------------------------------------------------------------
Leaving the stuff above because it looks important
Anyways, this is the react app thing. I have no idea what it is I need to add, but I'm gonna try my best anyways!

For some reason, though, it won't opn so I can't run it to see if it works.

These are the notes for this assignment (also known as me just me copying and pasting things from the slides):

Task: Create a Task Manager App
    Create a React app with multiple components
    Implement add, complete, and delete functionality
    Use useState for task management


    Use useEffect to save to localStorage

    
    Include task filtering (all, active, completed)

Techincal Specifications:
/ Your app should include:

// 1. Task object structure:
{
    id: 1234567890,
    text: "Complete assignment",
    completed: false,
    createdAt: new Date()
}

// 2. Features to implement:
- Add new tasks with input field 
- Toggle task completion status
- Delete tasks
- Filter by status (All/Active/Completed)
- Persist data in localStorage
- Show task count


// 3. Components to create:
- App (main container)
- TaskInput (add new tasks)
- TaskList (render all tasks)
- TaskItem (individual task)
- FilterButtons (filter options)


(I don't know why my template doesn't match what the slides showed, but all the files are there so I'm not reallly complaining.)
my-react-app/
├── node_modules/      # Dependencies
├── public/            # Static assets
│   └── index.html     # Main HTML file
├── src/               # Source code
│   ├── App.jsx        # Main component
│   ├── main.jsx       # Entry point
│   ├── App.css        # Styles
│   └── index.css      # Global styles
├── package.json       # Project config
└── vite.config.js     # Build config

CODING EXAMPLES THAT COULD HELP:

Understanding App.jsx
import { useState } from 'react'
import './App.css'

function App() {
    return (
        <div className="App">
            <header>
                <h1>Welcome to React</h1>
                <p>Edit src/App.jsx and save to reload.</p>
            </header>
        </div>
    );
}
export default App

Grouping Without Extra DOM Nodes
import { Fragment } from 'react'

function TableRow({ data }) {
    return (
        {/* Long syntax */}
        <Fragment>
            <td>{data.name}</td>
            <td>{data.age}</td>
        </Fragment>

        {/* Short syntax - preferred */}
        <>
            <td>{data.name}</td>
            <td>{data.age}</td>
        </>
    );
}

Adding and Removing Items
function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const addTodo = () => {
        // Add to array - spread existing, add new
        setTodos([...todos, { id: Date.now(), text: newTodo }]);
        setNewTodo("");
    };

    const removeTodo = (id) => {
        // Remove from array - filter out
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <button onClick={addTodo}>Add</button>
        </div>
    );
}

Responding to User Actions
function EventExamples() {
    const handleClick = () => {
        console.log("Button clicked!");
    };

    const handleChange = (event) => {
        console.log("Input value:", event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();  // Prevent form reload
        console.log("Form submitted!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} />
            <button onClick={handleClick}>Click Me</button>
        </form>
    );
}

Preventing Memory Leaks
function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        // Set up interval
        const intervalId = setInterval(() => {
            setSeconds(s => s + 1);
        }, 1000);

        // Cleanup function - runs when component unmounts
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return <p>Seconds: {seconds}</p>;
}
Important: Always clean up subscriptions, timers, and event listeners to prevent memory leaks!

Todo App with State and Effects
function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        document.title = `${todos.length} todos`;
    }, [todos]);

    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, { id: Date.now(), text: input }]);
            setInput("");
        }
    };

    return (
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addTodo}>Add</button>
            <ul>{todos.map(t => <li key={t.id}>{t.text}</li>)}</ul>
        </div>
    );
}

// localStorage example:
useEffect(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) setTasks(JSON.parse(saved));
}, []);

useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks]);
