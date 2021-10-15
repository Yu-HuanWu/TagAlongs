import React from "react"
import jim from "./img/jim.jpeg"
import john from "./img/john.jpeg"
import tony from "./img/tony.jpeg"
import Yu from "./img/Yu.jpeg"


const AboutUs = () => {
    return (
        <div className="main-textbox">
            <h1 className="about-us-header">Meet The Team</h1>

            <div className="textbox">
            <div className="photo-name">Yu-Huan Wu</div>
                <div className="personal-info">
                    <img className="headshots" src={Yu} alt="Yu-Huan W profile pic"/>
                    <p className="bio">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </p>
                </div>
            </div>
            <div className="textbox">
                <div className="photo-name">Tony Zhang</div>
                <div className="personal-info">
                    <img className="headshots" src={tony} alt="Tony Z profile pic"/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </p>
                </div>
            </div>
            <div className="textbox">
            <div className="photo-name">John Feng</div>
                <div className="personal-info">
                    <img className="headshots" src={john} alt="John F profile pic"/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </p>
                </div>
            </div>
            <div className="textbox">
            <div className="photo-name">Jim Nardi</div>
                <div className="personal-info">
                    <img className="headshots" src={jim} alt="Jim N profile pic"/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs