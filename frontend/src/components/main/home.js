import Carousel from "./carousel"
import {Link } from "react-router-dom"
import React from "react"

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    render() {

        return (
            <div className="home">
                <div className="carousel-top">
                    <Carousel />
                </div>
                <div className="buffer"/>
                <div className="home-bottom">
                    <div className="bottom-textbox">
                        <div className="info-box">
                            <h1 className="info-title">Who?</h1>
                            <br />
                            <p>Our volunteer program is a welcoming open community that shares a passion for helping others. 
                                Volunteers and users come from all walks of life and deeply care about their neighbors and their safety.</p>
                        </div>
                        <div className="info-box">
                            <h1 className="info-title">What?</h1>
                            <br />
                            <p>TagAlongs is a volunteer-based Buddy system application that allows users to request companionship for their daily routes or activities. 
                                Volunteers contribute by accepting TagAlongs in their area, meeting with the user, and providing a safe environment for the user to travel in.</p>
                        </div>
                        <div className="info-box">
                            <h1 className="info-title">How?</h1>
                            <br/>
                            <p>Please sign up and<Link to="/whatsatagalong"> read more </Link> about how to use our service for yourself or a loved one. Or sign up to be a volunteer!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home; 
