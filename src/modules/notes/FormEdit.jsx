import { useEffect, useState, useRef } from "react"

function FormEdit({ onEdit, notes, targetValue, onCancel }) {
    const [title, setTitle] = useState(targetValue !== null ? targetValue.title : null)
    const [note, setNotes] = useState(targetValue !== null ? targetValue.content : null)
    const [writer, setWriter] = useState(targetValue !== null ? targetValue.writer : null);



    useEffect(() => {
        const noteToEdit = notes !== null ? notes.find((note) => note.id === targetValue.id) : null;
        if (noteToEdit !== null) {
            setTitle(noteToEdit.title)
            setNotes(noteToEdit.content)
            setWriter(noteToEdit.writer)
        } else {
            setTitle("")
            setNotes("")
            setWriter("")
            onCancel()
        }
    }, [targetValue]);

    const handleEdit = () => {
        const konfirm = confirm("Apakah Anda Yakin?")
        if (konfirm) {
            onEdit(targetValue.id, title, note, writer);
            setTitle("")
            setNotes("")
        }
    };

    return (
        <div>
            <div className="flex justify-center">
                <div className="text-center w-96">
                    <h1 className="text-5xl text-white font-bold font-sans">Edit Notes</h1>
                    <div className="form-section">
                        <form action="" className="flex flex-col gap-4 mt-10 max-w-xl">
                            <input
                                writer={writer}
                                type="hidden"
                                className='input'
                            />
                            <input
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                type="text"
                                name='title'
                                placeholder='add title here...'
                                className='p-8 h-16 rounded-xl'
                            />
                            <textarea
                                value={note}
                                onChange={e => setNotes(e.target.value)}
                                name="content"
                                id=""
                                cols="30"
                                rows="10"
                                placeholder='your notes here...'
                                className='p-8 rounded-xl'>
                            </textarea>
                        </form>
                        <button type='submit' className='bg-orange-600 mt-8 py-3 px-10 text-white font-semibold rounded-xl mx-3' onClick={handleEdit}>Save</button>
                        <button type="submit" className='bg-orange-600 mt-8 py-3 px-10 text-white font-semibold rounded-xl mx-3' onClick={() => onCancel()}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormEdit