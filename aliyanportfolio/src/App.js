import './App.css';
import HomePage from './Pages/Homepage'
import Projects from './Pages/Projects'
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/projects' element={<Projects/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
