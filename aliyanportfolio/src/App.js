import './App.css';
import HomePage from './Pages/Homepage'
import Projects from './Pages/Projects'
import Header from './components/Header'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ServicesPage from './Pages/Services';

function App() {
  return (
    <Router>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/services' element={<ServicesPage/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
