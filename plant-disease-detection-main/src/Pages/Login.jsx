import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(currentUser)
    if (currentUser) {
        navigate("/community");
    }
    const [err, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            // navigate("/")
        } catch (err) {
            setError(true);
        }
    };
    return (
        <div className="formContainer">
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
        </div>
    );
};

export default Login;