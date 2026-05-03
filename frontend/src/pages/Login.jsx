import { useState } from "react";

import axios from "axios";
import "./Auth.css";
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

    <div className="auth-container">

        <div className="auth-overlay"></div>

        <div className="auth-box">

            <h1 className="auth-title">

                Team Task <br /> Manager

            </h1>

            <p className="auth-subtitle">

                Smart collaboration for modern teams

            </p>

            <input

                type="email"

                placeholder="Enter Email"

                className="auth-input"

                onChange={(e) => setEmail(e.target.value)}

            />

            <input

                type="password"

                placeholder="Enter Password"

                className="auth-input"

                onChange={(e) => setPassword(e.target.value)}

            />

            <button

                className="auth-btn"

                onClick={handleLogin}

            >

                Login

            </button>

            <p className="auth-switch">

                Don't have an account?

            </p>

            <a href="/signup" className="auth-link">

                Create Account

            </a>

        </div>

    </div>

);