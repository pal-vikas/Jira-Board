import './App.css'
import TaskColumn from './components/TaskColumn/task-column'
import TaskForm from './components/TaskForm/TaskForm'
import ClosedIcon from './assets/right-check-finale.png'

function App() {

  return (
   <div className="app">

            <h1 style={{textAlign : 'center',padding:'50px'}}>Jira Board</h1>
            <TaskForm/>
            <main className='app_main'>
                  <TaskColumn title="Ready for Development" />
                  <TaskColumn title="In Progress"  />
                  <TaskColumn title="Ready for test"  />
                  <TaskColumn title="Closed" icon={ClosedIcon}   />
            </main>
   </div>
  )
}

export default App
