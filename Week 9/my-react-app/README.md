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

For some reason, though, it won't open so I can't run it to see if it works.

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
 