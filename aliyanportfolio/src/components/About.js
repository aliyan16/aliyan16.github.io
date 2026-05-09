import React from "react";
import Myimage from '../images/AliyanBg.png'
import './componentCss/About.css'
function About(){
    return(
        <div className="about-container">
            <div className="about-text-container">
                <p className="about-eyebrow">Computer Engineer • Full-Stack Engineer</p>
                <h3>I am Muhammad Aliyan</h3>
                <hr/>
                <p>
                  I am a Computer Engineering graduate from NUST-CEME, graduating in May 2026, with a strong focus on building real-world software and hardware systems. <br/><br/>
                  I have professional full-stack development experience, including working as a Full Stack Engineer at Zapply (Intern and then Full-Time) and at 3Dim Engineering Solutions. Across these roles, I have built production-grade web applications, handled backend integrations, and delivered scalable features using modern development practices. <br/><br/>
                  Alongside software, I have a deep interest in hardware and embedded systems. My Final Year Project (FYP) centered on hardware-based system design and practical implementation, supported by work in processor design concepts such as single-cycle and multicycle architectures. <br/><br/>
                  My broader technical foundation includes machine learning, computer vision, and full-stack engineering, and I enjoy solving problems that combine intelligent software with dependable system design.
                </p>
            </div>
            <div className="about-image-container">
                <div className="about-image-frame">
                    <img src={Myimage} className="about-image" alt="Muhammad Aliyan"/>
                </div>
            </div>
        </div>
    )
}

export default About
