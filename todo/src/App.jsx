import React from 'react'
import TaskList from './Component/Tasklist'
import AddTask from './Component/AddTask'

function App() {
    return(
      <div className='App'>
        <h1>Todo App</h1>
        <AddTask/>
        <TaskList/>
      </div>
    )
}



export default App
