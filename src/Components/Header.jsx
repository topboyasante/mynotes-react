import React from 'react'

function Header({handleToggleDarkMode}) {
  return (
   <main className='p-3 flex justify-between items-center'>
        <h1 className='text-2xl font-medium text-[#e63946]'>MyNotes</h1>
        <button className='shadow-md py-2 px-1 bg-[#e63946] text-white rounded-md' onClick={()=>handleToggleDarkMode((prevDarkMode)=>
            !prevDarkMode)}>Toggle Mode</button>
   </main>
  )
}

export default Header