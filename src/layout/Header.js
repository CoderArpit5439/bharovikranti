import { Link, useLocation } from "react-router-dom";
import logo from '../assets/image/logo.png'
import { useState } from "react";
const Header = ({ language, setLanguage }) => {
  const location = useLocation();
  return (
    <div>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img src={logo} alt="logo" height='auto' width='40px' />
            <span className="ml-3 text-xl">NatureCare.com</span>
          </Link>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link className={`mr-4 mt-3 hover:text-slate-300 ${location.pathname.includes('home') && "text-white"}`} to='/'>{language ? "Home" : "होम"}</Link>
            <Link className={`mr-4 mt-3 hover:text-slate-300 ${location.pathname.includes('services') && "text-white"}`} to='/services'>{language ? "Service" : "सेवाएं"}</Link>
            <Link className={`mr-4 mt-3 hover:text-slate-300 ${location.pathname.includes('products') && "text-white"}`} to='/products'>{language ? "Product":"उत्पाद"}</Link>
            <Link className={`mr-4 mt-3 hover:text-slate-300 ${location.pathname.includes('contact') && "text-white"}`} to='/contact'>{language ? "Contact" : "संपर्क"}</Link>
            <Link className={`mr-4 mt-3 hover:text-slate-300 ${location.pathname.includes('about') && "text-white"}`} to='/about'>{language ? "About" : "के बारे में"}</Link>
            <button onClick={() => setLanguage(!language)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 h-8 px-2 text-sm  border border-blue-500 hover:border-transparent rounded">
              {!language ? "English" : "हिंदी"}</button>
          </nav>

        </div>

      </header>
    </div>
  )
}

export default Header;