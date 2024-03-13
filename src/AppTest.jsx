import { useRef, useState } from 'react'
import NoteItem from './NoteItem'
import { nanoid } from 'nanoid'
import FormTambah from './FormTambah'
import FormEdit from './FormEdit'

// import { nanoid } from 'nanoid'
// import{useState} from 'react';

function App() {

  // const [count, setCount] = useState(0)
  const [notes, setNotes] = useState([])
  const [currentNoteId, setCurrentNoteId] = useState(null)

  // console.log(currentNoteId)

  const addNote = (title, content) => {
    setNotes((oldNote) => {
      const noteBaru = {
        id: nanoid(),
        title: title,
        content: content
      }
      return [...oldNote, noteBaru]
    })
  }

  const deleteNote = (id) => {
    setNotes((oldnotes) => oldnotes.filter((note) => note.id !== id));
  }

  const Edit = (id) => {
    setCurrentNoteId(id)
  }

  const editNote = (id, title, content) => {
    setNotes((oldNotes) =>
      oldNotes.map((note) => (note.id === id ? { ...note, title, content } : note))
    );
    setCurrentNoteId(null);
  }

  const cancelEdit = () => {
    setCurrentNoteId(null);
  }


  //   title:"",
  //   note:"",
  //   id:Math.random() *10,
  // });

  // const handlerChanges = (e) =>{
  //   setState({...state, })
  // }

  // onClick={() => setCount((count) => count + 5)}

  return (
    <>
      <div className='mx'>
        <div className="App w-[100%] flex flex-col items-center">
          <h1 className='text-center text-4xl p-5'> Notes </h1>
          {currentNoteId ?
            <FormEdit
              onEdit={editNote}
              targetValue={notes.filter(e => e.id === currentNoteId)[0]}
              notes={notes}
              onCancel={cancelEdit} />
            : <FormTambah onAdd={addNote} onCancel={cancelEdit} />}
          {/* <div className="card-container border-t-2 border-[#5F6F52] my-10 flex flex-wrap"></div> */}
          <div className='flex flex-row flex-wrap justify-center'>
            {notes.map((note) => (

              <NoteItem
                key={note.id}
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


  //   return (
  //     <>
  //       <div>
  //         <a href="https://vitejs.dev" target="_blank">
  //           <img src={viteLogo} className="logo" alt="Vite logo" />
  //         </a>
  //         <a href="https://react.dev" target="_blank">
  //           <img src={reactLogo} className="logo react" alt="React logo" />
  //         </a>
  //       </div>
  //       <h1>Vite + React</h1>
  //       <div className="card">
  //         <button onClick={() => setCount((count) => count + 1)}>
  //           count is {count}
  //         </button>
  //         <p>
  //           Edit <code>src/App.jsx</code> and save to test HMR
  //         </p>
  //       </div>
  //       <p className="read-the-docs">
  //         Click on the Vite and React logos to learn more
  //       </p>
  //     </>
  //   )
}


export default App;
