import React from "react";
import { Link } from "react-router-dom";
import './nav.scss'

// let pathname = window.location.hash
// console.log(pathname)

class Nav extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            toggle: true 
        }

        this.toggleButton = this.toggleButton.bind(this)
    }
    
    toggleButton() {
        if (this.state.toggle === true) {
            this.setState({toggle: false})
        } else {
            this.setState({toggle: true})
        }
    }; 
    
    render() {
        const {user, logout} = this.props; 
        console.log(this.state.toggle); 

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
            // return (
            //     <div className="main-nav">
            //         <Link to="/">
            //             TagAlongs
            //         </Link>
            //         <div className="user-auth">
            //             <Link className="sign-up-button" to="/signup">Sign Up</Link>
            //             <Link className="sign-in-button" to="/login">Log In</Link>
            //         </div>
            //     </div>
            // )
            if (this.state.toggle) {
            return (
                <div className="main-nav">
                    <Link to="/">
                        TagAlongs
                    </Link>
                    <div className="user-auth">
                        <Link className="nav-button-clicked" to="/signup">Sign Up</Link>
                        <Link onClick={this.toggleButton} className="nav-button" to="/login">Log In</Link>
                    </div>
                </div>
            )} else {
            return (
                <div className="main-nav">
                <Link to="/">
                    TagAlongs
                </Link>
                <div className="user-auth">
                    <Link onClick={this.toggleButton} className="nav-button" to="/signup">Sign Up</Link>
                    <Link className="nav-button-clicked" to="/login">Log In</Link>
                </div>
            </div>
            )}
        }   
    }
}
// const Nav = ({ user, logout }) => {
    // console.log(toggle)
    // if (user && user.handle) {
    //     return (
    //         <div className="main-nav">
    //             <Link to="/">
    //                 TagAlongs
    //             </Link>
    //             <div>
    //                 <p className="users-name">Hello, {user.handle}</p>
    //             <button className="logout-button" onClick={logout}>Sign Out</button>
    //             </div>
    //         </div>
    //     )
    // } else {
    //     // return (
    //     //     <div className="main-nav">
    //     //         <Link to="/">
    //     //             TagAlongs
    //     //         </Link>
    //     //         <div className="user-auth">
    //     //             <Link className="sign-up-button" to="/signup">Sign Up</Link>
    //     //             <Link className="sign-in-button" to="/login">Log In</Link>
    //     //         </div>
    //     //     </div>
    //     // )
    //     if (pathname === "#/login") {
    //     return (
    //         <div className="main-nav">
    //             <Link to="/">
    //                 TagAlongs
    //             </Link>
    //             <div className="user-auth">
    //                 <Link onClick={toggleButton()} className="sign-up-button" to="/signup">Sign Up()</Link>
    //                 <Link className="sign-in-button" to="/login">Log In</Link>
    //             </div>
    //         </div>
    //     )} else {
    //     return (
    //         <div className="main-nav">
    //         <Link to="/">
    //             TagAlongs
    //         </Link>
    //         <div className="user-auth">
    //             <Link onClick={toggleButton()} className="sign-up-button" to="/signup">Sign Up</Link>
    //             <Link className="sign-in-button" to="/login">Log In()</Link>
    //         </div>
    //     </div>
    //     )}
    // }
    
// }

export default Nav
