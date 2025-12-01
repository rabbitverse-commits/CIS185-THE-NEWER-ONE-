import { useState } from 'react';

function Counter() {
    // useState returns [currentValue, setterFunction]
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}
      const [stateVariable, setStateFunction] = useState(initialValue);


            
function UserForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    return (
        <form>
            <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
            />
            {/* More inputs... */}
        </form>
    );
}
      
function UserProfile() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        age: 0
    });

    const updateName = (newName) => {
        // IMPORTANT: Spread operator to keep other properties
        setUser({
            ...user,
            name: newName
        });
    };

    return (
        <input
            value={user.name}
            onChange={(e) => updateName(e.target.value)}
        />
    );
}

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
           
function ControlledInput() {
    const [text, setText] = useState("");

    return (
        <div>
            <input
                type="text"
                value={text}  /*{ Controlled by state }*/
                onChange={(e) => setText(e.target.value)}
            />
            <p>You typed: {text}</p>
            <p>Characters: {text.length}</p>
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
    
import { useState, useEffect } from 'react';

function Example() {
    useEffect(() => {
        // This runs after render
        console.log("Component rendered!");
    });
}
      
// Runs on EVERY render
useEffect(() => {
    console.log("Every render");
});

// Runs ONCE on mount (empty dependency array)
useEffect(() => {
    console.log("Component mounted");
}, []);

// Runs when 'count' changes
useEffect(() => {
    console.log("Count changed to:", count);
}, [count]);

// Runs when count OR name changes
useEffect(() => {
    console.log("Count or name changed");
}, [count, name]);
      
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

// Usage:
<Card title="Welcome">
    <p>This is the card content!</p>
    <button>Click here</button>
</Card>


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
          
