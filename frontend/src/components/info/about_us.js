import React from "react"
import jim from "./img/jim.jpeg"
import john from "./img/john.jpeg"
import tony from "./img/tony.jpeg"
import Yu from "./img/Yu.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
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
                            <p className="bio">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            </p>
                            <div className="links">
                                <a href="https://github.com/Yu-HuanWu" target="_blank">
                                        <FontAwesomeIcon icon={faGithub} />
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
                            <p className="bio">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            </p>
                            <div className="links">
                                <a href="https://github.com/tozhang665" target="_blank">
                                        <FontAwesomeIcon icon={faGithub} />
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
                                <p className="bio">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                </p>
                                <div className="links">
                                    <a href="https://github.com/atjohnfeng" target="_blank">
                                            <FontAwesomeIcon icon={faGithub} />
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
                            <p className="bio">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            </p>
                            <div className="links">
                                <a href="https://github.com/jnardi1223" target="_blank">
                                        <FontAwesomeIcon icon={faGithub} />
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