import { useState } from "react"

function AddNotes({handleAddNote}) {
    const [noteText,setNoteText] = useState('')
    const characterCount = 200
    const handleChange = (event)=>{
        /*Sets the state to the current text in the textarea. Checks if the no. of characters is in the range of 0-200, and then allows
        typing.*/
        if(characterCount-event.target.value.length >= 0){
            setNoteText(event.target.value)
        } else{
            return
        }
    }
    const saveNote = () =>{
        // Checks if there are still whitespaces after trimming
        if(noteText.trim().length>0){
            handleAddNote(noteText)
            setNoteText('')
        }
    }
  return (
    <main className='bg-[#67d7cc] rounded-xl p-4 min-h-[170px] flex flex-col justify-between'>
        <textarea cols="10" rows="8" placeholder="Add A Note:" className=" border-none resize-none bg-[#67d7cc] focus:outline-none" onChange={handleChange} value={noteText}></textarea>
        <div className="flex items-center justify-between">
            <small>{`${characterCount - noteText.length} Remaining`}</small>
            <button className="bg-gray-200 border-none px-5 py-2 rounded-md hover:bg-gray-100 cursor-pointer" onClick={saveNote}>Save</button>
        </div>
    </main>
  )
}

export default AddNotes