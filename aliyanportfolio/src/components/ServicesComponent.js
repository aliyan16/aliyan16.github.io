import React from 'react'
import {MERNIconText,TensorFlowIcon,} from '../utils/CustomIcons'
import {faPython,faBrain} from '../utils/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ServicesComponent() {
  return (
    <>
    <div className="tools-section" id="skills">
        <h2 className="section-title">My Services</h2>
    
        <div className="skills-grid">
            <div className="skills-category">
                <h3><MERNIconText /> MERN Full Stack Web App</h3>
                <p>
                    Build scalable, modern web applications with the MERN stack (MongoDB, Express.js, React, Node.js). 
                    I deliver end-to-end solutions including:
                </p>
                <ul>
                    <li>Custom RESTful API development <br/> with Express.js & Node.js</li>
                    <li>Interactive frontends using<br/> React.js with responsive design</li>
                    <li>NoSQL database architecture with<br/>MongoDB for flexible data management</li>
                    <li>Secure user authentication (JWT/OAuth)<br/> and role-based access control</li>
                    <li>Integration with third-party<br/> APIs (payment gateways, maps, etc.)</li>
                    {/* <li>Deployment to cloud platforms (AWS, Vercel, Heroku)</li> */}
                </ul>
                {/* <p>
                    <strong>Proven Experience:</strong> Mission Logging System (Flutter+Django), Shopify/WP customization, and React-based portfolios.
                </p> */}
            </div>
            <div className="skills-category">
                <h3><FontAwesomeIcon icon={faPython} /><TensorFlowIcon /> Machine Learning & Deep Learning</h3>
                <p>
                    End-to-end AI solutions leveraging TensorFlow, Keras, and classical algorithms:
                </p>
                <ul>
                    <li><strong>Computer Vision:</strong> Object detection (OpenCV/MediaPipe),<br/> CNN-based classification <br/>(Plant Disease Prediction, 88% accuracy)</li>
                    <li><strong>Audio/Signal Processing:</strong> MFCC-based sound<br/> classification (UrbanSound8K)</li>
                    <li><strong>Predictive Modeling:</strong> Regression (CO2 Emissions),<br/> classification (Breast Cancer NN,<br/> Logistic Regression)</li>
                    <li><strong>Edge AI:</strong> Low-power deployments<br/> (Raspberry Pi, Arduino) for real-time systems<br/> (Anti-Sleep Detection)</li>
                    <li><strong>MLOps:</strong> Model versioning (DVC),<br/> containerization (Docker),<br/> and Flask API deployments</li>
                </ul>
                <p>
                    <strong>Featured Projects:</strong> Autonomous Vehicle (OpenCV), Hand/Face Detection (MediaPipe), and custom client models on Fiverr.
                </p>
            </div>
    
        </div>
    </div>
    </>
  )
}

export default ServicesComponent