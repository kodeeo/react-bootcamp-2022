import { useState } from "react";
import { AuthorList } from "./AuthorList";

export default function HooksIntro() {
    const [oldName, setOldName] = useState('Kawser');
    const [name, setName] = useState('Choyan')
    const [location, setLocation] = useState('Dhaka')
    const [oldLocation, setOldLocation] = useState('Feni')

    const [toggle, setToggle] = useState(true)



    // function changeName() {
    //     setOldName(name)
    //     setName(oldName);
    // }

    // function changeLocation() {
    //     setOldLocation(location)
    //     setLocation(oldLocation)
    // }

    function generalToggler(oldFunc, newFunc, oldVal, newVal) {
        oldFunc(newVal)
        newFunc(oldVal)
    }

    function changeToggle() {
        setToggle(!toggle)
    }

    return (
        <div>
            <h1>Hooks Introduction</h1>

            <h2>{name}</h2>
            <h3>{location}</h3>
            <h4>{toggle.toString()}</h4>

            <button onClick={() => generalToggler(setOldName, setName, oldName, name)}>Change Name</button>
            <button onClick={() => generalToggler(setOldLocation, setLocation, oldLocation, location)}>Change Location</button>
            
            
            <button onClick={changeToggle}>Change Toggle</button>


            <AuthorList />

        </div>
    )
}