import { useEffect, useState } from "react"
import Button from "./Button"

export default function UseEffectDemo(){
    const [age, setAge] = useState(30)
    const [user, setUser] = useState({
        firstName: 'Zahidul',
        lastName: 'Hossain'
    })


    // Shallow comparison

    useEffect(() => {
        // setAge(40)
        // setUser({
        //     firstName: 'Kawser',
        //     lastName: 'Ahmed',
        // })
    }, [user])

    return (
        <div>
            <h1 className="text-red-500">Use Effect Demo</h1>
            <p>My name is {user.firstName} {user.lastName}</p>
            <p>Age is {age}</p>


            <div>

                <Button text='Hello' color='red' />
                <Button text='There' color='green' />
                <Button text='There' color='blue' />


            </div>


        {/* <button className="bg-blue-700 text-white p-1.5 rounded-[3px]">Hi Button</button>
            <button className="bg-green-700 text-white p-1.5 rounded-[3px]">Hi Button</button>
            <button className="bg-orange-700 text-white p-1.5 rounded-[3px]">Hi Button</button>
            <button className="bg-rose-900 text-white p-1.5 rounded-[3px]">Hi Button</button>
            <button className="bg-fuchsia-700 text-white p-1.5 rounded-[3px]">Hi Button</button>   */}





        </div>
    )
}