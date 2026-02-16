import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar'; 
import Footer from './Footer/Footer';
import Cloud from './ui/Cloud/Cloud';
import Fortnite from './ui/Fortnite/Fortnite';
import Uzum from './ui/Uzum/Uzum';
import Home from './ui/Home/Home';
import Kino from './ui/OMDB/Kino';
import Learn from './ui/Learn/Learn';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/fortnite" element={<Fortnite />} />
          <Route path="/uzum" element={<Uzum />} />
          <Route path="/kino" element={<Kino />} />
          <Route path="/learn" element={<Learn />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;