import React from 'react'

const Header = ({toggle}) => {

const toggleHandler =()=>{
   toggle((prevDarkMode)=>!prevDarkMode);
} 
  return (
    <div className='header'>
        <h1>Notes</h1>
        <button className='toggle' onClick={toggleHandler}>Toggle Button</button>
    </div>
  )
}

export default Header