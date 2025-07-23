import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPython,
  faReact,
  faHtml5,
  faGithub,
  faDatabase,
  faMobileAlt,
  faFileCode
} from '../utils/icons';
import {
  ArduinoIcon,
  ESP32Icon,
  RaspberryPiIcon,
  OpenCVIcon,
  DjangoIcon,
  LibrosaIcon,
  CppIcon,
  TensorFlowIcon
} from '../utils/CustomIcons';

import {MERNIconText} from '../utils/CustomIcons'



const toolIcons = {
  python: faPython,
  react: faReact,
  html: faHtml5,
  github: faGithub,
  flutter:faMobileAlt,
  sql:faDatabase,
  mediapipe: faFileCode
  
};
const customToolIcons = {
  arduino: ArduinoIcon,
  esp32: ESP32Icon,
  raspberrypi: RaspberryPiIcon,
  opencv: OpenCVIcon,
  django: DjangoIcon,
  librosa: LibrosaIcon,
  cpp: CppIcon,
  tensorflow:TensorFlowIcon,
  mern:MERNIconText
};


function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="card-image">
        <img src={project.image} alt={project.title} />
        <div className="card-hover">
          <p>{project.description}</p>
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Visit Code</a>
        </div>
      </div>
      <h3>{project.title}</h3>
      <div className="tool-icons">
        <div className="tool-icons">
  {project.tools.map((tool) => {
    const label = tool.charAt(0).toUpperCase() + tool.slice(1);
    
    if (toolIcons[tool]) {
      return (
        <div key={tool} className="tool-icon-wrapper">
          <FontAwesomeIcon
            icon={toolIcons[tool]}
            size="2x"
          />
          <span className="tooltip">{label}</span>
        </div>
      );
    } else if (customToolIcons[tool]) {
      const CustomIcon = customToolIcons[tool];
      return (
        <div key={tool} className="tool-icon-wrapper">
          <CustomIcon />
          <span className="tooltip">{label}</span>
        </div>
      );
    } else {
      return (
        <div key={tool} className="tool-icon-wrapper">
          <img
            src={`/icons/${tool}.png`}
            alt={tool}
            style={{ width: '30px' }}
          />
          <span className="tooltip">{label}</span>
        </div>
      );
    }
  })}
</div>

      </div>
    </div>
  );
}
export default ProjectCard