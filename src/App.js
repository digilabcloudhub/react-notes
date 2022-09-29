import './App.css';
import {nanoid} from 'nanoid';
import {useState} from 'react';
import NotesList from './components/NotesList';
import Header from './components/Header';


const App =()=>{
  const [darkMode,setDarkmode]=useState(false);
  
  
 
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
  
  return(
    <div  className={` ${darkMode ? 'dark-mode' : ''}`}>
    <div className='container '>
    <Header toggle={setDarkmode}/>
    <NotesList initialData={initialData}/>
    
    </div>
    </div>
  )
}

export default App;
