import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "61472b96347b31b44ed851ff8",
            "user": "61432ac5225cd230999f178d",
            "title": "First song UPDATED3",
            "description": "First Debut song in launched UPDATED3",
            "tag": "UPDATED3",
            "date": "2021-09-19T12:22:46.552Z",
            "__v": 0
        },
        {
            "_id": "61473ebd4ce15cca37954d287",
            "user": "61432ac5225cd230999f178d",
            "title": "First song (debut)",
            "description": "First Debut song in launched in 2015.",
            "tag": "music",
            "date": "2021-09-19T13:44:29.386Z",
            "__v": 0
        },
        {
            "_id": "61472b96347b31b44ed851ff6",
            "user": "61432ac5225cd230999f178d",
            "title": "First song UPDATED3",
            "description": "First Debut song in launched UPDATED3",
            "tag": "UPDATED3",
            "date": "2021-09-19T12:22:46.552Z",
            "__v": 0
        },
        {
            "_id": "61473ebd4ce15cca37954d285",
            "user": "61432ac5225cd230999f178d",
            "title": "First song (debut)",
            "description": "First Debut song in launched in 2015.",
            "tag": "music",
            "date": "2021-09-19T13:44:29.386Z",
            "__v": 0
        },
        {
            "_id": "61472b96347b31b44ed851ff4",
            "user": "61432ac5225cd230999f178d",
            "title": "First song UPDATED3",
            "description": "First Debut song in launched UPDATED3",
            "tag": "UPDATED3",
            "date": "2021-09-19T12:22:46.552Z",
            "__v": 0
        },
        {
            "_id": "61473ebd4ce15cca37954d283",
            "user": "61432ac5225cd230999f178d",
            "title": "First song (debut)",
            "description": "First Debut song in launched in 2015.",
            "tag": "music",
            "date": "2021-09-19T13:44:29.386Z",
            "__v": 0
        },
        {
            "_id": "61472b96347b31b44ed851ff2",
            "user": "61432ac5225cd230999f178d",
            "title": "First song UPDATED3",
            "description": "First Debut song in launched UPDATED3",
            "tag": "UPDATED3",
            "date": "2021-09-19T12:22:46.552Z",
            "__v": 0
        },
        {
            "_id": "61473ebd4ce15cca37954d281",
            "user": "61432ac5225cd230999f178d",
            "title": "First song (debut)",
            "description": "First Debut song in launched in 2015.",
            "tag": "music",
            "date": "2021-09-19T13:44:29.386Z",
            "__v": 0
        },

    ]

    const [notes,setNotes] = useState(notesInitial);

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
    const editNote = (id) =>{
        
    }

    return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;