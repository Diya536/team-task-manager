import { useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

import "./Auth.css";

export default function Signup() {

    const [form, setForm] = useState({

        name: "",
        email: "",
        password: "",
        role: "member"

    });

    const handleSignup = async () => {

        try {

            await axios.post(

                "http://localhost:5000/api/auth/signup",

                form

            );

            alert("Signup Successful");

        }

        catch (error) {

            alert("Signup Failed");

        }

    };

    return (

        <div className="auth-container">

            <div className="auth-box">
<h1 className="title">

    Create Your Workspace

</h1>

<p className="subtitle">

    Start managing projects professionally

</p>

                <input

                    placeholder="Enter Name"

                    onChange={(e) =>

                        setForm({

                            ...form,

                            name: e.target.value

                        })

                    }

                />

                <input

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

                <select

                    onChange={(e) =>

                        setForm({

                            ...form,

                            role: e.target.value

                        })

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

                <p className="bottom-text">

                    Already have an account?

                </p>

                <Link to="/">

                    Login Here

                </Link>

            </div>

        </div>

    );

}