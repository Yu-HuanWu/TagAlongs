import React from 'react';
import { withRouter } from 'react-router-dom';
import './form.scss'

class SignupForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            handle: '',
            password: '',
            password2: '',
            birthdate: '',
            firstName: '',
            lastName: '',
            errors: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/login');
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            handle: this.state.handle,
            password: this.state.password,
            password2: this.state.password2,
            birthdate: this.state.birthdate,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        };

        this.props.signup(user, this.props.history);
    }

    renderErrors() {
        return (
            <ul className="renderError">
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
        <div className="splash">
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="signup-form">
                        <h1>SIGN UP</h1>
                        <div className="input-container">
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                required
                            />
                            <label>E-mail</label>
                        </div>

                        <div className="input-container">
                            <input type="text"
                                value={this.state.handle}
                                onChange={this.update('handle')}
                                required
                            />
                            <label>Username</label>
                        </div>
                        
                        <div className="input-container">
                            <input type="text"
                                value={this.state.firstName}
                                onChange={this.update('firstName')}
                                required
                            />
                            <label>First Name</label>
                        </div>

                        <div className="input-container">
                            <input type="text"
                                value={this.state.lastName}
                                onChange={this.update('lastName')}
                                required
                            />
                            <label className="signup-form-label">Last Name</label>
                        </div>

                        <div className="input-container-date">
                            <input type="date"
                                value={this.state.birthdate}
                                onChange={this.update('birthdate')}
                            />
                            <label className="signup-form-label">Date of Birth</label>
                        </div>

                        <div className="input-container">
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                required
                            />
                            <label className="signup-form-label">Password</label>
                        </div>

                        <div className="input-container">
                            <input type="password"
                                value={this.state.password2}
                                onChange={this.update('password2')}
                                required
                            />
                            <label className="signup-form-label">Confirm Password</label>
                        </div>

                        <input className="form-button" type="submit" value="Submit" />
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        </div>
        );
    }
}

export default withRouter(SignupForm);