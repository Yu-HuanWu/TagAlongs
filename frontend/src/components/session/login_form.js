import React from 'react';
import { withRouter } from 'react-router-dom';
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
        this.loginDemo = this.loginDemo.bind(this);
        this.renderDemo = this.renderDemo.bind(this);
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

    loginDemo(e) {

        e.preventDefault();
        const demo = { handle: "CookieMonster", password: "password" };

        const usernameAnimate = setInterval(() => {
            if (this.state.handle !== demo.handle) {
                const temp = demo.handle.slice(0, this.state.handle.length + 1);
                this.setState({ handle: temp });
            } else {
                clearInterval(usernameAnimate);
                passwordAnimate();
            }
        }, 100);

        const passwordAnimate = () => {
            const processLogin = setInterval(() => {
                if (this.state.password !== demo.password) {
                    const temp = demo.password.slice(0, this.state.password.length + 1);
                    this.setState({ password: temp });
                } else {
                    clearInterval(processLogin);
                    this.props.login(demo);
                }
            }, 100);
        };
    }

    renderDemo(e) {
        return (
            <input type="submit" onClick={this.loginDemo} value="Demo Login" className="form-button"/>
        )
    }

    render() {
        return (
        <div className="splash">
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
                        {this.renderDemo()}
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        </div>
        );
    }
}

export default withRouter(LoginForm);