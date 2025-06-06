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

import {TensorFlowIcon,KerasIcon,LibrosaIcon,OpenCVIcon,NumpyIcon,ScikitLearnIcon,PandasIcon,MatplotlibIcon,SeabornIcon,DartIcon,MongoDBIcon,JavaIcon,OSModuleIcon,CppIcon} from '../utils/CustomIcons'
const SkillItem = ({ icon, label }) => (
  <li>
    <span className="skill-icon" title={label}>
      {icon}
    </span>
    {label}
  </li>
);
function Tools() {
  return (
    <div className="tools-section" id="skills">
      <h2 className="section-title">My Skills & Tools</h2>

      <div className="skills-grid">
        <div className="skills-category">
          <h3><FontAwesomeIcon icon={faBrain} /> Machine Learning & Deep Learning</h3>
          <ul>
            <SkillItem icon={<FontAwesomeIcon icon={faPython} />} label="Python" />
            <SkillItem icon={<TensorFlowIcon />} label="TensorFlow" />
            <SkillItem icon={<KerasIcon />} label="Keras" />
            <SkillItem icon={<ScikitLearnIcon />} label="Scikit-Learn" />
            <SkillItem icon={<OpenCVIcon />} label="OpenCV" />
            <SkillItem icon={<LibrosaIcon />} label="Librosa" />
            <SkillItem icon={<NumpyIcon />} label="NumPy" />
          </ul>
        </div>

        <div className="skills-category">
          <h3><FontAwesomeIcon icon={faChartBar} /> Data Analysis & Visualization</h3>
          <ul>
            <SkillItem icon={<PandasIcon />} label="Pandas" />
            <SkillItem icon={<MatplotlibIcon />} label="Matplotlib" />
            <SkillItem icon={<SeabornIcon />} label="Seaborn" />
            <SkillItem icon={<FontAwesomeIcon icon={faChartBar} />} label="Plotly" />
          </ul>
        </div>

        <div className="skills-category">
          <h3><FontAwesomeIcon icon={faReact} /> Web Development</h3>
          <ul>
            <SkillItem icon={<FontAwesomeIcon icon={faReact} />} label="ReactJS" />
            <SkillItem icon={<FontAwesomeIcon icon={faHtml5} />} label="HTML" />
            <SkillItem icon={<FontAwesomeIcon icon={faCss3Alt} />} label="CSS" />
            <SkillItem icon={<FontAwesomeIcon icon={faJs} />} label="JavaScript" />
            <SkillItem icon={<FontAwesomeIcon icon={faFlask} />} label="Flask (Learning)" />
            <SkillItem icon={<FontAwesomeIcon icon={faWordpress} />} label="WordPress" />
            <SkillItem icon={<FontAwesomeIcon icon={faShopify} />} label="Shopify" />
          </ul>
        </div>

        <div className="skills-category">
          <h3><FontAwesomeIcon icon={faMobileAlt} /> Mobile & Full-Stack Development</h3>
          <ul>
            <SkillItem icon={<FontAwesomeIcon icon={faMobileAlt} />} label="Flutter" />
            <SkillItem icon={<DartIcon />} label="Dart" />
            <SkillItem icon={<FontAwesomeIcon icon={faDatabase} />} label="Django" />
          </ul>
        </div>

        <div className="skills-category">
          <h3><FontAwesomeIcon icon={faDatabase} /> Databases & Backend</h3>
          <ul>
            <SkillItem icon={<FontAwesomeIcon icon={faDatabase} />} label="SQL (MySQL, PostgreSQL)" />
            <SkillItem icon={<MongoDBIcon />} label="MongoDB" />
            <SkillItem icon={<FontAwesomeIcon icon={faFileCode} />} label="HTTP/API Integration" />
          </ul>
        </div>

        <div className="skills-category">
          <h3><FontAwesomeIcon icon={faGitAlt} /> Version Control & Collaboration</h3>
          <ul>
            <SkillItem icon={<FontAwesomeIcon icon={faGitAlt} />} label="Git" />
            <SkillItem icon={<FontAwesomeIcon icon={faGithub} />} label="GitHub" />
            <SkillItem icon={<FontAwesomeIcon icon={faCodeBranch} />} label="DVC" />
          </ul>
        </div>

        <div className="skills-category">
          <h3><FontAwesomeIcon icon={faCogs} /> MLOps & Model Deployment</h3>
          <ul>
            <SkillItem icon={<FontAwesomeIcon icon={faVial} />} label="MLflow" />
            <SkillItem icon={<FontAwesomeIcon icon={faDocker} />} label="Docker (Learning)" />
            <SkillItem icon={<FontAwesomeIcon icon={faCogs} />} label="CI/CD Pipelines" />
            <SkillItem icon={<FontAwesomeIcon icon={faCloud} />} label="Model Monitoring & Deployment" />
          </ul>
        </div>

        <div className="skills-category">
          <h3><FontAwesomeIcon icon={faFileCode} /> Programming Languages & Tools</h3>
          <ul>
            <SkillItem icon={<FontAwesomeIcon icon={faPython} />} label="Python" />
            <SkillItem icon={<FontAwesomeIcon icon={faJs} />} label="JavaScript" />
            <SkillItem icon={<CppIcon />} label="C++" />
            <SkillItem icon={<JavaIcon />} label="Java" />
            <SkillItem icon={<OSModuleIcon />} label="OS Module" />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Tools;