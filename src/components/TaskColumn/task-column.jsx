import './task-column.css'
import TaskCard from '../TaskCard/TaskCard'

function TaskColumn({title, tasks, status, icon, handleDelete, index}) {

  return (
    <div>
        <section className='task_column'>
            <h2 className='task_column_heading'>
                <img src={icon} className='task_column_icon' alt="" />
                {title}</h2>
                {
                  tasks.map((task, index)=>task.status === status && <TaskCard key={index} title={task.task} tags={task.tags} handleDelete={handleDelete} index={index}/>)
                }
               
        </section>
    </div>
  )
}

export default TaskColumn
