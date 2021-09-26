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
          console.log(finalNotes);
          setNotes(finalNotes);
    }

    //Add a note
    const addNote = async(title,description,tag) => {

        const url = `${host}/api/notes/addnote`;
        //API call
        const response = await fetch(url, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
              'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0MzJhYzUyMjVjZDIzMDk5OWYxNzhkIn0sImlhdCI6MTYzMTgwNDM3N30.wxrrT09Pmc8KU0AYlG0hVgFJeJlUcotEgGr3BkHFEhk"
            },
            body:JSON.stringify({title,description, tag})
          });
        
        const notetobeadded =await response.json();
        //console.log(notetobeadded);

        //setting the note to the notes array
        setNotes(notes.concat(notetobeadded));

    }

    // Delete a note
    const deleteNote = async (id) =>{
        
        const url = `${host}/api/notes/deletenote/${id}`;
        //API call
        const response = await fetch(url, {
            method: 'DELETE', 
            headers: {
              'Content-Type': 'application/json',
              'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0MzJhYzUyMjVjZDIzMDk5OWYxNzhkIn0sImlhdCI6MTYzMTgwNDM3N30.wxrrT09Pmc8KU0AYlG0hVgFJeJlUcotEgGr3BkHFEhk"
            },
          });
        const finalNotes = response.json();
        console.log(finalNotes);  
        const newNotes = notes.filter(note => {return note._id !== id});
        setNotes(newNotes);
        
    }
    
    // Edit a note
    const editNote = async (id, title, description, tag) =>{
        
        // console.log("Editing a note with id "+ id)
        const url = `${host}/api/notes/updatenote/${id}`;
        //API call
        const response = await fetch(url, {
            method: 'PUT', 
            headers: {
              'Content-Type': 'application/json',
              'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0MzJhYzUyMjVjZDIzMDk5OWYxNzhkIn0sImlhdCI6MTYzMTgwNDM3N30.wxrrT09Pmc8KU0AYlG0hVgFJeJlUcotEgGr3BkHFEhk"
            },
            body:JSON.stringify({title, description, tag})
          });
         
          const finalNotes =await response.json();
          console.log(finalNotes);
        
          //creating a deep copy of response from the API
          let noteDeepCopy = JSON.parse(JSON.stringify(notes));


          //Logic to edit in frontend
          for (let i = 0; i < noteDeepCopy.length; i++) {
              const element = noteDeepCopy[i]; 
              if(element._id === id){
                noteDeepCopy[i].title = title;
                noteDeepCopy[i].description = description;
                noteDeepCopy[i].tag = tag;
                break;
              }
              
          }
          //console.log("notes - ",noteDeepCopy)
          setNotes(noteDeepCopy);
    
    }

    return(
        <NoteContext.Provider value={{notes,getNotes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;