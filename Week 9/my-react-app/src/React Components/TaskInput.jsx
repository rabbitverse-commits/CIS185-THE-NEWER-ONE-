import { useState } from 'react';

function TaskInput({ addTask }) {
    // Uses the 'input' and 'setInput' naming from the slide's TodoApp
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        // Uses the 'event.preventDefault()' logic from the slides
        e.preventDefault(); 
        if (input.trim()) {
            addTask(input.trim());
            setInput('');
        }
    };

    return (
        // Uses the form structure and input handling from UserForm/ControlledInput slides
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter a new task..."
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default TaskInput;

/* Template AI used from the slides directly.
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
            {/* More inputs... }
        </form>
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
           
function ControlledInput() {
    const [text, setText] = useState("");

    return (
        <div>
            <input
                type="text"
                value={text}  /*{ Controlled by state }
                onChange={(e) => setText(e.target.value)}
            />
            <p>You typed: {text}</p>
            <p>Characters: {text.length}</p>
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
 */
