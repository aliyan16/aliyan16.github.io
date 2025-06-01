import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import "./componentCss/Certificates.css"; // Create this CSS file for styling

function Certificates() {
    const certificates = [
        {
            title: "Machine Learning Specialization",
            issuer: "Coursera (Stanford University)",
            date: "2023",
            skills: ["Machine Learning", "Python", "TensorFlow"],
            link: "#"
        },
        {
            title: "Deep Learning Specialization",
            issuer: "Coursera (deeplearning.ai)",
            date: "2023",
            skills: ["Neural Networks", "CNN", "RNN"],
            link: "#"
        },
        {
            title: "Data Science Professional Certificate",
            issuer: "COMPPEC",
            date: "2022",
            skills: ["Data Analysis", "Pandas", "Matplotlib"],
            link: "#"
        },
        {
            title: "Web Development Bootcamp",
            issuer: "COMPPEC",
            date: "2021",
            skills: ["HTML/CSS", "JavaScript", "React"],
            link: "#"
        }
    ];

    return (
        <div className="certificates-section">
            <h2 className="section-title">
                <FontAwesomeIcon icon={faCertificate} className="section-icon" />
                Certifications
            </h2>
            
            <div className="certificates-grid">
                {certificates.map((cert, index) => (
                    <div className="certificate-card" key={index}>
                        <div className="certificate-header">
                            <h3 className="certificate-title">{cert.title}</h3>
                            <span className="certificate-date">{cert.date}</span>
                        </div>
                        <p className="certificate-issuer">{cert.issuer}</p>
                        
                        <div className="certificate-skills">
                            {cert.skills.map((skill, i) => (
                                <span key={i} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                        
                        <a 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="certificate-link"
                        >
                            View Certificate 
                            <FontAwesomeIcon icon={faExternalLinkAlt} className="link-icon" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Certificates;