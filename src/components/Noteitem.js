import React, { useContext} from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {

  const contextForNotes = useContext(noteContext);
  const { deleteNote} = contextForNotes;
  const { note } = props;

  return (
    <div className="col-md-3">

      <div className="card text-white bg-dark mb-3 my-3 ">
        <div className="card-header ">
          Note 1
          <span className="d-flex justify-content-end">
            <i className="fas fa-trash-alt mx-2 " onClick={()=> deleteNote(note._id)}></i>
            <i className="far fa-edit mx-2"></i>
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
