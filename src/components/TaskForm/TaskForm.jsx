import "./TaskForm.css"
import Tag from '../TagButton/Tag'
import { useState } from "react"

function TaskForm() {

    const [input , setInput] = useState("");
    const [status, setStatus] = useState("");
    function handleInput(e)
    {
        console.log(e.target.value)
    }
    function handleStatus(e)
    {
        console.log(e.target.value)
    }

  return (
    <div className='app_hedaer'>
                <form action="" className='form_data'>
                    <input type="text" placeholder='Enter task details' onChange={handleInput} />
                    <div className="jira_statusButton">
                        <div className="status_part1">
                            <Tag tagName='DEV'/>
                            <Tag tagName='QA'/>
                            <Tag tagName='Product Owner'/>
                        </div>
                        <div className="status_part1">
                            <select name="" className="task_status tag_button" onChange={handleStatus}>
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
