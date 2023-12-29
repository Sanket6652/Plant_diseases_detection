import React, { useContext, useState } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
    const { currentUser, setCurrentUser } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(currentUser)
    if (currentUser != {}) {
        // navigate("/communities");
    }
    const [err, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            const userData = await signInWithEmailAndPassword(auth, email, password);
            console.log(userData.user);
            setCurrentUser(userData.user);
            navigate("/")
        } catch (err) {
            setError(true);
        }
    };
    return (
        <>
        {/* <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Lama Chat</span>
                <span className="title">Login</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <button>Sign in</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>You don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </div> */}
        <div className="authentication">

            <form className="form" onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="email">Username</label>
                <input type="email" name="email" placeholder="farmer@gmail.com" />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
            </div>
            <button className="primary">Login</button>
            </form>
            <NavLink to='/register'>
                <button className="secondary">
                    Register
                </button>
            </NavLink>
        </div>
      </>
    );
};

export default Login;