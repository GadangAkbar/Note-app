import { useEffect, useState } from "react";

function FormEdit({ onEdit, notes, onCancel ,targetValue }) {
    const [title,setTitle] = useState(targetValue.title)
    const [note,setNotes] = useState(targetValue.content)

    useEffect(() => {
        const noteToEdit = notes.find((note) => note.id === targetValue.id);
        if (noteToEdit) {
            setTitle(noteToEdit.title)
            setNotes(noteToEdit.content)
        }
    }, [notes]);

    const handleEdit = () => {
        onEdit(targetValue.id, title, note);
        setTitle("")
        setNotes("")
    };

    // const cancelHandle = ()=>{
    //     titleInput.current.value = "";
    //     contentInput.current.value = "";[]
    //     onCancel()
    // }

    return (
        <div className="container" >
            <div className='flex flex-col'>
                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder='title'
                    name='title'
                    className='input'
                />

                <textarea
                    value={note}
                    onChange={e => setNotes(e.target.value)}
                    name="note"
                    id=""
                    cols="30"
                    rows="5"
                    placeholder='note'
                    className='textarea'>
                </textarea>

                <button
                    onClick={handleEdit}
                    className="bg-[#ffffff] text-black text-lg rounded-lg px-5 py-3 mt-4">
                    Edit Note
                </button>
                
                <button
                    onClick={()=> onCancel()}
                    className="bg-[#ffffff] text-black text-lg rounded-lg px-5 py-3 mt-2">
                    Cancel
                </button>
            </div>
        </div>
    );
}

export default FormEdit;
