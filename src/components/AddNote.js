import React, {useContext, useState} from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {

    const contextForNotes = useContext(noteContext);
    const { addNote } = contextForNotes;
    const [note, setNote] = useState({title:"", description:"",tag:"default"});

    //adding a new note
    function handleClick(e) {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);

    }

    const onChange =(e)=> {
        //setting the value of note.title/note.description to the input value
        setNote({...note, [e.target.name]:e.target.value})
    }

  return (
    <>
      <div className="container my-5">
        <h2>Add a note</h2>

        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
                Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
                Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={handleClick}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNote;
