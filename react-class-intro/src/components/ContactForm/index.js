import { useState } from "react"

// Prop Drilling
// Context API helps with Prop Drilling

export default function ContactForm() {
    const [firstName, setFirstName] = useState('Zahidul');
    const [lastName, setLastName] = useState('Hossain')

    const changeFirstName = (event) => {
        setFirstName(event.target.value)
    }

    const changeLastName = (event) => {
        setLastName(event.target.value)
    }

    const submitForm = () => {
        alert(firstName + ' ' +  lastName)
    }

    return(
        <div className="w-[480px] m-auto mt-16">
            <h1 className="text-2xl mb-4">Contact Us</h1>

            <form action="#">
                <div className="my-3">
                    <label htmlFor="">First Name</label>
                    <input type="text" class="form-input w-full" onChange={changeFirstName} value={firstName} />
                </div>

                <div  className="my-3">
                    <label htmlFor="">Last Name</label>
                    <input type="text" class="form-input w-full" onChange={changeLastName} value={lastName}/>
                </div>

                <div  className="my-3">
                    <label htmlFor="">Email</label>
                    <input type="text" class="form-input w-full"/>
                </div>

                <div className="my-3">
                    <label htmlFor="" >Comment</label>
                    <textarea name="" id="" cols="30" rows="10" className="form-input w-full resize-none" />
                </div>

                <button className="w-full bg-cyan-600 text-white py-4" onClick={submitForm}>Submit Form</button>
            </form>

        </div>
    )
}