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
    
import { useState, useEffect } from 'react';


         
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




          
