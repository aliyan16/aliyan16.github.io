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
import { MERNIconText } from '../utils/CustomIcons';

const toolIcons = {
  python: faPython,
  react: faReact,
  html: faHtml5,
  github: faGithub,
  flutter: faMobileAlt,
  sql: faDatabase,
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
  tensorflow: TensorFlowIcon,
  mern: MERNIconText
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
        {project.tools.map((tool) => {
          const label = tool.charAt(0).toUpperCase() + tool.slice(1);
          
          if (toolIcons[tool]) {
            return (
              <div key={tool} className="tool-icon-wrapper">
                <FontAwesomeIcon
                  icon={toolIcons[tool]}
                  size="2x"
                  color='black'
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
      
      <style jsx>{`
        .project-card {
          width: 300px;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
          background: white;
          margin: 15px;
          margin-top: 90px;
        }
        
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        
        .card-image {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
        }
        
        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .project-card:hover .card-image img {
          transform: scale(1.05);
        }
        
        .card-hover {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          padding: 15px;
          box-sizing: border-box;
        }
        
        .project-card:hover .card-hover {
          opacity: 1;
        }
        
        .card-hover p {
          text-align: center;
          margin-bottom: 15px;
          font-size: 14px;
        }
        
        .card-hover a {
          color: #4fc3f7;
          text-decoration: none;
          font-weight: bold;
          padding: 8px 15px;
          border: 1px solid #4fc3f7;
          border-radius: 4px;
          transition: background 0.3s ease;
        }
        
        .card-hover a:hover {
          background: #4fc3f7;
          color: white;
        }
        
        .project-card h3 {
          padding: 15px;
          margin: 0;
          text-align: center;
          font-size: 18px;
          color: #333;
        }
        
        .tool-icons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          padding: 10px 15px 20px;
          gap: 15px;
        }
        
        .tool-icon-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
        }
        
        .tool-icon-wrapper:hover .tooltip {
          visibility: visible;
          opacity: 1;
          transform: translateY(-100%);
        }
        
        .tooltip {
          visibility: hidden;
          opacity: 0;
          position: absolute;
          top: -10px;
          background: #333;
          color: white;
          padding: 5px 10px;
          border-radius: 4px;
          font-size: 12px;
          white-space: nowrap;
          transition: all 0.3s ease;
          transform: translateY(0);
          height: 10px;
        }
        
        .tooltip:after {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          margin-left: -5px;
          border-width: 5px;
          border-style: solid;
          padding:5px;
          height: 5px;
          border-color: #333 transparent transparent transparent;
        }
      `}</style>
    </div>
  );
}

export default ProjectCard;