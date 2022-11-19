import { MdSearch } from "react-icons/md"

function Searchbar({handleSearchNote}) {
  return (
    <div className="border flex items-center bg-[rgb(233,233,233)] rounded-xl p-1 my-6 gap-2">
        <MdSearch size={30}/>
        <input type="search" placeholder="Search For Your Notes." className="border-none focus:outline-none bg-[rgb(233,233,233)] w-full" 
        onChange={(event)=>handleSearchNote(event.target.value)}/>
    </div>
  )
}

export default Searchbar