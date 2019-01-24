import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className = "nav-wrapper red darken-3">
            <div className="container">
                <Link className="brand-logo" to="/">Mediplus</Link>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/doctors">Doctors</NavLink></li>
                    <li><NavLink to="/clinics">Clinics</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar