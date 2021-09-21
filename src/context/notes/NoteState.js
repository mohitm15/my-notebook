import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const s1 = {
        "name":"Mohit",
        "class":"5b"
    }

    const [state, setstate] = useState(s1)

    const update = () =>{
        setTimeout(() => {
            setstate({
                "name":"Mayank",
                "class":"10b"
            })
        }, 2000);
    }

    return(
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;