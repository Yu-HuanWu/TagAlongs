import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import TagAlongFormContainer from './tagalongs/tagalong_form_container';
import { Switch } from 'react-router-dom';
import NavBar from "./navbar/nav_bar"
import '../app.scss'

const App = () => (
    <div className="body">
        <div className="splash">
            <div className="header">
                <NavBar /> 
            </div>
            <div className="main">
                <Switch>
                    {/* <AuthRoute exact path="/" component={MainPage} /> */}
                    <AuthRoute exact path="/login" component={LoginFormContainer} />
                    <AuthRoute exact path="/signup" component={SignupFormContainer} />
                    <ProtectedRoute exact path="/newtagalong" component={TagAlongFormContainer} />
                </Switch>
            </div>
        </div>
    </div>

);

export default App;