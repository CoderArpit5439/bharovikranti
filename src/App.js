import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './layout/Header';
import Home from './pages/Home';
import Service from './pages/Service';
import Aboutus from './pages/Aboutus';
import Contact from './pages/Contact';
import Footer from './layout/Footer';
import Products from './pages/Products';
import { useEffect, useState } from 'react';
import DigitalMoney from './pages/DigitalMoney';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [language,setLanguage] = useState(true) 

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <Header language={language} setLanguage={setLanguage}/>
      <Routes>
        <Route path='/' element={<Home language={language} />} />
        <Route path='/services' element={<Service language={language} />} />
        <Route path='/about' element={<Aboutus language={language} />} />
        <Route path='/contact' element={<Contact language={language} />} />
        <Route path='/products' element={<Products language={language} />} />
        <Route path='/digital_money' element={<DigitalMoney language={language}/>} />
      </Routes>
      <Footer language={language} />
    </div>
  );
}

export default App;
