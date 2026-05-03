import { useState } from "react";
import axios from "axios";
import "./Auth.css";

export default function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("member");

    const handleSignup = async () => {

        try {

            await axios.post(

                "https-githubcom-diya536-team-task-manager-production.up.railway.app/api/auth/signup",

                {
                    name,
                    email,
                    password,
                    role
                }

            );

            alert("Signup Successful");

            window.location.href = "/";

        }

        catch (error) {

            alert("Signup Failed");

            console.log(error);

        }

    };

    return (

        <div className="auth-container">

            <div className="overlay"></div>

            <div className="auth-box">

                <h1>

                    Create
                    <br />
                    Account

                </h1>

                <p>

                    Join your team workspace

                </p>

                <input

                    type="text"

                    placeholder="Enter Name"

                    value={name}

                    onChange={(e)=>
                        setName(e.target.value)
                    }

                />

                <input

                    type="email"

                    placeholder="Enter Email"

                    value={email}

                    onChange={(e)=>
                        setEmail(e.target.value)
                    }

                />

                <input

                    type="password"

                    placeholder="Enter Password"

                    value={password}

                    onChange={(e)=>
                        setPassword(e.target.value)
                    }

                />

                <select

                    value={role}

                    onChange={(e)=>
                        setRole(e.target.value)
                    }

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

                <span>

                    Already have an account?

                </span>

                <a href="/">

                    Login

                </a>

            </div>

        </div>

    );

}