import { useState } from "react";
import { sendPasswordReset } from "../firebase";

export default function Reset(){
    const [email, setEmail] = useState("");

    return (
      <div>
        <h1>Reset Your password</h1>
        <div className="my-1">
            <label htmlFor="email">Email address</label>
            <input className="mx-2 my2 p-1 border border-gray-100" type="email" id="email" value={email} onChange={(e)=> setEmail(e.target.value)} required placeholder="Email"/>
        </div>
        <button type="submit" onClick={()=> sendPasswordReset(email)}>Send Password Reset Email</button>
      </div>
    );
}