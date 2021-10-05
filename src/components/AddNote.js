import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import themeContext from "../context/themes/themeContext";

const AddNote = (props) => {
  const contextForNotes = useContext(noteContext);
  const { addNote } = contextForNotes;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const contextForThemes = useContext(themeContext);
  const { theme } = contextForThemes;

  //adding a new note
  function handleClick(e) {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Note added successfully!", "primary");
  }

  const onChange = (e) => {
    //setting the value of note.title/note.description to the input value
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  let formStyle = {
    backgroundColor: "white",
    color: "black",
  };
  let inputStyle = {
    color: "white",
  };
  let buttonStyle = {
    backgroundColor: "orange",
    color: "black",
    fontWeight: 500,
  };

  if (theme.light) {
    formStyle = {
      backgroundColor: "white",
      color: "black",
    };
    inputStyle = {
      color: "black",
    };
    buttonStyle = {
      backgroundColor: "orange",
      color: "black",
      fontWeight: 500,
    };
  } else if (theme.dark) {
    formStyle = {
      backgroundColor: "#2d2d2d",
      color: "whitesmoke",
    };
    inputStyle = {
      color: "whitesmoke",
    };
    buttonStyle = {
      backgroundColor: "#16a938",
      color: "black",
      fontWeight: 500,
    };
  } else if (theme.anotherDark) {
    formStyle = {
      backgroundColor: "black",
      color: "#84ff00",
    };
    inputStyle = {
      color: "#84ff00",
    };
    buttonStyle = {
      backgroundColor: "#84ff00",
      color: "black",
      fontWeight: 500,
    };
  }

  return (
    <>
      <div className="container my-5" style={formStyle}>
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
              style={inputStyle}
              name="title"
              value={note.title}
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
              id="description"
              name="description"
              value={note.description}
              style={inputStyle}
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
              id="tag"
              name="tag"
              style={inputStyle}
              value={note.tag}
              onChange={onChange}
            />
          </div>

          <button
            disabled={note.title.length < 5 || note.description.length < 5}
            type="submit"
            className="btn "
            onClick={handleClick}
            style={buttonStyle}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNote;
