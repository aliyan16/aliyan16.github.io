import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../index.css'

// Import specific brand icons (fab for Font Awesome Brands)
import {
    faPython, // [cite: 87]
    faReact, // [cite: 74, 78]
    faHtml5, // [cite: 75, 78]
    faCss3Alt, // [cite: 75, 78]
    faJs, // [cite: 75, 78]
    faDocker, // [cite: 85]
    faGitAlt, // [cite: 82]
    faGithub, // [cite: 82]
    faWordpress, // [cite: 3] - Mentioned in experience
    faShopify, // [cite: 3] - Mentioned in experience
    faFigma // Common for UI/UX, though not explicitly in resume, good to have if you use it for UI/UX design.
} from '@fortawesome/free-brands-svg-icons';

// Import specific solid icons (fas for Font Awesome Solid)
import {
    faBrain, // Represents Machine Learning / AI [cite: 68]
    faDatabase, // Represents Databases like SQL, MySQL, PostgreSQL [cite: 17, 80]
    faFlask, // Represents Flask (currently learning) [cite: 75, 79]
    faMobileAlt, // Represents Mobile Development (Flutter) [cite: 14, 77]
    faChartBar, // Represents Data Analysis & Visualization [cite: 73]
    faCogs, // Represents general tools, MLOps, CI/CD [cite: 86]
    faFileCode, // Represents general programming skills, or OS module [cite: 88]
    faCodeBranch, // Could represent version control, or DVC [cite: 83]
    faCloud, // Represents deployment concepts
    faVial // Could represent experiment tracking (MLflow) [cite: 84]
} from '@fortawesome/free-solid-svg-icons';

function Tools() {
    return (
        <div className="tools-section">
            <h2>My Skills & Tools</h2>

            <div className="skills-category">
                <h3><FontAwesomeIcon icon={faBrain} /> Machine Learning & Deep Learning</h3>
                <ul>
                    <li><FontAwesomeIcon icon={faPython} /> Python [cite: 87]</li>
                    <li><FontAwesomeIcon icon={faBrain} /> TensorFlow [cite: 2, 30, 61, 67, 68]</li>
                    <li><FontAwesomeIcon icon={faBrain} /> Keras [cite: 2, 30, 56, 57, 61, 67, 68]</li>
                    <li><FontAwesomeIcon icon={faChartBar} /> Scikit-Learn [cite: 68]</li>
                    <li><FontAwesomeIcon icon={faFileCode} /> OpenCV [cite: 2, 8, 37]</li>
                    <li><FontAwesomeIcon icon={faFileCode} /> Librosa [cite: 29, 31]</li>
                    <li><FontAwesomeIcon icon={faFileCode} /> NumPy [cite: 29, 42, 72]</li>
                    {/* For very specific ML tools like 'MediaPipe', 'Ridge', 'Lasso', 'ElasticNet' 
                        Font Awesome usually won't have direct icons. You'd typically use generic
                        icons or custom SVGs as discussed previously. */}
                </ul>
            </div>

            <div className="skills-category">
                <h3><FontAwesomeIcon icon={faChartBar} /> Data Analysis & Visualization</h3>
                <ul>
                    <li><FontAwesomeIcon icon={faChartBar} /> Pandas [cite: 72]</li>
                    <li><FontAwesomeIcon icon={faChartBar} /> Matplotlib [cite: 29, 31, 67, 73]</li>
                    <li><FontAwesomeIcon icon={faChartBar} /> Seaborn [cite: 73]</li>
                    <li><FontAwesomeIcon icon={faChartBar} /> Plotly [cite: 73]</li>
                </ul>
            </div>

            <div className="skills-category">
                <h3><FontAwesomeIcon icon={faReact} /> Web Development</h3>
                <ul>
                    <li><FontAwesomeIcon icon={faReact} /> ReactJS [cite: 3, 74, 78]</li>
                    <li><FontAwesomeIcon icon={faHtml5} /> HTML [cite: 75, 78]</li>
                    <li><FontAwesomeIcon icon={faCss3Alt} /> CSS [cite: 75, 78]</li>
                    <li><FontAwesomeIcon icon={faJs} /> JavaScript [cite: 75, 78]</li>
                    <li><FontAwesomeIcon icon={faFlask} /> Flask (Learning) [cite: 75, 79]</li>
                    <li><FontAwesomeIcon icon={faWordpress} /> WordPress [cite: 3]</li>
                    <li><FontAwesomeIcon icon={faShopify} /> Shopify [cite: 3]</li>
                </ul>
            </div>

            <div className="skills-category">
                <h3><FontAwesomeIcon icon={faMobileAlt} /> Mobile & Full-Stack Development</h3>
                <ul>
                    <li><FontAwesomeIcon icon={faMobileAlt} /> Flutter [cite: 14, 77]</li>
                    <li><FontAwesomeIcon icon={faMobileAlt} /> Dart [cite: 14, 77]</li>
                    <li><FontAwesomeIcon icon={faPython} /> Django [cite: 16, 77]</li>
                </ul>
            </div>

            <div className="skills-category">
                <h3><FontAwesomeIcon icon={faDatabase} /> Databases & Backend</h3>
                <ul>
                    <li><FontAwesomeIcon icon={faDatabase} /> SQL (MySQL, PostgreSQL) [cite: 17, 80]</li>
                    <li><FontAwesomeIcon icon={faFileCode} /> HTTP/API Integration (Django REST Framework, Fetch, Axios) [cite: 19, 81]</li>
                </ul>
            </div>

            <div className="skills-category">
                <h3><FontAwesomeIcon icon={faGitAlt} /> Version Control & Collaboration</h3>
                <ul>
                    <li><FontAwesomeIcon icon={faGitAlt} /> Git [cite: 82]</li>
                    <li><FontAwesomeIcon icon={faGithub} /> GitHub [cite: 82]</li>
                    <li><FontAwesomeIcon icon={faCodeBranch} /> DVC (Data Version Control) [cite: 83]</li>
                </ul>
            </div>

            <div className="skills-category">
                <h3><FontAwesomeIcon icon={faCogs} /> MLOps & Model Deployment</h3>
                <ul>
                    <li><FontAwesomeIcon icon={faVial} /> MLflow [cite: 84]</li>
                    <li><FontAwesomeIcon icon={faDocker} /> Docker (Learning) [cite: 85]</li>
                    <li><FontAwesomeIcon icon={faCogs} /> CI/CD Pipelines [cite: 86]</li>
                    <li><FontAwesomeIcon icon={faCloud} /> Model Monitoring & Deployment [cite: 86]</li>
                </ul>
            </div>
            {/* You could add other general programming skills or tools here as well */}
            <div className="skills-category">
                <h3><FontAwesomeIcon icon={faFileCode} /> Programming Languages & Tools</h3>
                <ul>
                    <li><FontAwesomeIcon icon={faPython} /> Python [cite: 87]</li>
                    <li><FontAwesomeIcon icon={faJs} /> JavaScript [cite: 75, 78]</li>
                    <li><FontAwesomeIcon icon={faFileCode} /> C++ [cite: 22]</li>
                    <li><FontAwesomeIcon icon={faFileCode} /> OS Module [cite: 88]</li>
                </ul>
            </div>
        </div>
    );
}

export default Tools;