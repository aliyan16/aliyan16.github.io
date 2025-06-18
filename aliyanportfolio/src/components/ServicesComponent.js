import React from 'react'
import {MERNIconText,TensorFlowIcon,} from '../utils/CustomIcons'
import {faPython} from '../utils/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './componentCss/Tools.css';
import './componentCss/services.css'
function ServicesComponent() {
  return (
    <>
    <div className="tools-section" id="skills">
        <h2 className="section-title">My Services</h2>
    
        <div className="skills-grid">
            <div className="skills-category services-category">
                <h3><MERNIconText /> MERN Full Stack Web App</h3>
                <p>
                    Build scalable, modern web applications with the MERN stack (MongoDB, Express.js, React, Node.js). 
                    I deliver end-to-end solutions including:
                </p>
                <ul>
                    <li>Custom RESTful API development <br/> with Express.js & Node.js</li>
                    <li>Interactive frontends using<br/> React.js with responsive design</li>
                    <li>MongoDB for data management</li>
                    <li>Secure user authentication</li>
                    <li>Integration with third-party APIs</li>
                    {/* <li>Deployment to cloud platforms (AWS, Vercel, Heroku)</li> */}
                </ul>
                {/* <p>
                    <strong>Proven Experience:</strong> Mission Logging System (Flutter+Django), Shopify/WP customization, and React-based portfolios.
                </p> */}
            </div>
            <div className="skills-category services-category">
                <h3><FontAwesomeIcon icon={faPython} /><TensorFlowIcon /> Machine Learning & Deep Learning</h3>
                <p>
                    End-to-end AI solutions leveraging TensorFlow, Keras, and classical algorithms:
                </p>
                <ul>
                    <li><strong>Computer Vision</strong></li>
                    <li><strong>Audio/Signal Processing</strong></li>
                    <li><strong>Predictive Modeling</strong></li>
                    <li><strong>Edge AI</strong></li>
                    <li><strong>MLOps</strong></li>
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