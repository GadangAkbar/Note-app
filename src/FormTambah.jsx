import { useState, useRef } from "react"
import { useNotes } from "./context/Note";

function FormTambah({ onAdd }) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const { handleAddData } = useNotes()
    const { notes } = useNotes()

    const handleSubmit = () => {
        handleAddData(title, content)
        console.log("tambah notes")
        console.log(notes)
        setTitle("")
        setContent("")
    }

    return (
        <div className="flex justify-center">
            <div className="text-center w-96">
                <h1 className="text-5xl text-white font-bold font-sans">Notes</h1>
                <div className="form-section">
                    <form action="" className="flex flex-col gap-4 mt-10 max-w-xl">
                        <input
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            type="text"
                            name='title'
                            placeholder='add title here...'
                            className='p-8 h-16 rounded-xl' />
                        <textarea
                            value={content}
                            onChange={e => setContent(e.target.value)}
                            name="content"
                            id="content"
                            cols="30"
                            rows="10"
                            placeholder='your notes here...'
                            className='p-8 rounded-xl'
                        ></textarea>
                    </form>
                    <button onClick={() => handleSubmit()} type='submit' className='bg-orange-600 mt-8 py-3 px-10 text-white font-semibold rounded-xl'  >Add Note</button>
                </div>
            </div>
        </div>
    )

}

export default FormTambah