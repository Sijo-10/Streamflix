import React from 'react';

function Footer() {
    return (
        <footer className="bg-dark text-white py-4 mt-auto">
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
                <div className="mb-3 mb-md-0">
                    <h5 className="text-danger fw-bold">STREAMFLIX</h5>
                    <p className="small">Your ultimate destination for movies and TV shows.</p>
                </div>

                <ul className="list-unstyled d-flex gap-3 mb-3 mb-md-0">
                    <li><a href="/" className="text-danger text-decoration-none">Home</a></li>
                    <li><a href="/Banner" className="text-danger text-decoration-none">TV Shows</a></li>
                    <li><a href="/Movies" className="text-danger text-decoration-none">Movies</a></li>
                    <li><a href="/Moviecard" className="text-danger text-decoration-none">New & Popular</a></li>
                </ul>

            </div>

            <div className="text-center mt-3">
                <small>&copy; {new Date().getFullYear()} STREAMFLIX. All rights reserved.</small>
            </div>
        </footer>
    );
}

export default Footer;
