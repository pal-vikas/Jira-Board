import './task-column.css'
import TaskCard from '../TaskCard/TaskCard'

function TaskColumn(props) {

  return (
    <div>
        <section className='task_column'>
            <h2 className='task_column_heading'>
                <img src={props.icon} className='task_column_icon' alt="" />
                {props.title}</h2>
                <TaskCard/>
        </section>
    </div>
  )
}

export default TaskColumn
