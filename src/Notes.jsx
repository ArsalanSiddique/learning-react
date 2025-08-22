import { useRef, useState, useActionState } from "react";
import { Card, Button } from 'react-bootstrap';
import DissmissableAlert from './DissmissableAlert';

function Notes() {

    const noteRef = useRef(null);

    const [nextId, setNextId] = useState(1);
    const [notes, setNotes] = useState([]);
    const [updatingNote, setUpdatingNote] = useState(null);
    const [alert, setAlert] = useState({ show: false, variant: '', message: '' });

    function showAlert(variant, message) {
        setAlert({ show: true, variant, message });

        setTimeout((prev) => {
            setAlert({ ...prev, show: false })
        }, 3000)
    }

    function handleNotesForm(previouseData, formData) {

        let noteValue = formData.get('note');

        if (!noteValue.trim()) {
            showAlert('danger', 'Note field is required.');
            return;
        };


        if (updatingNote) {
            setNotes(notes.map(n => {
                if (n.id === updatingNote.id) {
                    return { ...n, note: noteValue }
                }

                return n;
            }));

            showAlert('success', 'Note updated successfully.');
            setUpdatingNote(null);
            return;
        }

        setNotes([...notes, {
            'id': nextId,
            'note': noteValue,
            'date': new Date().toDateString()
        }])

        setNextId(nextId + 1)

        showAlert('success', 'Note added successfully.');
        return;
    }

    function updateNote(note) {
        setUpdatingNote(note);
        noteRef.current.value = note.note;
    }

    function deleteNote(noteId) {
        setNotes(notes.filter((note) => note.id !== noteId));
        setUpdatingNote(null);
        noteRef.current.value = '';

        showAlert('success', 'Note deleted successfully.');
    }

    const [data, action, pending] = useActionState(handleNotesForm, undefined);

    return (
        <>
            <h4 className="mt-5 mb-3"> Notes: </h4>
            <hr />

            <form className="d-flex mb-3" action={action}>
                <input type="text" ref={noteRef} name="note" className="form-control" placeholder="Write a note..." />
                <button disabled={pending} className="btn btn-primary ms-2 btn-sm">{pending ? 'Adding' : updatingNote ? 'Update' : 'Add'}</button>
            </form>

            {alert.show && (
                <DissmissableAlert variant={alert.variant} message={alert.message} onClose={() => setAlert({ ...alert, show: false })} />
            )}

            {
                notes.map((note) => (
                    <Card key={note.id} className="mb-3 shadow-sm">
                        <Card.Body>
                            <div className="d-flex justify-content-between">
                                <small className="text-muted">{note.date}</small>
                            </div>
                            <Card.Text className="mt-2">
                                {note.note}
                            </Card.Text>

                            <div className="text-end">
                                <Button variant="info" size="sm" className="me-2" onClick={() => updateNote(note)}>Edit</Button>
                                <Button variant="danger" size="sm" onClick={() => deleteNote(note.id)}>Delete</Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))
            }


            {
                notes.length === 0 && (
                    <p className="text-center text-muted mt-3">No more notes.</p>
                )
            }

        </>
    );

}

export default Notes;