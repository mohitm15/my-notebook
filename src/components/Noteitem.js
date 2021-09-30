import React, { useContext} from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {

  const contextForNotes = useContext(noteContext);
  const { deleteNote} = contextForNotes;
  const { note, updateNote } = props;

  // updatenote is used here by edit-icon

  const handleDelete = () => {
    deleteNote(note._id);
    props.showAlert("Note Deleted successfully!", "danger");
  }

  return (
    <div className="col-md-3">

      <div className="card text-white bg-dark mb-3 my-3 ">
        <div className="card-header ">
          Note
          <span className="d-flex justify-content-end">
            <i className="fas fa-trash-alt mx-2 " onClick={()=> handleDelete()}></i>
            <i className="far fa-edit mx-2" onClick={()=>updateNote(note)}></i> 
            
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
