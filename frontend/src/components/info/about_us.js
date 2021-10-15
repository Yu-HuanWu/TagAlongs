import React from "react"
import jim from "./img/jim.jpeg"
import john from "./img/john.jpeg"
import tony from "./img/tony.jpeg"
import Yu from "./img/Yu.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";



const AboutUs = () => {
    return (
        <div className="main-textbox">
            <h1 className="about-us-header">Meet The Team</h1>

            <div className="textbox">
                <div className="photo-name">Yu-Huan Wu</div>
                    <div className="personal-info">
                        <img className="headshots" src={Yu} alt="Yu"/>
                            <div className="bio-links">
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
                </div>
            <div className="textbox">
                <div className="photo-name">Tony Zhang</div>
                    <div className="personal-info">
                        <img className="headshots" src={tony} alt="Tony"/>
                            <div className="bio-links">
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
                </div>
            <div className="textbox">
                <div className="photo-name">John Feng</div>
                    <div className="personal-info">
                        <img className="headshots" src={john} alt="John"/>
                            <div className="bio-links">
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
                </div>
            <div className="textbox">
                <div className="photo-name">Jim Nardi</div>
                    <div className="personal-info">
                        <img className="headshots" src={jim} alt="Jim"/>
                            <div className="bio-links">
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