import React, { useState } from 'react'
import Search from './Components/Search'
import './index.css'


const App = () => {
  //we will keep track of the novels , using a state in the APP file

  const [searchTerm, setsearchTerm] = useState('');
  return (
    <div className='pattern' >
      <div className='wrapper'>
        <header>
          <img src="./Hero-img.png" alt="hero section Main picture" />
           <h1 >Horror <span className='text-gradient'>Novels </span> You'll Enjoy getting Rid Of </h1>
        </header>
      </div>

      <Search  searchTerm={searchTerm} setsearchTerm = {setsearchTerm}  />
    </div>
  )
}

export default App