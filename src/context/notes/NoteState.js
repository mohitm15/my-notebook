import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const notesInitial = [];
    const host = "http://localhost:5000";
    const [notes,setNotes] = useState(notesInitial);

    //fetching all the notes
    const getNotes = async() => {

        const url = `${host}/api/notes/fetchallnotes`;
        //API call
        const response = await fetch(url, {
            method: 'GET', 
            headers: {
              'Content-Type': 'application/json',
              'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0MzJhYzUyMjVjZDIzMDk5OWYxNzhkIn0sImlhdCI6MTYzMTgwNDM3N30.wxrrT09Pmc8KU0AYlG0hVgFJeJlUcotEgGr3BkHFEhk"
            },
          });
          const finalNotes = await response.json();
          setNotes(finalNotes);
    }

    //Add a note
    const addNote = (title,description,tag) => {

        //TODO: Api call 

        console.log("Adding a new note");

        const note =         {
            "_id": "61473ebd4ce15cca37954d28",
            "user": "61432ac5225cd230999f178d",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2021-09-19T13:44:29.386Z",
            "__v": 0
        }

        //pushing the note to the notes array
        setNotes(notes.concat(note));

    }

    // Delete a note
    const deleteNote = (id) =>{
        //TODO: Api call
        console.log("Deleting a note with id -"+id)

        setNotes(notes.filter(note => (note._id !== id)));
        
    }
    
    // Edit a note
    const editNote = (id, title, description, tag) =>{
        
        console.log("Editing a note")
        for (let i = 0; i < notes.length; i++) {
            const element = notes[i];
            if(element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
        setNotes(notes);
    }

    return(
        <NoteContext.Provider value={{notes,getNotes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;