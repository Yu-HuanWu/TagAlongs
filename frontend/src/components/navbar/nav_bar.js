import React from "react";
import { Link } from "react-router-dom";
import './nav.scss'
import tagalongslogo from './tagalongs_logo.svg'

class Nav extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            toggle: 'home' 
        }

        this.toggleButton = this.toggleButton.bind(this)
    }
    
    toggleButton() {
        if (this.state.toggle === 'home' || this.state.toggle === 'login') {
            this.setState({toggle: 'signup'})
        } else {
            this.setState({toggle: 'login'})
        }
    }; 
    
    render() {
        const {user, logout} = this.props; 
        console.log(this.state.toggle); 

        if (user && user.handle) {
            return (
                <div className="main-nav-container">
                    <div className="main-nav">
                        <Link to="/">
                            <img src={tagalongslogo} alt="TagAlongs" className="navbar-logo" />
                        </Link>
                        <div className="nav-user-info">
                            <p className="users-name">Hello, {user.handle}</p>
                            <span className="nav-divider"/>
                            <button className="nav-buttons">Resources</button>
                            <span className="nav-divider"/>
                            <button className="nav-buttons">What's a TagAlong</button>
                            <span className="nav-divider"/>
                            <button className="nav-buttons">About Us</button>
                            <span className="nav-divider"/>
                            <button className="logout-button" onClick={logout}>Sign Out</button>
                        </div>
                    </div>
                </div>
            )
        } else {
            if (this.state.toggle === 'signup') {
            return (
                <div className="main-nav-container">
                    <div className="main-nav">
                        <Link to="/">
                            <img src={tagalongslogo} alt="TagAlongs" className="navbar-logo"/>
                        </Link>
                        <div className="user-auth">
                            <Link className="nav-button-clicked" to="/signup">Sign Up</Link>
                            <span className="nav-divider" />
                            <Link onClick={this.toggleButton} className="nav-button" id="login" to="/login">Log In</Link>
                        </div>
                    </div>
                </div>
            )} else if (this.state.toggle === 'login') {
                return (
                    <div className="main-nav-container">
                        <div className="main-nav">
                            <Link to="/">
                                <img src={tagalongslogo} alt="TagAlongs" className="navbar-logo" />
                            </Link>
                            <div className="user-auth">
                                <span className="nav-divider" />
                                <Link onClick={this.toggleButton} className="nav-button" to="/signup">Sign Up</Link>
                                <span className="nav-divider" />
                                <Link className="nav-button-clicked" id="login" to="/login">Log In</Link>
                                <span className="nav-divider" />
                            </div>
                        </div>
                    </div>
            )} else {
                return (
                    <div className="main-nav-container">
                        <div className="main-nav">
                            <Link to="/">
                                <img src={tagalongslogo} alt="TagAlongs" className="navbar-logo" />
                            </Link>
                            <div className="user-auth">
                                <span className="nav-divider" />
                                <Link onClick={this.toggleButton} className="nav-button" to="/signup">Sign Up</Link>
                                <span className="nav-divider" />
                                <Link onClick={this.toggleButton} className="nav-button" id="login" to="/login">Log In</Link>
                            </div>
                        </div>
                    </div>
                )
            }
        }   
    }
}


export default Nav
