import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "61472b96347b31b44ed851ff",
            "user": "61432ac5225cd230999f178d",
            "title": "First song UPDATED3",
            "description": "First Debut song in launched UPDATED3",
            "tag": "UPDATED3",
            "date": "2021-09-19T12:22:46.552Z",
            "__v": 0
        },
        {
            "_id": "61473ebd4ce15cca37954d28",
            "user": "61432ac5225cd230999f178d",
            "title": "First song (debut)",
            "description": "First Debut song in launched in 2015.",
            "tag": "music",
            "date": "2021-09-19T13:44:29.386Z",
            "__v": 0
        },
        {
            "_id": "61472b96347b31b44ed851ff",
            "user": "61432ac5225cd230999f178d",
            "title": "First song UPDATED3",
            "description": "First Debut song in launched UPDATED3",
            "tag": "UPDATED3",
            "date": "2021-09-19T12:22:46.552Z",
            "__v": 0
        },
        {
            "_id": "61473ebd4ce15cca37954d28",
            "user": "61432ac5225cd230999f178d",
            "title": "First song (debut)",
            "description": "First Debut song in launched in 2015.",
            "tag": "music",
            "date": "2021-09-19T13:44:29.386Z",
            "__v": 0
        },
        {
            "_id": "61472b96347b31b44ed851ff",
            "user": "61432ac5225cd230999f178d",
            "title": "First song UPDATED3",
            "description": "First Debut song in launched UPDATED3",
            "tag": "UPDATED3",
            "date": "2021-09-19T12:22:46.552Z",
            "__v": 0
        },
        {
            "_id": "61473ebd4ce15cca37954d28",
            "user": "61432ac5225cd230999f178d",
            "title": "First song (debut)",
            "description": "First Debut song in launched in 2015.",
            "tag": "music",
            "date": "2021-09-19T13:44:29.386Z",
            "__v": 0
        },
        {
            "_id": "61472b96347b31b44ed851ff",
            "user": "61432ac5225cd230999f178d",
            "title": "First song UPDATED3",
            "description": "First Debut song in launched UPDATED3",
            "tag": "UPDATED3",
            "date": "2021-09-19T12:22:46.552Z",
            "__v": 0
        },
        {
            "_id": "61473ebd4ce15cca37954d28",
            "user": "61432ac5225cd230999f178d",
            "title": "First song (debut)",
            "description": "First Debut song in launched in 2015.",
            "tag": "music",
            "date": "2021-09-19T13:44:29.386Z",
            "__v": 0
        },
        {
            "_id": "61472b96347b31b44ed851ff",
            "user": "61432ac5225cd230999f178d",
            "title": "First song UPDATED3",
            "description": "First Debut song in launched UPDATED3",
            "tag": "UPDATED3",
            "date": "2021-09-19T12:22:46.552Z",
            "__v": 0
        },
        {
            "_id": "61473ebd4ce15cca37954d28",
            "user": "61432ac5225cd230999f178d",
            "title": "First song (debut)",
            "description": "First Debut song in launched in 2015.",
            "tag": "music",
            "date": "2021-09-19T13:44:29.386Z",
            "__v": 0
        },
        {
            "_id": "61472b96347b31b44ed851ff",
            "user": "61432ac5225cd230999f178d",
            "title": "First song UPDATED3",
            "description": "First Debut song in launched UPDATED3",
            "tag": "UPDATED3",
            "date": "2021-09-19T12:22:46.552Z",
            "__v": 0
        },
        {
            "_id": "61473ebd4ce15cca37954d28",
            "user": "61432ac5225cd230999f178d",
            "title": "First song (debut)",
            "description": "First Debut song in launched in 2015.",
            "tag": "music",
            "date": "2021-09-19T13:44:29.386Z",
            "__v": 0
        }
        ,        {
            "_id": "61472b96347b31b44ed851ff",
            "user": "61432ac5225cd230999f178d",
            "title": "First song UPDATED3",
            "description": "First Debut song in launched UPDATED3",
            "tag": "UPDATED3",
            "date": "2021-09-19T12:22:46.552Z",
            "__v": 0
        },
        {
            "_id": "61473ebd4ce15cca37954d28",
            "user": "61432ac5225cd230999f178d",
            "title": "First song (debut)",
            "description": "First Debut song in launched in 2015.",
            "tag": "music",
            "date": "2021-09-19T13:44:29.386Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial)

    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;