// src/components/projectsData.js

const projects = [
  {
    id: 1,
    title: "Autonomous Vehicle System",
    image: "../images/autonomous.png",
    tools: ["python", "opencv", "raspberrypi"],
    description: "Self-driving car prototype using Raspberry Pi and classical image processing.",
    codeLink: "https://github.com/aliyan16/Autonomous-Vehicle-Classical-Image-Processing"
  },
  {
    id: 2,
    title: "Mission Logging App",
    image: "/images/MLA1.png",
    tools: ["flutter", "django", "sql"],
    description: "Cross-platform mission logging system for Pakistan Army pilots.",
    codeLink: "https://github.com/aliyan16/mission-tracking"
  },
  {
    id: 3,
    title: "Anti-Sleep Detection System",
    image: "/images/mmd2.jpg",
    tools: ["arduino", "esp32", "opencv"],
    description: "Real-time drowsiness detection and auto stop system for drivers.",
    codeLink: "https://www.linkedin.com/posts/muhammad-aliyan-b0525b26b_automotive-black-box-with-incident-analysis-activity-7288215364172181505-2ReS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIRLXUBNqn3izflLuzBbOK4tfkiIaZbzYE"
  },
  {
    id: 4,
    title: "Audio Classification with CNN",
    image: "/images/audio.jpg",
    tools: ["python", "tensorflow", "librosa"],
    description: "Classified urban sound categories using CNNs and audio features.",
    codeLink: "https://github.com/aliyan16/AudioClassificationUsingCNN"
  },
  {
    id: 5,
    title: "Real-Time Face & Hand Detection",
    image: "/images/fingerCounting.png",
    tools: ["opencv", "mediapipe"],
    description: "Hand gesture and face detection using OpenCV and MediaPipe.",
    codeLink: "https://github.com/aliyan16/Real-time-hand-fingers-Counting-Using-OpenCV"
  },
  {
    id: 6,
    title: "Mern Facebook Clone App",
    image: "/images/Mern.png",
    tools: ["mern"],
    description: "Facebook Clone From scratch",
    codeLink: "https://github.com/aliyan16/MERN-Full-Stack-App"
  },
  // {
  //   id: 6,
  //   title: "C++ Search Engine Project",
  //   image: "/images/batbrowser.jpg", // <- Add a relevant image to /public/images/
  //   tools: ["cpp", "data-structures", "graph", "dfs", "bfs"],
  //   description: "A basic C++ search engine integrating caching, hyperlink graphs, and query handling using core data structures.",
  //   codeLink: "https://github.com/aliyan16/Web-Browser-And-Search-Engine-Using-C-" // <- Replace with your actual repo URL
  // }
  /// also add c++ browser project
];

export default projects;
