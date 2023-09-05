import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './layout/Header';
import Home from './pages/Home';
import Service from './pages/Service';
import Aboutus from './pages/Aboutus';
import Contact from './pages/Contact';
import Footer from './layout/Footer';
import Products from './pages/Products';
import { useState } from 'react';

function App() {
  const [language,setLanguage] = useState("eng") 
  return (
    <div>
      <Header language={language} setLanguage={setLanguage}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Service />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
