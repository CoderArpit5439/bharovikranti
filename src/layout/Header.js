import { Link } from "react-router-dom";
import logo from '../assets/image/logo.png'
const Header = () => {

  return (
    <div>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
           <img src={logo} alt="logo" height='auto' width='40px'/>
            <span className="ml-3 text-xl">NatureCare.com & B.R.V.K.M </span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-white" to='/'>Home</Link>
            <Link className="mr-5 hover:text-white" to='/services'>Services</Link>
            <Link className="mr-5 hover:text-white" to='/contact'>Contact</Link>
            <Link className="mr-5 hover:text-white" to='/about'>About</Link>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header;