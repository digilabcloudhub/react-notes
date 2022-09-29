
import {useEffect, useState,useMemo} from 'react';
import {nanoid} from 'nanoid';
import SearchNote from './SearchNote'
import Note from './Note'
import AddNote from './AddNote';

const NotesList = ({initialData}) => {
  const [notes,setNotes]=useState(initialData);
  const [searchText,setSearchText]=useState('');
  
    useEffect(()=>{
    const savedNotes=JSON.parse(localStorage.getItem('react-notes-app-data'));
    if(savedNotes){
      
    setNotes(savedNotes);}
  },[]); 
   
  
  
   useEffect (()=>{
    
      localStorage.setItem('react-notes-app-data',JSON.stringify(notes));
   
  },[notes]);
  
  
  const addNote =(text)=>{
    const date=new Date();
    const data=text;
    const newNote=
      {
        id:nanoid(),
        text:data,
        date:date.toLocaleDateString()
      }
       setNotes(prevNotes => [...prevNotes,newNote]) ;
       
    }
  
    const deleteNote =(id)=>{
          const deleteNotes=notes.filter((item)=>item.id!==id);
          setNotes(deleteNotes);
    }
  
  
  
    const filteredNotes = useMemo(() => {
    if (!searchText) {
      return notes;
    }
    return notes.filter(note=> note.text.toLowerCase().includes(searchText));
    
    }, [searchText, notes]);
  
    return(
     
        <>
        <SearchNote handleSearchText={setSearchText}/>
         
        <div className="notes-list">
         
           {
          filteredNotes.map((note)=>
          <Note key={note.id} id={note.id} text={note.text} date={note.date} 
          onDelete={()=>deleteNote(note.id)}/>
          
          )
          
        } 
        
        <AddNote onAdd={addNote}/>
      </div>
     
        
        
        </>
    )
  
}

export default NotesList

