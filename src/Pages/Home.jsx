import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="position-relative vh-100 d-flex justify-content-center align-items-center text-center">
            <div className="position-absolute top-0 start-0 w-100 h-100">
                <img
                    src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=2000"
                    alt="Hero Background"
                    className="w-100 h-100 object-cover"
                />
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to right, black, rgba(0, 0, 0, 0.7), transparent)' }}></div>
            </div>

            <div className="position-relative text-white px-3 px-md-5">
                <h1 className="fs-1 fs-md-3 fw-bold mb-4">Welcome to <span className='text-danger'style={{fontSize:"4rem"}}>STREAMFLIX</span></h1>
                <p className="fs-5 fs-md-6 max-w-xl mb-4">
                    Dive into an ocean of captivating movies and TV shows. Your next favorite binge awaits!
                </p>
                <div className="d-flex justify-content-center gap-3">
                    <Link to={"/Signup"} className="btn btn-light text-black px-4 py-2 rounded-3 fw-bold">
                        Get Started
                    </Link>
                    <button className="btn btn-secondary text-white px-4 py-2 rounded-3 fw-bold">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
