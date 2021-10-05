import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import themeContext from "../context/themes/themeContext";

const Noteitem = (props) => {
  const contextForNotes = useContext(noteContext);
  const { deleteNote } = contextForNotes;
  const { note, updateNote } = props;

  const contextForThemes = useContext(themeContext);
  const { theme } = contextForThemes;

  // updatenote is used here by edit-icon

  const handleDelete = () => {
    deleteNote(note._id);
    props.showAlert("Note Deleted successfully!", "danger");
  };

  let cardStyle = {
    backgroundColor: "light",
    color: "black",
  };
  let cardHeader = {
    backgroundColor: "#e5e5e5",
  };

  if (theme.light) {
    cardStyle = {
      backgroundColor: "white",
      color: "black",
    };
    cardHeader = {
      backgroundColor: "#e5e5e5",
    };
  } else if (theme.dark) {
    cardStyle = {
      backgroundColor: "#2d2d2d",
      color: "whitesmoke",
    };
    cardHeader = {
      backgroundColor: "#181a1f",
    };
  } else if (theme.anotherDark) {
    cardStyle = { backgroundColor: "black", color: "#84ff00" };
    cardHeader = {
      backgroundColor: "black",
    };
  }

  return (
    <div className="col-md-3">
      <div className={`card text  mb-3 my-3`} id="notecard" style={cardStyle}>
        <div className="card-header " style={cardHeader}>
          NOTE
          <span className="d-flex justify-content-end">
            <i
              className="fas fa-trash-alt mx-2 "
              onClick={() => handleDelete()}
            ></i>
            <i
              className="far fa-edit mx-2"
              onClick={() => updateNote(note)}
            ></i>
          </span>
        </div>
        <div className="card-body">
          <div className="d-flex">
            <h5 className="card-title">{note.title}</h5>
          </div>
          <p className="card-text">{note.description} </p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
