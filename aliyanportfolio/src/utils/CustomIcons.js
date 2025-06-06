import React from "react";

// Arduino SVG Icon
export const ArduinoIcon = () => (
  <svg role="img" viewBox="0 0 24 24" width="30" height="30" fill="#00979D">
    <title>Arduino</title>
    <path d="M12.004 8.266a3.734 3.734 0 00-3.734 3.734 3.734 3.734 0 003.734 3.734A3.734 3.734 0 0015.738 12a3.734 3.734 0 00-3.734-3.734zm-4.56-.232a5.683 5.683 0 00-4.935 5.698 5.683 5.683 0 005.698 5.698 5.683 5.683 0 004.935-5.698 5.683 5.683 0 00-5.698-5.698zm9.128 0a5.683 5.683 0 00-4.935 5.698 5.683 5.683 0 005.698 5.698 5.683 5.683 0 004.935-5.698 5.683 5.683 0 00-5.698-5.698z"/>
  </svg>
);

// ESP32 Icon (generic chip)
export const ESP32Icon = () => (
  <svg width="30" height="30" fill="gray" viewBox="0 0 16 16">
    <path d="M4 0h8a1 1 0 011 1v1h1a1 1 0 010 2h-1v8h1a1 1 0 010 2h-1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1H2a1 1 0 010-2h1V4H2a1 1 0 010-2h1V1a1 1 0 011-1zM5 5v6h6V5H5z"/>
  </svg>
);

// Raspberry Pi
export const RaspberryPiIcon = () => (
  <svg role="img" viewBox="0 0 24 24" width="30" height="30" fill="#A22846">
    <title>Raspberry Pi</title>
    <path d="M12.005 0c-2.057 0-3.728 1.517-3.728 3.384 0 .772.29 1.48.768 2.037-2.33.47-4.105 2.408-4.105 4.726 0 1.324.537 2.524 1.397 3.43-1.318 1.422-2.145 3.29-2.145 5.351 0 .173.01.344.028.514 3.165.086 6.55-.478 8.902-2.42 2.352 1.942 5.737 2.506 8.902 2.42.018-.17.028-.341.028-.514 0-2.06-.827-3.929-2.145-5.351.86-.906 1.397-2.106 1.397-3.43 0-2.318-1.775-4.256-4.105-4.726a3.37 3.37 0 00.768-2.037c0-1.867-1.671-3.384-3.728-3.384z"/>
  </svg>
);

// MediaPipe (image fallback)
export const MediaPipeIcon = () => (
  <img src="https://mediapipe.dev/images/mediapipe_logo.svg" alt="MediaPipe" width="30" />
);

// OpenCV (image fallback)
export const OpenCVIcon = () => (
  <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg" alt="OpenCV" width="60" />
);

// Django Icon (stylized 'D')
export const DjangoIcon = () => (
  <svg width="30" height="30" viewBox="0 0 128 128" fill="none">
    <title>Django</title>
    <rect width="128" height="128" rx="16" fill="#092E20"/>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="60" fill="white" fontFamily="Arial">D</text>
  </svg>
);

// Librosa Icon (audio waveform style)
export const LibrosaIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="purple">
    <title>Librosa</title>
    <path d="M3 10h2v4H3zm3-3h2v10H6zm3 5h2v5H9zm3-8h2v18h-2zm3 8h2v5h-2zm3-3h2v10h-2zm3-2h2v4h-2z"/>
  </svg>
);

// C++ Icon
export const CppIcon = () => (
  <svg width="30" height="30" viewBox="0 0 128 128" fill="#00599C">
    <title>C++</title>
    <path d="M64 0L8 32v64l56 32 56-32V32L64 0zM56.86 92.07l-3.63-2.09c-.29-.17-.48-.48-.48-.82V38.84c0-.34.18-.65.48-.82l3.63-2.09a.95.95 0 01.95 0l3.63 2.09c.29.17.48.48.48.82v50.32c0 .34-.18.65-.48.82l-3.63 2.09a.95.95 0 01-.95 0zM84 67.5v5h-4v4h4v5h5v-5h4v-4h-4v-5h-5zM98 67.5v5h-4v4h4v5h5v-5h4v-4h-4v-5h-5z"/>
  </svg>
);

// Keras
export const KerasIcon = () => (
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" alt="Keras" width="30" />
);

// TensorFlow
export const TensorFlowIcon = () => (
  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" alt="TensorFlow" width="30" />
);

// scikit-learn
export const ScikitLearnIcon = () => (
  <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="Scikit-learn" width="30" />
);

// NumPy
export const NumpyIcon = () => (
  <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg" alt="NumPy" width="30" />
);

// Pandas
export const PandasIcon = () => (
  <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg" alt="Pandas" width="30" />
);

// Matplotlib
export const MatplotlibIcon = () => (
  <img src="https://matplotlib.org/_static/images/logo2.svg" alt="Matplotlib" width="30" />
);

// Seaborn
export const SeabornIcon = () => (
  <img src="https://seaborn.pydata.org/_static/logo-wide-lightbg.svg" alt="Seaborn" width="40" />
);

// Plotly
export const PlotlyIcon = () => (
  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Plotly-logo-01-square.png" alt="Plotly" width="30" />
);

// Dart
export const DartIcon = () => (
  <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png" alt="Dart" width="30" />
);

// MongoDB
export const MongoDBIcon = () => (
  <img src="https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png" alt="MongoDB" width="30" />
);

// Java
export const JavaIcon = () => (
  <img src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" alt="Java" width="30" />
);

// OS Module (Generic gear icon)
export const OSModuleIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="gray">
    <title>os module</title>
    <path d="M19.43 12.98l.04-.32a8 8 0 00-.13-1.32l2.11-1.65a.5.5 0 00.11-.63l-2-3.46a.5.5 0 00-.6-.23l-2.49 1a7.963 7.963 0 00-1.5-.87l-.38-2.65a.5.5 0 00-.5-.42h-4a.5.5 0 00-.5.42l-.38 2.65a7.963 7.963 0 00-1.5.87l-2.49-1a.5.5 0 00-.6.23l-2 3.46a.5.5 0 00.11.63L4.7 11.34a8 8 0 000 2.66l-2.11 1.65a.5.5 0 00-.11.63l2 3.46a.5.5 0 00.6.23l2.49-1c.47.34.97.63 1.5.87l.38 2.65a.5.5 0 00.5.42h4a.5.5 0 00.5-.42l.38-2.65a7.963 7.963 0 001.5-.87l2.49 1a.5.5 0 00.6-.23l2-3.46a.5.5 0 00-.11-.63l-2.11-1.65z"/>
  </svg>
);

