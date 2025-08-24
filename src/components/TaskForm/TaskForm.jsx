import "./TaskForm.css"
import Tag from '../TagButton/Tag'

function TaskForm() {
  return (
    <div className='app_hedaer'>
                <form action="" className='form_data'>
                    <input type="text" placeholder='Enter task details' />
                    <div className="jira_statusButton">
                        <div className="status_part1">
                            <Tag tagName='DEV'/>
                            <Tag tagName='QA'/>
                            <Tag tagName='Product Owner'/>
                        </div>
                        <div className="status_part1">
                            <select name="" className="task_status tag_button">
                                <option value="Read for Development">Read for Development</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Ready for test">Ready for test</option>
                                <option value="Closed">Closed</option>
                            </select>
                            <button className="tag_button add_button">+Add</button>
                        </div>
                    </div>
                </form>
    </div>
  )
}

export default TaskForm
