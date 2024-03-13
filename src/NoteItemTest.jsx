function NoteItem({ id, title, content, onDelete, onEdit }) {
  return (
    // <h1>Hallo</h1>
    // <div className="flex">
    <div >
      <div className="note bg-[#597E52] m-5 rounded-[30px] w-[340px] h-auto p-4  relative">

        <button
          onClick={() => onDelete(id)}
          className='detele absolute right-7 font-bold text-2xl top-1 text-red-500'>
          x
        </button>

        <div className="text-white mt-[25px] border-[1px] p-[5px] mb-[30px] text-center"> {id} </div>
        <div className="text-lg text-white font-bold"> {title} </div>
        <p className="text-white text-sm">{content}</p>

        <button
          className=""
          onClick={() => onEdit(id)}>
          Edit
        </button>
          
      </div>
    </div>
    // </div>
  )
}
export default NoteItem;