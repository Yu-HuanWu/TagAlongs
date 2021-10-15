import React from "react"
import './resources.scss'
import SAH from "./img/SAH.jpeg"
import TrevorProject from "./img/trevor_project.jpeg"
import SPL from "./img/SPL_logo.jpeg"

const Resources = () => {
    return (
        <div className="main-textbox">
            <div className="textbox">
                <h1 className="resource-title">Stop Asian American and Pacific Islander Hate</h1>
                    <div className="resources-box">
                        <img className="resources-img"src={SAH}/>
                        <div className="info-para-r">In response to the alarming escalation in xenophobia and bigotry resulting from the COVID-19 pandemic, 
                            the Asian Pacific Policy and Planning Council (A3PCON), Chinese for Affirmative Action (CAA),
                            and the Asian American Studies Department of San Francisco State University launched the Stop AAPI Hate coalition on March 19, 2020. 
                            The coalition tracks and responds to incidents of hate, violence, harassment, discrimination, shunning, and child bullying against Asian 
                            Americans and Pacific Islanders in the United States. You can visit their website <a href="https://stopaapihate.org/"  target="_blank">here</a>
                        </div>
                    </div>
            </div>
            <div className="textbox">
                <h1 className="resource-title">The Trevor Project</h1>
                    <div className="resources-box">
                        <div className="info-para-r">The Trevor Project is an American nonprofit organization founded in 1998 focused on suicide prevention efforts among 
                        lesbian, gay, bisexual, transgender, queer, and questioning youth. Through a toll-free telephone number, it operates The Trevor Lifeline, a confidential 
                        service that offers trained counselors. More information is available <a href="https://www.thetrevorproject.org/donate/?gclid=EAIaIQobChMIvYvWwpHL8wIV_w2tBh1Juw5BEAAYASAAEgIY6fD_BwE"  target="_blank">here</a>
                        </div>
                        <img className="resources-img"src={TrevorProject}/>
                    </div>
            </div>
            <div className="textbox">
                <h1 className="resource-title">The Trevor Project</h1>
                    <div className="resources-box">
                        <img className="resources-img"src={SPL}/>
                        <div className="info-para-r">The SPLC is a catalyst for racial justice in the South and beyond, working in partnership with communities to dismantle white supremacy, strengthen 
                        intersectional movements, and advance the human rights of all people. More information is available <a href="https://www.splcenter.org/"  target="_blank">here</a>
                        </div>
                    </div>
            </div>
        </div>

    )
}

export default Resources