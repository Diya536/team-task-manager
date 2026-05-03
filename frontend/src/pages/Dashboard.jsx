import { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

export default function Dashboard() {

    const [tasks, setTasks] = useState([]);
    const [projects, setProjects] = useState([]);

    const [title, setTitle] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [assignedTo, setAssignedTo] = useState("");

    const [project, setProject] = useState("");

    const role = localStorage.getItem("role");

    useEffect(() => {

        fetchTasks();
        fetchProjects();

    }, []);

    const fetchTasks = async () => {

        const res = await axios.get(
            "https-githubcom-diya536-team-task-manager-production.up.railway.app/api/tasks"
        );

        setTasks(res.data);

    };

    const fetchProjects = async () => {

        const res = await axios.get(
            "https-githubcom-diya536-team-task-manager-production.up.railway.app/api/projects"
        );

        setProjects(

            res.data.filter(

                (item) => item.title

            )

        );

    };

    const createTask = async () => {

        await axios.post(

            "https-githubcom-diya536-team-task-manager-production.up.railway.app/api/tasks",

            {
                title,
                dueDate,
                assignedTo
            }

        );

        setTitle("");
        setDueDate("");
        setAssignedTo("");

        fetchTasks();

    };

    const createProject = async () => {

        if (!project.trim()) {

            alert("Project name required");

            return;

        }

        await axios.post(

            "https-githubcom-diya536-team-task-manager-production.up.railway.app/api/projects",

            {
                title: project
            }

        );

        setProject("");

        fetchProjects();

    };

    const updateStatus = async (id, status) => {

        await axios.put(

            `https-githubcom-diya536-team-task-manager-production.up.railway.app/api/tasks/${id}`,

            { status }

        );

        fetchTasks();

    };

    const deleteTask = async (id) => {

        await axios.delete(

            `https-githubcom-diya536-team-task-manager-production.up.railway.app/api/tasks/${id}`

        );

        fetchTasks();

    };

    return (

        <div className="dashboard-container">

            <div className="dashboard-overlay"></div>

            <div className="dashboard-content">

                <div className="dashboard-header">

                    <h1 className="dashboard-title">

                        Team Task Manager

                    </h1>

                    <p className="dashboard-subtitle">

                        Organize projects and manage team productivity professionally

                    </p>

                </div>

                <div className="warning-wrapper">

                    {

                        tasks

                        .filter(

                            (task) =>

                                task.status !== "Completed"

                        )

                        .slice(0,2)

                        .map((task) => (

                            <div

                                key={task._id}

                                className="warning-card"

                            >

                                ⚠️ {task.title} pending

                            </div>

                        ))

                    }

                </div>

                <div className="top-grid">

                    {

                        role === "admin" && (

                            <div className="glass-card small-card">

                                <h2 className="section-title">

                                    Create Project

                                </h2>

                                <input

                                    className="input-field"

                                    placeholder="Project Name"

                                    value={project}

                                    onChange={(e) =>

                                        setProject(e.target.value)

                                    }

                                />

                                <button

                                    className="primary-btn"

                                    onClick={createProject}

                                >

                                    Create Project

                                </button>

                            </div>

                        )

                    }

                    <div className="glass-card small-card">

                        <h2 className="section-title">

                            Create Task

                        </h2>

                        <input

                            className="input-field"

                            placeholder="Task Title"

                            value={title}

                            onChange={(e) =>

                                setTitle(e.target.value)

                            }

                        />

                        <input

                            className="input-field"

                            placeholder="Assign To"

                            value={assignedTo}

                            onChange={(e) =>

                                setAssignedTo(e.target.value)

                            }

                        />

                        <input

                            className="input-field"

                            type="date"

                            value={dueDate}

                            onChange={(e) =>

                                setDueDate(e.target.value)

                            }

                        />

                        <button

                            className="primary-btn"

                            onClick={createTask}

                        >

                            Add Task

                        </button>

                    </div>

                </div>

                <div className="main-layout">

                    <div className="glass-card">

                        <h2 className="section-title">

                            Active Projects

                        </h2>

                        <div className="project-list">

                            {

                                projects.map((item) => (

                                    <div

                                        key={item._id}

                                        className="project-card"

                                    >

                                        📁 {item.title}

                                    </div>

                                ))

                            }

                        </div>

                    </div>

                    <div className="glass-card">

                        <h2 className="section-title">

                            Team Tasks

                        </h2>

                        <div className="task-list">

                            {

                                tasks.map((task) => (

                                    <div

                                        key={task._id}

                                        className="task-card"

                                    >

                                        <h3 className="task-title">

                                            {task.title}

                                        </h3>

                                        <p className="task-info">

                                            Status: {task.status}

                                        </p>

                                        <p className="task-info">

                                            Assigned To: {task.assignedTo}

                                        </p>

                                        <p className="task-date">

                                            Due: {task.dueDate}

                                        </p>

                                        <select

                                            className="status-select"

                                            onChange={(e) =>

                                                updateStatus(

                                                    task._id,

                                                    e.target.value

                                                )

                                            }

                                        >

                                            <option>

                                                Change Status

                                            </option>

                                            <option value="Todo">

                                                Todo

                                            </option>

                                            <option value="In Progress">

                                                In Progress

                                            </option>

                                            <option value="Completed">

                                                Completed

                                            </option>

                                        </select>

                                        {

                                            role === "admin" && (

                                                <button

                                                    className="delete-btn"

                                                    onClick={() =>

                                                        deleteTask(task._id)

                                                    }

                                                >

                                                    Delete Task

                                                </button>

                                            )

                                        }

                                    </div>

                                ))

                            }

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}