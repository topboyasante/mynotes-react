import AddNotes from './AddNotes'
import Note from './Note'
import NotesTuts from './NotesTuts'

function NotesList({notes,handleAddNote,handleDeleteNote}) {
  return (
    <main className='note-container grid gap-4 p-5'>
        <NotesTuts/>
        {notes.map((note)=>{
            return(
                <Note key={note.id} id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>
            )
        })}
        <AddNotes handleAddNote={handleAddNote}/>
    </main>
  )
}

export default NotesList