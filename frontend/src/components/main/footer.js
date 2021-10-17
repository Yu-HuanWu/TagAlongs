import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import "./footer.scss"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
          <div className="footer-container-center">
            {/* <div> */}
              <a href="https://github.com/Yu-HuanWu/TagAlongs" target="_blank" className="footer-github-repo-link">
                Github Repo:
                <FontAwesomeIcon icon={faGithub} />
              </a>
            {/* </div> */}

            {/* <div className="footer-about-us"> */}
              <Link to="/aboutus" className="footer-text-design">About Us</Link>
            {/* </div> */}

            {/* <div> */}
              <Link to="/resources" className="footer-text-design">Resources</Link>
            {/* </div> */}
          </div>
        </div>
    )
}

export default Footer; 