import { useEffect, useRef, useState } from 'react'
import NoteItem from './NoteItem'
import { nanoid } from 'nanoid'
import FormTambah from './FormTambah'
import FormEdit from './FormEdit'
import axios from 'axios'


function Note() {
  const [notes, setNotes] = useState([])
  const [currentNoteId, setCurrentNoteId] = useState(null)
  const [isEditKlik, setIsEditKlik] = useState(false)

  useEffect(() => {
    tampilkanNote()
  }, [])

  const tampilkanNote = async () => {
    await axios.get('http://192.168.26.21:3000/notes')
      .then((response) => {
        console.log(response.data)
        setNotes(response.data)
      })
  }


  const addNote = async (title, content) => {
    console.log("menambahkan note")

    const noteBaru = {
      // id: nanoid(),
      title: title,
      content: content,
      writer: 2,
    };
    // return [...oldNote, noteBaru]
    await axios.post('http://192.168.26.21:3000/notes', noteBaru)
      .then((response) => {
        console.log(response.data)
        tampilkanNote()
        setNotes((oldNote) => [...oldNote, response.data])
      })
      .catch((error) => {
        console.log('gagal menambahkan note', error);
      })
  }

  const deleteNote = async (id) => {
    // console.log(idNote)
    // const newNotes = notes.filter(n => n.id != idNote)
    // setNotes(newNotes);

    const deletes = await axios.delete(`http://192.168.26.21:3000/notes/${id}`)
      .then((response) => {
        // tampilkanNote()
        // setNotes((oldNote) => oldNote.filter((not) note.id !==id));
        return response
      })
      .catch((error) => {
        return error
      })
    alert(deletes.data)
    tampilkanNote()

  }

  const Edit = (id) => {
    setCurrentNoteId(id)
  }

  const editNote = (id, title, content) => {
    setNotes((oldNotes) =>
      oldNotes.map((note) => (note.id === id ? { ...note, title, content } : note))
    );
    setCurrentNoteId(null)
  }

  const cancelEdit = () => {
    setCurrentNoteId(null)
  }

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
              onEdit={editNote}
              targetValue={notes.filter(e => e.id === currentNoteId)[0]}
              notes={notes}
              onCancel={cancelEdit} />
              : <FormTambah onAdd={addNote} onCancel={cancelEdit} />
            }
          </div>
          <div className="flex flex-wrap gap-10 mx-24">
            {notes.map((note, idx) => (
              <NoteItem
                key={idx}
                id={note.id}
                title={note.title}
                content={note.content}
                onDelete={deleteNote}
                onEdit={Edit} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Note
