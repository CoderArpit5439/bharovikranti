import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './layout/Header';
import Home from './pages/Home';
import Service from './pages/Service';
import Aboutus from './pages/Aboutus';
import Contact from './pages/Contact';
import Footer from './layout/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Service />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
