import { useState } from 'react';
 

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



function Parent() {
    const [sharedValue, setSharedValue] = useState("");

    return (
        <div>
            <ChildA value={sharedValue} onChange={setSharedValue} />
            <ChildB value={sharedValue} />
        </div>
    );
}

function ChildA({ value, onChange }) {
    return <input value={value} onChange={(e) => onChange(e.target.value)} />;
}

function ChildB({ value }) {
    return <p>Mirror: {value}</p>;
}

      
function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            });
    }, []);  // Empty array = run once on mount

    if (loading) return <p>Loading...</p>;

    return (
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    );
}
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
         
// Method 1: Default parameters (Recommended)
function Button({ text = "Click me", color = "blue" }) {
    return (
        <button style={{ backgroundColor: color }}>
            {text}
        </button>
    );
}

// Usage:
<Button />                     ;{/* Uses defaults */}
<Button text="Submit" />        ;{/* Custom text */}
<Button color="red" />          ;{/* Custom color */}

            function Card({ title, children }) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <div className="card-body">
                {children}  {/* Whatever is between opening/closing tags */}
            </div>
        </div>
    );
} 

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

