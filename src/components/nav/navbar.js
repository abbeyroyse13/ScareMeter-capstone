import React from "react"
import { Link } from "react-router-dom"
import "./navbar.css"

// don't forget to change these to links & add links to other pages later

export const NavBar = (props) => {
    return (
        <nav className="navbar">
            <ul className="scareLogo">
                <li className="navLogo">
                    <a href="/"><img src="" alt="Logo"/></a>
                </li>
                <li className="navLink">
                    <Link className="navButton" to="/Login">Logout</Link>
                </li>
                <li className="navLink">
                    <Link className="navButton" to="/horrorPosts">My Posts</Link>
                </li>
                <li className="navLink">
                    <Link className="navButton" to="/horrorList">My List</Link>
                </li>
            </ul>
        </nav>
    )
}