import { useEffect, useState } from "react";
import {nanoid} from 'nanoid'
import NotesList from "./Components/NotesList";
import Searchbar from "./Components/Searchbar";
import Header from "./Components/Header";

function App() {
  // States are Good to use when the data will be changed.
  const [notes,setNotes] = useState([{
    id:nanoid(),
    text:'Try It Out!',
    date:'01/01/2001'
  }]);
  const [searchText ,setSearchText] = useState('')
  const [darkMode,setDarkMode] = useState(false)
  
  useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
    console.log(savedNotes)
    if (savedNotes){
      setNotes(savedNotes)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('react-notes-app-data', 
    JSON.stringify(notes))
  },[notes])

 function addNote(text){
     const date = new Date()
     const newNote = {
      id:nanoid(),
      text: text,
      date: date.toLocaleDateString()
     }
    //Using the Spread Operator to Add new notes to the already existing notes in the state.
     const newNotes = [...notes,newNote]
     setNotes(newNotes)
  }

  function deleteNote(id){
    //Creates A New Array, Containing all the notes, except the note with the given id.
    const newNotes = notes.filter((note)=> note.id !== id)
    setNotes(newNotes)
  }

  return (
    // Context.Provider allows us to pass data to every component wrapped around it.
      <main className={darkMode?'max-w-[960px] mx-auto px-[15px] h-[100vh] bg-[#0a0908]':"max-w-[960px] mx-auto px-[15px] h-[100vh]"}>
        <Header handleToggleDarkMode={setDarkMode}/>
        <Searchbar handleSearchNote={setSearchText}/>
        {/* Filters out the notes with the searchtext included. */}
        <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText)
        )} 
        handleAddNote={addNote} 
        handleDeleteNote={deleteNote}/>
      </main>
  );
}

export default App;
