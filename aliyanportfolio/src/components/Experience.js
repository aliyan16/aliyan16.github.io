import React from "react";
import FiverrImg from '../images/fiverr.png';
import ComppecImg from '../images/comppec.png';
import '../components/componentCss/Experience.css';

function Experience() {
    return (
        <div className="experience-container">
            <h3>Experience</h3>
            <div className="experience-grid">
                <div className="experience-card">
                    <div className="experience-content">
                        <img src={FiverrImg} alt="Fiverr" className="experience-icon" />
                        <div className="experience-details">
                            <h4>Web Developer</h4>
                            <p>2023 - Present</p>
                        </div>
                    </div>
                </div>
                
                <div className="experience-card">
                    <div className="experience-content">
                        <img src={ComppecImg} alt="Comppec" className="experience-icon" />
                        <div className="experience-details">
                            <h4>Director Web & IT</h4>
                            <p>Jan 2025 - Jun 2025</p>
                        </div>
                    </div>
                </div>
                
                <div className="experience-card">
                    <div className="experience-content">
                        <img src={ComppecImg} alt="Comppec" className="experience-icon" />
                        <div className="experience-details">
                            <h4>Deputy Director Marketing</h4>
                            <p>Jan 2024 - Jun 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;