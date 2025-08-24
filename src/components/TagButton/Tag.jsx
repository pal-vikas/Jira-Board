import './Tag.css'

function Tag(props) {
    const {tagName} = props
  return (
    <>
    <button className="tag_button">{tagName}</button>
    </>
  )
}

export default Tag
