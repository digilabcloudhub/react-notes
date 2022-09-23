import React from 'react'
import { MdSearch } from 'react-icons/md'

const SearchNote = ({handleSearchText}) => {
  
  const inputSearchHandler =(e)=>{
      handleSearchText(e.target.value);
  }
  return (
    <div className='search'>
        <MdSearch className='search-icons' size='1.3em' />
        <input type="text" name="search"  placeholder='Search....' onChange={inputSearchHandler}/>
      
    </div>
  )
}

export default SearchNote