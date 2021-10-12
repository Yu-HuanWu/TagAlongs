import React from "react";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router";

class Nav extends React.Component {
    constructor(props ) {
        super(props);
    };


    componentDidMount() {
        this.props.receiveUser(this.props.user)
    }

    render() {

      const thisClass = (this.props.location === "/signup") ? "sign-up" : "signed-in"
      const {user, logout} = this.props

        if ({user}) {
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
                        <Link className={thisClass} to="/signup">Sign Up</Link>
                        <Link className={thisClass} to="/login">Log In</Link>
                    </div>
                </div>
            )}
        }
}

export default Nav
