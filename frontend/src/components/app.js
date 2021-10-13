import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import TagAlongFormContainer from './tagalongs/tagalong_form_container';
import TagAlongIndexContainer from './tagalongs/tagalong_index_container';
import { Switch } from 'react-router-dom';
import NavBar from "./navbar/nav_bar_container"
import MapContainer from './map/map_container';
import HomeContainer from './main/home'
import FooterContainer from "./main/footer"
import { Route } from 'react-router';
import '../app.scss'
// import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => (
    <div>
        <div className="body">
            <div className="header">
                <NavBar /> 
            </div>
                <Switch>
                    <AuthRoute exact path="/login" component={LoginFormContainer} />
                    <AuthRoute exact path="/signup" component={SignupFormContainer} />
                    <ProtectedRoute exact path="/newtagalong" component={TagAlongFormContainer} />
                    <ProtectedRoute exact path="/tagalongs" component={TagAlongIndexContainer} />
                    <Route path="/map/:TagID" component={MapContainer}/>
                    <Route path="/" component={HomeContainer}/>
                </Switch>
            <div className="background"></div>  
        </div> 
        <footer>
            <FooterContainer/>
        </footer>
    </div>
);

export default App;