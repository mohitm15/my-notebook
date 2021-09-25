import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";

function Notes() {
  const contextForNotes = useContext(noteContext);
  const { notes, getNotes } = contextForNotes;

  useEffect(() => {
    getNotes();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <AddNote />
      <div className="my-5">
        <h2>Your Notes</h2>
        <div className="row my-3">
          {notes.map((item, key) => {
            return <Noteitem key={key} note={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Notes;
