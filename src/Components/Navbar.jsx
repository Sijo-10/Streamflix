import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid px-3 px-md-5">
                <Link className="navbar-brand text-danger fw-bold fs-2" to="/">STREAMFLIX</Link>

                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center w-100">
                    <ul className="navbar-nav d-flex flex-row gap-3 gap-md-4 mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Movies" className="nav-link text-white">TV Shows</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Movies" className="nav-link text-white">Movies</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Moviecard" className="nav-link text-white">New & Popular</Link>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center gap-3">
                        <i className="bi bi-search text-white fs-5"></i>
                        <i className="bi bi-bell text-white fs-5"></i>
                        <Link to={"/Login"}  className="btn btn-outline-light px-3 py-1">Login</Link>
                        <Link to={"/Signup"}  className="btn btn-danger px-3 py-1">Sign Up</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
