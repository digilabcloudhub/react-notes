import './App.css';
import {nanoid} from 'nanoid';
import AddNote from './components/AddNote';
import Note from './components/Note';
import {useEffect, useState,useMemo} from 'react';
import SearchNote from './components/SearchNote';
import Header from './components/Header';
const App =()=>{
const initialData=[
  {
    id:nanoid(),
    text:'This is my first Note',
    date:'15/04/2022'
  },
  {
    id:nanoid(),
    text:'This is my second Note',
    date:'15/04/2022'
  },
  {
    id:nanoid(),
    text:'This is my third Note',
    date:'15/04/2022'
  },
  {
    id:nanoid(),
    text:'This is my fourth Note',
    date:'15/04/2022'
  }
]

const [notes,setNotes]=useState(initialData);
const [searchText,setSearchText]=useState('');
const [darkMode,setDarkmode]=useState(false);

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
    <div  className={` ${darkMode ? 'dark-mode' : ''}`}>
    <div className='container '>
      <Header toggle={setDarkmode}/>
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
    </div>
    </div>
  )
}

export default App;
