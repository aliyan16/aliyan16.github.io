import React from "react";
import FiverrImg from '../images/fiverr.png';
import ComppecImg from '../images/comppec.png';
import '../components/componentCss/Experience.css';
import CareImg from '../images/care.png'

function Experience() {
    return (
        <div className="experience-container">
            <h3>Experience</h3>
            <div className="experience-grid">
                 <div className="experience-card">
                    <div className="experience-content">
                        <img src='../../images/3dim_engineering_solutions_logo.jpg' alt="3Dim" className="experience-icon" />
                        <div className="experience-details">
                            <h4>Full Stack Developer at 3Dim</h4>
                            <p>August 2025 - present</p>
                        </div>
                    </div>
                </div>
                <div className="experience-card">
                    <div className="experience-content">
                        <img src='../../images/Zapply.png' alt="Zapply" className="experience-icon" />
                        <div className="experience-details">
                            <h4>Full Stack Developer at Zapply</h4>
                            <p>May 2025 - August 2025</p>
                        </div>
                    </div>
                </div>
                <div className="experience-card">
                    <div className="experience-content">
                        <img src={CareImg} alt="Care" className="experience-icon" />
                        <div className="experience-details">
                            <h4>AL/ML Intern</h4>
                            <p>March 2025 - August 2025</p>
                        </div>
                    </div>
                </div>
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