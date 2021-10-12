import React from "react";
import { Link } from "react-router-dom";
import './nav.scss'

const Nav = ({ user, logout }) => {
    if (user && user.handle) {
        return (
            <div className="main-nav">
                <Link to="/">
                    TagAlongs
                </Link>
                <div>
                    <p className="users-name">Hello, {user.handle}</p>
                <button className="logout-button" onClick={logout}>Sign Out</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="main-nav">
                <Link to="/">
                    TagAlongs
                </Link>
                <div className="user-auth">
                    <Link className="sign-up-button" to="/signup">Sign Up</Link>
                    <Link className="sign-in-button" to="/login">Log In</Link>
                </div>
            </div>
        )
    }
}

export default Nav
