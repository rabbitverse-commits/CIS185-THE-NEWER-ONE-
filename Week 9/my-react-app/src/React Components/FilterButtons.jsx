function FilterButtons({ currentFilter, setFilter }) {
    const FilterButton = ({ name }) => (
        // Uses prop defaults pattern as seen in the Button slide example
        <button
            className={currentFilter === name ? 'active-filter' : ''}
            onClick={() => setFilter(name)}
        >
            {name.charAt(0).toUpperCase() + name.slice(1)}
        </button>
    );

    return (
        <div className="filter-buttons">
            <FilterButton name="all" />
            <FilterButton name="active" />
            <FilterButton name="completed" />
        </div>
    );
} 

export default FilterButtons;

/* Template AI used from the slides directly.
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
     
         
// Method 1: Default parameters (Recommended)
function Button({ text = "Click me", color = "blue" }) {
    return (
        <button style={{ backgroundColor: color }}>
            {text}
        </button>
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
          
 */