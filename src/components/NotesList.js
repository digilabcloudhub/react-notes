
import Note from "./Note";

const NotesList = ({note,addNote}) => {
  return (
    
    <div className="notes-list">
        {
            note.map((notes)=><Note  id={notes.id} text={notes.text} date={notes.date}/>)
        }
       
    </div>
  )
}

export default NotesList