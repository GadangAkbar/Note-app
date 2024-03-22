import NoteItem from './NoteItem';
import FormTambah from './FormTambah';
import FormEdit from './FormEdit';
import { useNotes } from './NoteContext';


function Note() {

  const {notes,currentNoteId,Edit,handleDelete,handleUpdate,cancelEdit} = useNotes();

  return (
    <>
      <div>
        <div>
          <div>
            {currentNoteId ? <FormEdit
              onEdit={handleUpdate}
              targetValue={notes !== null ? notes.filter(e => e.id === currentNoteId)[0] : null} notes={notes} onCancel={cancelEdit} />
              : <FormTambah/>}
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
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Note
