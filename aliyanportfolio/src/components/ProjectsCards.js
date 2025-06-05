import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPython,
  faReact,
  faHtml5,
  faGithub,
  faDatabase,
  faMobileAlt,
  faFileCode,
  faBrain
  // ...other icons
} from '../utils/icons';
import {
  ArduinoIcon,
  ESP32Icon,
  RaspberryPiIcon,
  MediaPipeIcon,
  OpenCVIcon,
  DjangoIcon,
  LibrosaIcon,
  CppIcon
} from '../utils/CustomIcons';



const toolIcons = {
  python: faPython,
  react: faReact,
  html: faHtml5,
  github: faGithub,
  flutter:faMobileAlt,
  sql:faDatabase,
  tensorflow:faBrain,
  
};
const customToolIcons = {
  arduino: ArduinoIcon,
  esp32: ESP32Icon,
  raspberrypi: RaspberryPiIcon,
  mediapipe: MediaPipeIcon,
  opencv: OpenCVIcon,
  django: DjangoIcon,
  librosa: LibrosaIcon,
  cpp: CppIcon
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
    if (toolIcons[tool]) {
      return (
        <FontAwesomeIcon
          key={tool}
          icon={toolIcons[tool]}
          title={tool}
          size="2x"
          style={{ margin: '0 5px' }}
        />
      );
    } else if (customToolIcons[tool]) {
      const CustomIcon = customToolIcons[tool];
      return <CustomIcon key={tool} />;
    } else {
      return (
        <img
          key={tool}
          src={`/icons/${tool}.png`}
          alt={tool}
          title={tool}
          style={{ width: '30px', margin: '0 5px' }}
        />
      );
    }
  })}
</div>

      </div>
    </div>
  );
}
export default ProjectCard