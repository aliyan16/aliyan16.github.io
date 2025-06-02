// src/components/projectsData.js
const projects = [
  {
    id: 1,
    title: "Autonomous Vehicle System",
    image: "/images/autonomous.jpg",
    tools: ["python", "opencv", "raspberrypi"],
    description: "Self-driving car prototype using Raspberry Pi and classical image processing.",
    codeLink: "https://github.com/aliyan16/autonomous-vehicle-system"
  },
  {
    id: 2,
    title: "Mission Logging App",
    image: "/images/mission.jpg",
    tools: ["flutter", "django", "sql"],
    description: "Cross-platform mission logging system for Pakistan Army pilots.",
    codeLink: "https://github.com/aliyan16/mission-tracking"
  },
  {
    id: 3,
    title: "Anti-Sleep Detection System",
    image: "/images/antisleep.jpg",
    tools: ["arduino", "esp32", "opencv"],
    description: "Real-time drowsiness detection and auto-stop system for drivers.",
    codeLink: "https://github.com/aliyan16/anti-sleep-detection"
  },
  {
    id: 4,
    title: "Audio Classification with CNN",
    image: "/images/audio.jpg",
    tools: ["python", "tensorflow", "librosa"],
    description: "Classified urban sound categories using CNNs and audio features.",
    codeLink: "https://github.com/aliyan16/audio-classification"
  },
  {
    id: 5,
    title: "Real-Time Face & Hand Detection",
    image: "/images/handface.jpg",
    tools: ["opencv", "mediapipe"],
    description: "Hand gesture and face detection using OpenCV and MediaPipe.",
    codeLink: "https://github.com/aliyan16/hand-face-detection"
  }
];

export default projects;
