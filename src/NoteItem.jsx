function NoteItem({ id, title, content, onDelete, onEdit }) {

  return (

    <div className="container-notes-element mt-16">
      <div className="notes-element max-w-sm bg-sky-950 p-10 rounded-xl" >
        <div className="heading-notes-element flex justify-between mb-5">
          <h1 className="text-2xl font-bold cursor-pointer text-white">{title}</h1>
          <button type='button' className="font-extrabold text-3xl font-mono text-red-500" onClick={() => onDelete(id)}>x</button>
        </div>
        <p className="text-white">{content}</p>
        <button type="submit" className="bg-orange-600 rounded px-5 py-1 mt-5 text-white" onClick={onEdit} >Edit</button>
      </div>
    </div>

  )
}
export default NoteItem