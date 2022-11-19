import {MdDeleteForever} from 'react-icons/md'

function Note({id,text,date,handleDeleteNote}) {
  return (
    <div className='bg-[#fef68a] rounded-xl p-4 min-h-[170px] flex flex-col justify-between whitespace-pre-wrap'>
        <span>{text}</span>
        {/* Footer */}
        <div className='flex items-center justify-between'>
            {/* Date */}
            <small>{date}</small>
            <MdDeleteForever size={25} onClick={()=>handleDeleteNote(id)} className='hover:text-gray-400 ease duration-300'/>
        </div>
    </div>
  )
}

export default Note