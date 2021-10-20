import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import "./footer.scss"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
          <div className="footer-container-center">
              <a href="https://github.com/Yu-HuanWu/TagAlongs" target="_blank" rel="noreferrer" className="footer-github-repo-link">
                Github Repo:
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <Link to="/aboutus" className="footer-text-design">About Us</Link>

              <Link to="/resources" className="footer-text-design">Resources</Link>
          </div>
        </div>
    )
}

export default Footer; 