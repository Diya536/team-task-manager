import { useState } from "react";
import axios from "axios";

export default function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("member");

    const handleSignup = async () => {

        try {

            await axios.post(

                "team-task-manager-klyqeazuv-diya536s-projects.vercel.app/api/auth/signup",

                {
                    name,
                    email,
                    password,
                    role
                }

            );

            alert("Signup successful");

        } catch (error) {

            alert("Signup failed");

            console.log(error);

        }

    };

    return (

        <div>

            <input
                placeholder="Name"
                onChange={(e)=>setName(e.target.value)}
            />

            <input
                placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
            />

            <select
                onChange={(e)=>setRole(e.target.value)}
            >

                <option value="member">

                    Member

                </option>

                <option value="admin">

                    Admin

                </option>

            </select>

            <button onClick={handleSignup}>

                Signup

            </button>

        </div>

    );

}