import React from 'react'

//props should never change by child component 

const Search = ({searchTerm , setsearchTerm}) => {
  return (
    <div className="search">
      <img src="search.svg" alt="search-icon" />
      <input type="text" placeholder='+20 Horror Arabic Novels' value={searchTerm} />
    </div>
  ) 
}

export default Search