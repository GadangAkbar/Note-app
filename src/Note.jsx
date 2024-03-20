import { useEffect, useRef, useState } from 'react'
import NoteItem from './NoteItem'
import { nanoid } from 'nanoid'
import FormTambah from './FormTambah'
import FormEdit from './FormEdit'
import axios from 'axios'
import { addNote, deleteNote, editNote, tampilkan } from './api'


function Note() {
  const [notes, setNotes] = useState([])
  const [currentNoteId, setCurrentNoteId] = useState(null)

  //function untuk menampilkan note dengan memanggil API
  const handleFetchData = async () => {
    const apiFetch = await tampilkan();
    setNotes(apiFetch.data.data.notes ?? null)
  }

  const handleAddData = async (title, content) => {
    await addNote(title, content)
    handleFetchData()
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

  useEffect(() => {
    handleFetchData()
  }, [])

  // console.log(notes)

  // useEffect(() => {
  //   tampilkanNote()
  // }, [])

  // const tampilkanNote = async () => {
  //   const notes = await axios.get('http://192.168.1.46:8000/api/v1/notes')
  //     .then((response) => {
  //       console.log(response.data)
  //       return response
  //     })
  //     .catch((error) => {
  //       return error
  //     })
  //   console.log(notes.data.data)
  //   setNotes(notes.data.data)
  // }


  // const addNote = async (title, content) => {
  //   console.log("menambahkan note")

  //   const noteBaru = {
  //     // id: nanoid(),
  //     title: title,
  //     content: content,
  //     writer: 2,
  //   };
  //   // return [...oldNote, noteBaru]
  //   await axios.post('http://192.168.1.46:8000/api/v1/notes', noteBaru)
  //     .then((response) => {
  //       console.log(response.data)
  //       tampilkanNote()
  //       setNotes((oldNote) => [...oldNote, response.data])
  //     })
  //     .catch((error) => {
  //       console.error('gagal menambahkan note', error);
  //     })
  // }

  // const deleteNote = async (id) => {
  //   // console.log(idNote)
  //   // const newNotes = notes.filter(n => n.id != idNote)
  //   // setNotes(newNotes);
  //   const deletes = await axios.delete(`http://192.168.1.46:8000/api/v1/notes/${id}`)
  //     .then((response) => {
  //       // tampilkanNote()
  //       // setNotes((oldNote) => oldNote.filter((not) note.id !==id));
  //       return response
  //     })
  //     .catch((error) => {
  //       return error
  //     })
  //   console.log(deletes)
  //   alert(deletes.data)
  //   tampilkanNote()

  // }

  // const Edit = (id) => {
  //   setCurrentNoteId(id)
  // }

  // const editNote = async (id, title, content) => {
  //   const edits = await axios.put(`http://192.168.1.46:8000/api/v1/notes/${id}`, { title, content })
  //     .then((response) => {
  //       return response
  //     })
  //     .catch((error) => {
  //       return error
  //     })
  //   alert(edits.data)
  //   tampilkanNote()
  // }

  // const cancelEdit = () => {
  //   setCurrentNoteId(null)
  // }

  // const editNote = ({ id, title, content }) => {
  //   console.log(id)
  //   setNotes((oldNote) =>
  //     oldNote.map((notes) => (notes.id === id ? { ...notes, title, content } : notes))
  //   );
  //   setCurrentNoteId(null)
  //   setIsEditKlik(false)
  // }

  // const handleCancel = () => {
  //   setCurrentNoteId(null)
  //   setIsEditKlik(notes.id)
  // }

  return (
    <>
      <div>
        <div>
          <div>
            {currentNoteId ? <FormEdit
              // title={notes.title}
              // content={notes.content}
              // currentNoteId={currentNoteId}
              onEdit={handleUpdate}
              targetValue={notes !== null ? notes.filter(e => e.id === currentNoteId)[0] : null} notes={notes} onCancel={cancelEdit} />
              : <FormTambah onAdd={handleAddData} onCancel={cancelEdit} />}
          </div>
          <div className="flex flex-wrap gap-10 mx-24">
            {notes !== null ? notes.map((note) => (
              <NoteItem
                key={note.id}
                id={note.id}
                title={note.title}
                content={note.content}
                onDelete={handleDelete}
                onEdit={Edit} />
            )): null}

            {/* {notes.map((note,idx) => (
              <NoteItem
                key={idx}
                id={note.id}
                title={note.title}
                content={note.content}
                onDelete={deleteNote}
                onEdit={Edit} />
            ))} */}
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Note
