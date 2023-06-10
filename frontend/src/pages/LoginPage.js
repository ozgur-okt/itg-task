import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "../App.css";
import { authConfig } from '../config';


const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleLogin = (username, password) => {
        if (username === authConfig.username && password === authConfig.password) {
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/control')
        } else {
            localStorage.setItem('isLoggedIn', 'false');
            navigate('/login')
            alert("Wrong username or password")
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(username, password);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-5 shadow">
                    <h2 className="text-center m-4">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username" className="form-label"> Username </label>
                        <input
                            type="text"
                            className="form-control mb-4"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label htmlFor="password" className="form-label"> Password </label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="d-flex justify-content-center my-4">
                            <button type="submit" className="btn btn-outline-success my-5 mx-3 login-form">
                                Login
                            </button>
                            <Link className="btn btn-outline-danger my-5 mx-3 login-form" to="/">
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
