import {useState} from 'react'

const AddNote = ({onAdd}) => {
    const [noteText,setNoteText]=useState([]);
    const charLimit=200;

    const inputchangeHandler =(e)=>{
        if(charLimit-e.target.value.length >=0){
        setNoteText(e.target.value);
        }
    }
    const saveText=()=>{
        if(noteText.trim().length>0){
            onAdd(noteText);
             setNoteText('');
        }
    }
  return (
    <div className='note new'>
        <textarea onChange={inputchangeHandler}
        rows="8"
        cols="10"
        placeholder='add note'
        value={noteText}>
        </textarea>
        
        <div className='note-footer'>
            <small>{charLimit-noteText.length} remaining</small>
            <button  className='save' onClick={saveText}>Save</button>
        </div>
    </div>
  )
}

export default AddNote