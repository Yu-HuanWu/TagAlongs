import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import './form.scss'


class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            handle: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/tagalongs');
        }

        this.setState({errors: nextProps.errors})
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        let user = {
            handle: this.state.handle,
            password: this.state.password
        };

        this.props.login(user)
    }

    renderErrors() {
        return(
            <ul className="renderError">
                {Object.keys(this.state.errors).map((error, i) => (
                <li key={`error-${i}`}>
                    {this.state.errors[error]}
                </li>
                ))}
            </ul>
        );
    }

    loginDemo() {
        let user = {
            handle: "CookieMonster",
            password: "password"
        };

        this.props.login(user);
    }

    render() {
        return (
        <div className="splash">
        {/* <div className="main"></div> */}
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="login-form">
                        <h1>LOGIN</h1>
                        <div className="input-container">
                            <input type="text"
                                value={this.state.handle}
                                onChange={this.update('handle')}
                                required
                            />
                            <label>Username</label>
                        </div>

                        <div className="input-container">
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                required
                            />
                            <label>Password</label>
                        </div>

                        <input className="form-button" type="submit" value="Log In" />
                        <button className="form-button"
                            id="demo-button" 
                            onClick={() => this.loginDemo()}
                            >Demo Login</button>
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        </div>
        );
    }
}

export default withRouter(LoginForm);