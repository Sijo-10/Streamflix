import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
                <div className="p-4 rounded bg-secondary shadow-lg" style={{ minWidth: '300px' }}>
                    <h2 className="mb-4 text-center">Login to STREAMFLIX</h2>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="Password" required />
                        </div>
                        <button type="submit" className="btn btn-danger w-100">Login</button>
                    </form>
                    <p className="mt-3 text-center">
                        Don't have an account? <Link to="/Signup" className="text-white fw-bold">Sign Up</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login
