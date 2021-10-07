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
    border: "1px solid black",
  };
  let cardHeader = {
    backgroundColor: "#e5e5e5",
  };
  let tagBgColor = {
    backgroundColor: "#b2dbf7",
    color: "#39739d",
    fontWeight:'500',
  };

  if (theme.light) {
    cardStyle = {
      backgroundColor: "white",
      color: "black",
      border: "1px solid black",
    };
    cardHeader = {
      backgroundColor: "#e5e5e5",
    };
    tagBgColor = {
      backgroundColor: "#b2dbf7",
      color: "#39739d",
      fontWeight:'500',
    };

  } else if (theme.dark) {
    cardStyle = {
      backgroundColor: "#2d2d2d",
      color: "whitesmoke",
      border: "1px solid whitesmoke",
    };
    cardHeader = {
      backgroundColor: "#181a1f",
    };
    tagBgColor = {
      backgroundColor: "#435460",
      color: "#cde1ee",
      borderColor: "#00000000",
      fontWeight:'500', 
    };

  } else if (theme.anotherDark) {
    cardStyle = {
      backgroundColor: "black",
      color: "#00c548",
      border: "1px solid #00c548",
    };
    cardHeader = {
      backgroundColor: "black",
    };
    tagBgColor = {
      backgroundColor: "#3d3d3d",
      color:'#00c548',
      fontWeight:'500',
    };
  } else if (theme.lushGreen) {
    cardStyle = {
      backgroundColor: "#045b62",
      color: "white",
      border: "1px solid white",
    };
    cardHeader = {
      backgroundColor: "#0d393d",
    };
    tagBgColor = {
      backgroundColor: "#42959e",
      color: "#cde1ee",
      borderColor: "#00000000",
      fontWeight:'500', 
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
        <hr />

        <div className="pb-3 mx-2">
          {note.tag.split(';').map((item,key)=>{
            return (
              <span key={key} className="badge  mx-1 px-2 py-1" style={tagBgColor}>{item}</span>
            )
          })}
        </div>
        
        
      </div>
    </div>
  );
};

export default Noteitem;
