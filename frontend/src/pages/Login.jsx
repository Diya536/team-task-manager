import { useState } from "react";

import axios from "axios";

import { useNavigate, Link } from "react-router-dom";

import "./Auth.css";

export default function Login() {

    const navigate = useNavigate();

    const [form, setForm] = useState({

        email: "",
        password: ""

    });

    const handleLogin = async () => {

        try {

            const res = await axios.post(

                "http://localhost:5000/api/auth/login",

                form

            );

            localStorage.setItem(
                "token",
                res.data.token
            );

            localStorage.setItem(
                "role",
                res.data.user.role
            );

            navigate("/dashboard");

        }

        catch (error) {

            alert("Invalid Credentials");

        }

    };

    return (

        <div className="auth-container">

            <div className="auth-box">

               <h1 className="title">

    Team Task Manager

</h1>

<p className="subtitle">

    Smart collaboration for modern teams

</p>


                <input

                    type="email"

                    placeholder="Enter Email"

                    onChange={(e) =>

                        setForm({

                            ...form,

                            email: e.target.value

                        })

                    }

                />

                <input

                    type="password"

                    placeholder="Enter Password"

                    onChange={(e) =>

                        setForm({

                            ...form,

                            password: e.target.value

                        })

                    }

                />

                <button onClick={handleLogin}>

                    Login

                </button>

                <p className="bottom-text">

                    Don't have an account?

                </p>

                <Link to="/signup">

                    Create Account

                </Link>

            </div>

        </div>

    );

}