import { useState } from "react";
import axios from "axios";
import "./Auth.css";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {

        try {

            const res = await axios.post(

                "https://team-task-manager-lllp9yijl-diya536s-projects.vercel.app/api/auth/login",

                {
                    email,
                    password
                }

            );

            localStorage.setItem(

                "role",

                res.data.role

            );

            alert("Login Successful");

            window.location.href = "/dashboard";

        } catch (error) {

            alert("Invalid Credentials");

            console.log(error);

        }

    };

    return (

        <div className="auth-container">

            <div className="overlay"></div>

            <div className="auth-box">

                <h1>

                    Team Task
                    <br />
                    Manager

                </h1>

                <p>

                    Smart collaboration for modern teams

                </p>

                <input

                    type="email"

                    placeholder="Enter Email"

                    value={email}

                    onChange={(e) =>
                        setEmail(e.target.value)
                    }

                />

                <input

                    type="password"

                    placeholder="Enter Password"

                    value={password}

                    onChange={(e) =>
                        setPassword(e.target.value)
                    }

                />

                <button onClick={handleLogin}>

                    Login

                </button>

                <span>

                    Don't have an account?

                </span>

                <a href="/signup">

                    Create Account

                </a>

            </div>

        </div>

    );

}