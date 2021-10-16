import React from "react"
import './resources.scss'
import SAH from "./img/SAH.jpeg"
import TrevorProject from "./img/trevor_project.jpeg"
import SPL from "./img/SPL_logo.jpeg"

const Resources = () => {
    return (
        <div className="resource-main">
            <div className="resource-box">
                <h1 className="resource-title">Stop Asian American and Pacific Islander Hate</h1>
                    <div className="resources-info">
                        <a href="https://stopaapihate.org/" target="_blank">
                            <img className="resources-img"src={SAH}/>
                        </a>
                        <div className="info-para-r">In response to the alarming escalation in xenophobia and bigotry resulting from the COVID-19 pandemic, 
                            the Asian Pacific Policy and Planning Council (A3PCON), Chinese for Affirmative Action (CAA),
                            and the Asian American Studies Department of San Francisco State University launched the Stop AAPI Hate coalition on March 19, 2020. 
                            The coalition tracks and responds to incidents of hate, violence, harassment, discrimination, shunning, and child bullying against Asian 
                            Americans and Pacific Islanders in the United States. You can visit their website <a href="https://stopaapihate.org/"  target="_blank">here</a>
                        </div>
                    </div>
            </div>
            <div className="resource-box">
                <h1 className="resource-title">The Trevor Project</h1>
                <div className="resources-info">
                        <a href="https://www.thetrevorproject.org/explore/" target="_blank">
                            <img className="resources-img"src={TrevorProject}/>
                        </a>
                        <div className="info-para-r">The Trevor Project is an American nonprofit organization founded in 1998 focused on suicide prevention efforts among 
                        lesbian, gay, bisexual, transgender, queer, and questioning youth. Through a toll-free telephone number, it operates The Trevor Lifeline, a confidential 
                        service that offers trained counselors. More information is available <a href="https://www.thetrevorproject.org/explore/"  target="_blank">here</a>
                        </div>
                    </div>
            </div>
            <div className="resource-box">
                <h1 className="resource-title">Southern Poverty Law Center</h1>
                    <div className="resources-info">
                        <a href="https://www.splcenter.org/reporthate" target="_blank">
                            <img className="resources-img"src={SPL}/>
                        </a>
                        <div className="info-para-r">The SPLC is a catalyst for racial justice in the South and beyond, working in partnership with communities to dismantle white supremacy, strengthen 
                        intersectional movements, and advance the human rights of all people. You can report a hate incident <a href="https://www.splcenter.org/reporthate"  target="_blank">here</a>
                        </div>
                    </div>
            </div>
        </div>

    )
}

export default Resources