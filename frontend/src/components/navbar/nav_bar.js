import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ user, signOut }) => {
    // if (user) {
    //     return (
    //         <div className="main-nav">
    //             {logo}
    //             <div>
    //                 <p className="users-name">Hello, {user.first_name}</p>
    //             </div>
    //             <button className="sign-out-button" onClick={signOut}>Sign Out</button>
    //         </div>
    //     )
    // } else {
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
    // }
}

export default Nav
