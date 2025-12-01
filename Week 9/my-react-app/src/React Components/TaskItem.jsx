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
 