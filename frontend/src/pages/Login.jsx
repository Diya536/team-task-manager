import { useState } from "react";

import axios from "axios";

export default function Login() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleLogin = async () => {

        try {

            const res = await axios.post(

                "team-task-manager-klyqeazuv-diya536s-projects.vercel.app/api/auth/login",

                {
                    email,
                    password
                }

            );

            localStorage.setItem(

                "role",

                res.data.role

            );

            alert("Login successful");

            window.location.href = "/dashboard";

        } catch (error) {

            alert("Invalid credentials");

            console.log(error);

        }

    };

    return (

        <div>

            <input

                placeholder="Email"

                onChange={(e)=>setEmail(e.target.value)}

            />

            <input

                type="password"

                placeholder="Password"

                onChange={(e)=>setPassword(e.target.value)}

            />

            <button onClick={handleLogin}>

                Login

            </button>

        </div>

    );

}