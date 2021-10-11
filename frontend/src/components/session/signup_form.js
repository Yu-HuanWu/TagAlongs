import React from 'react';
import { withRouter } from 'react-router-dom';

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
            <ul>
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
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="signup-form">
                        <label className="signup-form-label">Email</label>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                        <label className="signup-form-label">Username</label>
                        <input type="text"
                            value={this.state.handle}
                            onChange={this.update('handle')}
                            placeholder="Username"
                        />
                        <label className="signup-form-label">First Name</label>
                        <input type="text"
                            value={this.state.firstName}
                            onChange={this.update('firstName')}
                            placeholder="First Name"
                        />
                        <label className="signup-form-label">Last Name</label>
                        <input type="text"
                            value={this.state.lastName}
                            onChange={this.update('lastName')}
                            placeholder="Last Name"
                        />
                        <label className="signup-form-label">Date of Birth</label>
                        <input type="date"
                            value={this.state.birthdate}
                            onChange={this.update('birthdate')}
                        />
                        <label className="signup-form-label">Password</label>
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        <label className="signup-form-label">Confirm Password</label>
                        <input type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                        />
                        <input type="submit" value="Submit" />
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);