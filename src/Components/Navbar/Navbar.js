import React from 'react'
import "./Navbar.css"
import { NavLink } from "react-router-dom";

export default function Navbar() {

    return (
        <div className="container">
            <ul className="list">
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/">Accueil</NavLink>

                <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/ecrire">Ecrire</NavLink>

                <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/contact">Contact</NavLink>
            </ul>
        </div>
    )
}
