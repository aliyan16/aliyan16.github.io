import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './componentCss/Tools.css';
// Import from centralized icons file
import {
  faPython,
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
  faDocker,
  faGitAlt,
  faGithub,
  faWordpress,
  faShopify,
  faBrain,
  faDatabase,
  faFlask,
  faMobileAlt,
  faChartBar,
  faCogs,
  faFileCode,
  faCodeBranch,
  faCloud,
  faVial
} from '../utils/icons'; // Adjust path as needed

function Tools() {
    return (
        <div className="tools-section" id="skills">
            <h2 className="section-title">My Skills & Tools</h2>

            <div className="skills-grid">
                <div className="skills-category">
                    <h3><FontAwesomeIcon icon={faBrain} /> Machine Learning & Deep Learning</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={faPython} /> Python</li>
                        <li><FontAwesomeIcon icon={faBrain} /> TensorFlow</li>
                        <li><FontAwesomeIcon icon={faBrain} /> Keras</li>
                        <li><FontAwesomeIcon icon={faChartBar} /> Scikit-Learn</li>
                        <li><FontAwesomeIcon icon={faFileCode} /> OpenCV</li>
                        <li><FontAwesomeIcon icon={faFileCode} /> Librosa</li>
                        <li><FontAwesomeIcon icon={faFileCode} /> NumPy</li>
                    </ul>
                </div>

                <div className="skills-category">
                    <h3><FontAwesomeIcon icon={faChartBar} /> Data Analysis & Visualization</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={faChartBar} /> Pandas</li>
                        <li><FontAwesomeIcon icon={faChartBar} /> Matplotlib</li>
                        <li><FontAwesomeIcon icon={faChartBar} /> Seaborn</li>
                        <li><FontAwesomeIcon icon={faChartBar} /> Plotly</li>
                    </ul>
                </div>

                <div className="skills-category">
                    <h3><FontAwesomeIcon icon={faReact} /> Web Development</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={faReact} /> ReactJS</li>
                        <li><FontAwesomeIcon icon={faHtml5} /> HTML</li>
                        <li><FontAwesomeIcon icon={faCss3Alt} /> CSS</li>
                        <li><FontAwesomeIcon icon={faJs} /> JavaScript</li>
                        <li><FontAwesomeIcon icon={faFlask} /> Flask (Learning)</li>
                        <li><FontAwesomeIcon icon={faWordpress} /> WordPress</li>
                        <li><FontAwesomeIcon icon={faShopify} /> Shopify</li>
                    </ul>
                </div>

                <div className="skills-category">
                    <h3><FontAwesomeIcon icon={faMobileAlt} /> Mobile & Full-Stack Development</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={faMobileAlt} /> Flutter</li>
                        <li><FontAwesomeIcon icon={faMobileAlt} /> Dart</li>
                        <li><FontAwesomeIcon icon={faPython} /> Django</li>
                    </ul>
                </div>

                <div className="skills-category">
                    <h3><FontAwesomeIcon icon={faDatabase} /> Databases & Backend</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={faDatabase} /> SQL (MySQL, PostgreSQL)</li>
                        <li><FontAwesomeIcon icon={faDatabase} /> MongoDB</li>
                        <li><FontAwesomeIcon icon={faFileCode} /> HTTP/API Integration (Django REST Framework, Fetch, Axios)</li>
                    </ul>
                </div>

                <div className="skills-category">
                    <h3><FontAwesomeIcon icon={faGitAlt} /> Version Control & Collaboration</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={faGitAlt} /> Git</li>
                        <li><FontAwesomeIcon icon={faGithub} /> GitHub</li>
                        <li><FontAwesomeIcon icon={faCodeBranch} /> DVC (Data Version Control)</li>
                    </ul>
                </div>

                <div className="skills-category">
                    <h3><FontAwesomeIcon icon={faCogs} /> MLOps & Model Deployment</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={faVial} /> MLflow</li>
                        <li><FontAwesomeIcon icon={faDocker} /> Docker (Learning)</li>
                        <li><FontAwesomeIcon icon={faCogs} /> CI/CD Pipelines</li>
                        <li><FontAwesomeIcon icon={faCloud} /> Model Monitoring & Deployment</li>
                    </ul>
                </div>

                <div className="skills-category">
                    <h3><FontAwesomeIcon icon={faFileCode} /> Programming Languages & Tools</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={faPython} /> Python</li>
                        <li><FontAwesomeIcon icon={faJs} /> JavaScript</li>
                        <li><FontAwesomeIcon icon={faFileCode} /> C++</li>
                        <li><FontAwesomeIcon icon={faFileCode} /> OS Module</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Tools;