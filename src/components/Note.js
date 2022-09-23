
import { MdDeleteForever } from "react-icons/md";


const Note = (props) => {
  const deleteNote =()=>{
    props.onDelete();
  }
  return (
    <div className="note">
        <span>{props.text}</span>
        <div className="note-footer">
            <small>{props.date}</small>
            <MdDeleteForever className="delete-icon" size="1.3em" onClick={deleteNote} />

        </div>
    </div>
  )
}

export default Note