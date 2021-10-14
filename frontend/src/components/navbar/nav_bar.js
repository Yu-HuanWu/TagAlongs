import React from "react";
import { Link } from "react-router-dom";
import './nav.scss';
import tagalongslogo from './tagalongs_logo.svg';
import defaultAvatar from '../users/avatars/default.png';
import blushAvatar from '../users/avatars/blush.svg';
import happyAvatar from '../users/avatars/happy.svg';
import tongueAvatar from '../users/avatars/tongue.svg';

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

    renderAvatar() {
        switch(this.state.avatar) {
        case 'default':
            return <img src={ defaultAvatar }
                        alt="default-avatar" 
                        className="user-nav-avatar" />
        case 'blush':
            return <img src={ blushAvatar } 
                        alt="blush-avatar" 
                        className="user-nav-avatar" />
        case 'happy':
            return <img src={ happyAvatar } 
                        alt="happy-avatar" 
                        className="user-nav-avatar" />
        case 'tongue':
            return <img src={ tongueAvatar } 
                        alt="tongue-avatar" 
                        className="user-nav-avatar" />
        default:
            return <img src={ defaultAvatar } 
                        alt="default-avatar" 
                        className="user-nav-avatar" />
        }
    }
    
    render() {
        const {user, logout} = this.props; 
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
                            <div className="dropdown">
                                <Link to="/profile" id="dropdown">
                                    <div className="avatar-container">
                                        { this.renderAvatar() }
                                    </div>
                                </Link>
                                <ul className="dropdown-content">
                                    <li className="dropdown-content-item">
                                        <Link to="/profile"
                                            className="dropdown-content-item">
                                                My Profile</Link>
                                    </li>
                                    <li className="dropdown-content-item">
                                        <Link to="/tagalongs"
                                            className="dropdown-content-item">
                                                Find a TagAlong</Link>
                                    </li>
                                    <li className="dropdown-content-item">
                                        <Link to="/newtagalong"
                                            className="dropdown-content-item">
                                                Create TagAlong</Link>
                                    </li>
                                    <li className="dropdown-content-item">
                                        <button className="dropdown-content-item" 
                                            onClick={logout}>Sign Out</button>
                                    </li>
                                </ul>
                            </div>
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
