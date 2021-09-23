import React, {useContext} from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";

function Notes() {

    const contextForNotes = useContext(noteContext);
    const {notes,setNotes} = contextForNotes;

  return (
    
      <div className="my-5">
        <h2>Your Notes</h2>
        <div className="row my-3">
          {notes.map((item) => {
            return <Noteitem note={item} />;
          })}
        </div>
      </div>
    
  );
}

export default Notes;
