import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import Placestay from './components/Placestay';
function App() {
  return (
    <div className="App">
       <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Section />} />
          <Route path='/placetostay' element={<Placestay />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
