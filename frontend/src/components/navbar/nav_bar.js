import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ user, logout, location }) => {
    // let = thisClass = ()

    if (user) {
        return (
            <div className="main-nav">
                <Link to="/">
                    TagAlongs
                </Link>
                <div>
                    <p className="users-name">Hello, {user.handle}</p>
                </div>
                <button className="logout-button" onClick={logout}>Sign Out</button>
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
