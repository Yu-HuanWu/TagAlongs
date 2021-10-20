import React from "react"
import jim from "./img/jim.jpeg"
import john from "./img/john.jpeg"
import tony from "./img/tony.jpeg"
import Yu from "./img/Yu.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngellist, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import './info.scss'



const AboutUs = () => {
    return (
        <div className="main-textbox">
            <h1 className="about-us-header">Meet The Team</h1>

            <div className="about-us-section">
                <div className="textbox">
                    <div className="photo-name">Yu-Huan Wu</div>
                        <div className="personal-info">
                            <div className="headshot-container">
                                <h1 className="headshot-title">TEAM <br/> LEAD </h1>
                                <img className="headshots" src={Yu}/>
                            </div>
                        <p className="bio">As the project lead, Yu-Huan enjoyed supporting his team of capable full stack developers, by setting up the database using MongoDB and implementing user authentication.
                            He also had fun expanding accessibility by restructuring TagAlongs to be mobile-friendly.
                            Yu-Huan is passionate about serving members of his community, which is his inspiration behind developing TagAlongs. 
                        <br/><br/>Yu-Huan's favorite cookies are fudge-covered oreos.
                            </p>
                            <div className="links">
                                <a href="https://github.com/Yu-HuanWu" target="_blank">
                                        <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="https://angel.co/u/yu-huan-wu" target="_blank">
                                        <FontAwesomeIcon icon={faAngellist} />
                                </a>
                                <a href="https://www.linkedin.com/in/yu-huan-wu/" target="_blank">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                        </div>
                </div>
                <div className="textbox">
                    <div className="photo-name">Tony Zhang</div>
                        <div className="personal-info">
                            <div className="headshot-container">
                                <h1 className="headshot-title">BACK <br/> END <br /> LEAD </h1>
                                <img className="headshots" src={tony}/>
                            </div>
                        <p className="bio">Tony is a full stack developer in the San Francisco Bay Area. 
                        On his spare time, he enjoys wandering the bay area to look for new foods to try out. 
                        For this project, he had a lot of fun developing the backend routes alongside axios and learning how to handle data. 
                        <br/><br/>Tony’s favorite cookies are matcha macadamia cookies.
                            </p>
                            <div className="links">
                                <a href="https://github.com/tozhang665" target="_blank">
                                        <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="https://angel.co/u/tony-zhang-33" target="_blank">
                                    <FontAwesomeIcon icon={faAngellist} />
                                </a>
                                <a href="https://www.linkedin.com/in/tonykzhang/" target="_blank">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                            </div>
                    </div>
                <div className="textbox">
                    <div className="photo-name">John Feng</div>
                        <div className="personal-info">
                            <div className="headshot-container">
                                <h1 className="headshot-title">FLEX </h1>
                                <img className="headshots" src={john} />
                            </div>
                        <p className="bio">When he's not coding, John is probably reading a book or deciding what book to read next. 
                        He spent his time writing TagAlong's frontend for request creation, as well as frontend components for user authentication. 
                        John also enjoys providing the user an experience that is lasting, which is why coding out the user profile for achievements, avatar selection, and history was a joy. 
                        <br/><br/>John's favorite cookies are crispy white chocolate macadamia.
                                </p>
                                <div className="links">
                                    <a href="https://github.com/atjohnfeng" target="_blank">
                                            <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                    <a href="https://angel.co/u/john-feng-5" target="_blank">
                                        <FontAwesomeIcon icon={faAngellist} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/john-feng-316220215/" target="_blank">
                                            <FontAwesomeIcon icon={faLinkedin} />
                                    </a>
                                </div>
                            </div>
                    </div>
                <div className="textbox">
                    <div className="photo-name">Jim Nardi</div>
                        <div className="personal-info">
                            <div className="headshot-container">
                                <h1 className="headshot-title2">FRONT <br/> END <br /> LEAD </h1>
                                <img className="headshots" src={jim} />
                            </div>
                        <p className="bio">Jim is a full stack developer based in the New York Metropolitan area. He has always 
                        enjoyed volunteering for numerous organizations across the globe in his spare time. Jim loved handling 
                        some of the challenges that came with implementing certain features on the frontend, especially when designing 
                        and styling the carousel on the splash page.
                        <br/><br/>Jim's favorite cookies are snickerdoodles.
                            </p>
                            <div className="links">
                                <a href="https://github.com/jnardi1223" target="_blank">
                                        <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="https://angel.co/u/jim-nardi" target="_blank">
                                    <FontAwesomeIcon icon={faAngellist} />
                                </a>
                                <a href="https://www.linkedin.com/in/jim-nardi-3355a11a0/" target="_blank">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs