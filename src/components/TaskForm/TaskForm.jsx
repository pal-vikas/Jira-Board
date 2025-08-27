import "./TaskForm.css"
import Tag from '../TagButton/Tag'
import { useState } from "react"

function TaskForm({setTasks}) {

    const [taskData, setTaskData] =useState({
            task : '',
            status: 'Ready for Development',
            tags: []
    });

    const checkTag =(tag)=>{
       return taskData.tags.some(item=> item === tag);
    }
    const handleChange = (e)=>{
           const {name, value} = e.target;
           setTaskData((prev)=>{
                return {...prev,[name] :value}
           })
        
    }

    const handleSubmit = (e)=>{
            e.preventDefault();
            setTasks((prev)=>{
                return [...prev, taskData];
            });

            setTaskData({
                task: "",
                status: "",
                tags:[]
    });
    }

    const selectedTag =(tag)=>{

        setTaskData((prev)=>{
            const isSelected = prev.tags.includes(tag);
            const tags= isSelected ?  prev.tags.filter((item)=> item !== tag) : [...prev.tags, tag];

            return {...prev, tags};
        })
    }
    
  return (
    <div className='app_hedaer'>
                <form action="" className='form_data' onSubmit={handleSubmit}>
                    <input type="text" name="task" value={taskData.task} placeholder='Enter task details' onChange={handleChange} required />
                    <div className="jira_statusButton">
                        <div className="status_part1">
                            <Tag tagName='DEV' selectedTag={selectedTag} selected={checkTag("DEV")} />
                            <Tag tagName='QA' selectedTag={selectedTag} selected={checkTag("QA")} />
                            <Tag  tagName='Product Owner' selectedTag={selectedTag} selected={checkTag("Product Owner")}/>
                        </div>
                        <div className="status_part1">
                            <select  name="status"  className="task_status tag_button" onChange={handleChange}>
                                <option disabled selected hidden>Select Status</option>
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
