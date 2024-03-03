import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { registerWithEmailAndPassword } from "../firebase";

export default function Register(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (event) =>{
    event.preventDefault();
    try {
       const user = await registerWithEmailAndPassword(email, password);
       console.log(user);
       navigate("/login")
    } catch (error) {
        console.log(error)
    }
    
}   


    return (
        <>
        <div className="flex flex-col p-4 justify-center items-center">
            <h1 className="text-3xl my-4">Register</h1>
            <form className="flex flex-col">
                <div className="my-1">
                    <label htmlFor="email">Email address</label>
                    <input className="mx-2 my2 p-1 border border-gray-100" type="email" id="email" value={email} onChange={(e)=> setEmail(e.target.value)} required placeholder="Email"/>
                </div>
                <div className="my-1">
                    <label htmlFor="password">Password</label>
                    <input className="mx-2 my2 p-1 border border-gray-100" type="password" id="password" value={password} onChange={(e)=> setPassword(e.target.value)} required placeholder="Password"/>
                </div>
                <button type="submit" onClick={handleSubmit}>Register</button>
            </form>
            <p className="my-2">Already Have an account</p>
            <NavLink className="underline" to="/login">Sing In</NavLink>
        </div>
        </>
    );
}