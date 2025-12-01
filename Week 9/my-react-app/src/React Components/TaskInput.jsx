import { useState } from 'react'; 
            
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
