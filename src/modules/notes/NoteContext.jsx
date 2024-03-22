import { createContext, useContext, useState ,useEffect} from "react"
import { addNote, editNote, deleteNote, tampilkan } from "../config/api";

//default state
const initNoteContext = {
    notes: [],
    currentNoteId: null,
    handleFetchData: () => {},
    handleAddData: () => {},
    handleUpdate: () => {},
    handleDelete: () => {},
    Edit: () => {},
    cancelEdit: () => { },
}

//create context
const NoteContext = createContext(initNoteContext)

//custom hooks
const useNotes = () => {
    return useContext(NoteContext)
}

//create provider
const NoteProvider = ({ children }) => {
    //state
    const [notes, setNotes] = useState([])
    const [currentNoteId, setCurrentNoteId] = useState(null)

    useEffect(() => {
        handleFetchData()
    }, [])

    //function
    const handleFetchData = async () => {
        const apiFetch = await tampilkan();
        setNotes(apiFetch.data.data.notes ?? null)
    }

    const handleAddData = async (title, content) => {
        await addNote(title, content);
        handleFetchData();
    }

    const handleUpdate = async (id, title, content, writer) => {
        await editNote(id, title, content, writer)
        handleFetchData()
    }

    const handleDelete = async (id) => {
        await deleteNote(id);
        handleFetchData()
    }

    const Edit = (id) => {
        setCurrentNoteId(id)
    }

    const cancelEdit = () => {
        setCurrentNoteId(null);
    }

    return(
        <NoteContext.Provider value={{ notes, currentNoteId, handleAddData, handleFetchData, handleDelete, handleUpdate, Edit, cancelEdit }}>
            {children}
        </NoteContext.Provider >
    )
}

//export provider & hooks
export { NoteProvider, useNotes }