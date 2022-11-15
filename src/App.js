import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import Place from './components/Place';
function App() {
  return (
    <div className="App">
       <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Section />} />
          <Route path='/place' element={<Place />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
