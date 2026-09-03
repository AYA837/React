import React from 'react'

//props should never change by child component 

const Search = ({searchTerm , setsearchTerm}) => {
  return (
    <div className="search ">
    
      <input type="text" placeholder='+20 Horror Arabic Novels' value={searchTerm} onChange={(e)=>setsearchTerm(e.target.value)} className='bg-transparent'/> 
    </div>
  ) 
}

export default Search