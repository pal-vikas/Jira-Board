import './App.css'
import TaskColumn from './components/TaskColumn/task-column'
import TaskForm from './components/TaskForm/TaskForm'
import ClosedIcon from './assets/right-check-finale.png'
import { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState([]);
  // console.log(tasks);

  const handleDelete =(taskIndex)=>{
     const newTask= tasks.filter((tasks, index)=> index !== taskIndex);
     setTasks(newTask);
  }

  return (
   <div className="app">

            <h1 style={{textAlign : 'center',padding:'50px'}}>Jira Board</h1>
            <TaskForm setTasks={setTasks}/>
            <main className='app_main'>
                  <TaskColumn title="Ready for Development" handleDelete={handleDelete} tasks={tasks} status="Ready for Development"/>
                  <TaskColumn title="In Progress" handleDelete={handleDelete} tasks={tasks} status="In Progress"/>
                  <TaskColumn title="Ready for test" handleDelete={handleDelete}  tasks={tasks} status="Ready for test"/>
                  <TaskColumn title="Closed" handleDelete={handleDelete} icon={ClosedIcon} tasks={tasks} status="Closed"/>
            </main>
   </div>
  )
}

export default App
