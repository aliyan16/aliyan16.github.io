import React from "react";
import '../components/componentCss/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedin } from "../utils/icons.js";


function Contact(){
    return(
        <div className="Contact-div">
            <h3>Contact Me</h3>
            <div  className="Contact-grid">
                <div className="Contact-card">
                    <div className="Contact-content">
                        <ul>
                            <li><a href="https://github.com/aliyan16" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="3x" color="white" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="Contact-card">
                    <div className="Contact-content">
                        <ul>
                            <li><a href="https://www.linkedin.com/in/muhammad-aliyan-b0525b26b/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="3x" color="white" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Contact