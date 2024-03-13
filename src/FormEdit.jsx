import { useEffect, useRef } from "react"

function FormEdit({ onEdit, notes, targetValue, onCancel }) {
    // const titleInput = useRef()
    // const contentInput = useRef()
    const [title, setTitle] = useState(targetValue.title)
    const [note, setNotes] = useState(targetValue.content)

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
        <div>
            <div className="flex justify-center">
                <div className="text-center w-96">
                    <h1 className="text-5xl text-white font-bold font-sans">Edit Notes</h1>
                    <div className="form-section">
                        <form action="" className="flex flex-col gap-4 mt-10 max-w-xl">
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
                                id="content"
                                cols="30"
                                rows="10"
                                placeholder='your notes here...'
                                className='p-8 rounded-xl'
                                ref={contentInput}>
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