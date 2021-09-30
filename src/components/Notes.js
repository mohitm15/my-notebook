import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import { useHistory } from "react-router-dom";

function Notes(props) {
  const contextForNotes = useContext(noteContext);
  const { notes, getNotes, editNote } = contextForNotes;
  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({id:"", etitle: "", edescription: "", etag: "" });
  const history = useHistory();

  useEffect(() => {
    if(localStorage.getItem('token')) {
      getNotes();
    }
    else {
      history.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //it sets the already present value to the modal's input field
  const updateNote = (currentNote) => {
    ref.current.click();  //it clicks the refered element i.e. button here
    setNote({
      id:currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleClick = (e) => {
    refClose.current.click();
    //console.log("Updating the note...", note);
    editNote(note.id,note.etitle,note.edescription,note.etag);
    props.showAlert("Notes updated successfully!","success");
    e.preventDefault();
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
    //modal ke input mei value typed ho sake,jaise jaise value change ho vese-vese note me set ho jaye
  };

  return (
    <>
      <AddNote showAlert={props.showAlert} />
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"  //d-none = hiding the element
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Edit the note
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
                disabled={note.etitle.length<5 || note.edescription.length <5}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5">
        <h2>Your Notes</h2>
        <div className="row my-3">
          {notes.map((item, key) => {
            return <Noteitem key={key} updateNote={updateNote} note={item} showAlert={props.showAlert} />; //note value is sent from props to noteitem
          })}
        </div>
      </div>
    </>
  );
}

export default Notes;
