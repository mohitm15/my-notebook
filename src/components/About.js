import React,{ useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'

const About = () => {

    const a = useContext(noteContext);

    useEffect(() => {
        a.update();
    // eslint-disable-next-line    
    }, [])
    

    return (
        <div>
            <h1>This is {a.state.name} studying in {a.state.class}.</h1>
        </div>
    )
}

export default About
