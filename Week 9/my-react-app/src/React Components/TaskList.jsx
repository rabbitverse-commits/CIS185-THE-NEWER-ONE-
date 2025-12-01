import TaskItem from './TaskItem';

function TaskList({ tasks, toggleTaskCompletion, deleteTask }) {
    return (
        <ul className="task-list">
            {/* Uses the .map(user => ...) or .map(t => ...) pattern from slides */}
            {tasks.map(task => (
                <TaskItem
                    key={task.id} 
                    task={task}
                    toggleTaskCompletion={toggleTaskCompletion}
                    deleteTask={deleteTask}
                />
            ))}
        </ul>
    );
}

export default TaskList;

/* Template AI used from the slides directly.
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