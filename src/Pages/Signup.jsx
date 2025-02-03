import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
                <div className="p-4 rounded bg-secondary shadow-lg" style={{ minWidth: '300px' }}>
                    <h2 className="mb-4 text-center">Create Your Account</h2>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input type="text" className="form-control" placeholder="Enter your name" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="Password" required />
                        </div>
                        <button type="submit" className="btn btn-danger w-100">Sign Up</button>
                    </form>
                    <p className="mt-3 text-center">
                        Already have an account? <Link to="/Login" className="text-white fw-bold">Login</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Signup
