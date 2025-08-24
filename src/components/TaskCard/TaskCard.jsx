import './TaskCard.css'
import Tag from "../TagButton/Tag"
import DeleteIcon from '../../assets/deleteIcon.png'

function TaskCard() {
  return (
   <article className='task_card'>
            <p className='task_text'>This is sample Test</p>
            <div className="task_card_bottom_line">
            <div className="task_card_tags">
                <Tag tagName="DEV"/>
                <Tag tagName="QA"/>
            </div>
              <div className="task_delete">
                  <img src={DeleteIcon} alt="" className='delete_icon' />
              </div>
            </div>
   </article>
  )
}

export default TaskCard
