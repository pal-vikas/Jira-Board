import './Tag.css'
import { tagKeyMap, tagStyle } from '../../constant/const';

function Tag(props) {
    const {tagName, selectedTag, selected} = props;

        const key =tagKeyMap[tagName]

  return (
    <>
    <button style={selected ? tagStyle[key]: {}} type='button' className="tag_button" onClick={()=>{selectedTag(tagName)}}>{tagName}</button>
    </>
  )
}

export default Tag
