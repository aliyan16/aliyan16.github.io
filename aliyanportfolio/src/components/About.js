import React from "react";
import Myimage from '../images/AliyanBg.png'
import './componentCss/About.css'
function About(){
    return(
        <div className="about-container">
            <div className="about-text-container">
                <h3>I am Muhammad Aliyan</h3>
                <hr/>
                <p>A Computer Engineering student at NUST-CEME with a passion for building intelligent systems and robust applications. My expertise lies in machine learning, deep learning, and full-stack development. I have a proven track record of designing and implementing innovative solutions, from autonomous vehicle prototypes using classical image processing to cross-platform mobile applications for mission tracking. I'm adept at leveraging technologies like TensorFlow, Keras, ReactJS, and Django to deliver impactful projects. I'm committed to continuous learning and am currently expanding my knowledge in MLOps and advanced deployment strategies to further streamline the development lifecycle.</p>
            </div>
            <div className="about-image-container">
                <img src={Myimage} className="about-image" alt="Muhammad Aliyan"/>
            </div>
        </div>
    )
}

export default About