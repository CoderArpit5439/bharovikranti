import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { Carousel } from 'flowbite-react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

const Home = ({ language }) => {
  const navigate = useNavigate()
  return (
    <div className='bg-gradient-to-r from-purple-500 to-pink-500'>
        <div className="relative h-72 overflow-hidden md:h-96">
        <OwlCarousel items={1}  
          className="owl-theme"  
          loop
          margin={100}
          autoplay ={true}
          autoplayTimeout={3000} >       
          <div>
            <img className='' src="https://media.istockphoto.com/id/1334681862/photo/indian-couple-in-traditional-wedding-event-very-beautiful-moment.webp?b=1&s=612x612&w=0&k=20&c=s_S0_DlgjeVek8EjGfM4XBvOGDvjAcx-9U4ez1AAu10="  alt="..." />
          </div>
          <div>
            <img src="https://media.istockphoto.com/id/1321754984/photo/attractive-happy-north-indian-couple-in-traditional-dress.webp?b=1&s=170667a&w=0&k=20&c=M-0Y8a3LK6Y_SuiuPgH34Ix6wItESkJ4Ro1bVKFiIWQ="  alt="..." />
          </div>
          <div>
            <img src="https://media.istockphoto.com/id/1215100038/photo/indian-engagement.webp?b=1&s=170667a&w=0&k=20&c=W-7MhCVyulMdiPZ5Wv7527I9f9i3XXp45SeeF6LU1js="  alt="..." />
          </div>
          
          <div>
            <img src="https://images.unsplash.com/photo-1616165415772-f5b95c3ae135?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZyUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"  alt="..." />
          </div>
          </OwlCarousel>
        </div>
      <div data-aos="fade-left" className="block max-w-full p-6 mt-5 mx-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{language ? "Welcome to Bharovi Kranti Family" : "भारोवि क्रांति परिवार में आपका स्वागत है"}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{language ? "At Bharovi Kranti Family, we understand that finding the right partner and building a strong, fulfilling relationship is a journey that requires careful consideration, empathy, and support. We are dedicated to being your trusted companion on this remarkable journey, guiding you through the complexities of relationships and helping you create a bond that stands the test of time." : "भरोवी क्रांति परिवार में, हम समझते हैं कि सही साथी ढूंढना और एक मजबूत, संतुष्टिदायक रिश्ता बनाना एक ऐसी यात्रा है जिसके लिए सावधानीपूर्वक विचार, सहानुभूति और समर्थन की आवश्यकता होती है। हम इस उल्लेखनीय यात्रा में आपके भरोसेमंद साथी बनने, रिश्तों की जटिलताओं के माध्यम से आपका मार्गदर्शन करने और समय की कसौटी पर खरा उतरने वाला बंधन बनाने में आपकी मदद करने के लिए समर्पित हैं।"}</p>
      </div>

    <div className='container px-5 py-24 mx-auto flex flex-wrap -m-4'> 

      <div data-aos="fade-left" className="max-w-sm mt-5 mx-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div>
          <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" alt="" />
        </div>
        <div className="p-5">
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{language ? "Privacy and Security" : "गोपनीयता और सुरक्षा"}</h5>
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{language ? "We prioritize your privacy and security, employing the latest technology to safeguard your personal information. Your journey with us is confidential, allowing you to explore connections with peace of mind" : "हम आपकी व्यक्तिगत जानकारी की सुरक्षा के लिए नवीनतम तकनीक का उपयोग करते हुए आपकी गोपनीयता और सुरक्षा को प्राथमिकता देते हैं। हमारे साथ आपकी यात्रा गोपनीय है, जिससे आप मन की शांति के साथ संबंधों का पता लगा सकते हैं"}</p>
          <Link to='/contact' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {language ? "Registration Form" : "पंजीकरण फॉर्म"}
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
        </div>
      </div>

      <div data-aos="fade-left" className="max-w-sm mt-5 mx-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div>
          <img className="rounded-t-lg object-contain" src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U3VwcG9ydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        <div className="p-5">
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{language ? "Comprehensive Support" : "व्यापक समर्थन"}</h5>
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{language ? "Our commitment doesn't end at matchmaking. We are here for you every step of the way – before, during, and after marriage. From offering advice on communication and conflict resolution to providing a safe space for discussing concerns, we are your dedicated support system." : "हमारी प्रतिबद्धता मंगनी पर ख़त्म नहीं होती. हम हर कदम पर आपके लिए यहां हैं - शादी से पहले, शादी के दौरान और बाद में। संचार और संघर्ष समाधान पर सलाह देने से लेकर चिंताओं पर चर्चा के लिए एक सुरक्षित स्थान प्रदान करने तक, हम आपकी समर्पित सहायता प्रणाली हैं।"}</p>
          <Link to='/contact' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {language ? "Registration Form" : "पंजीकरण फॉर्म"}
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
        </div>
      </div>

      <div data-aos="fade-left" className="max-w-sm mt-5 mx-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div>
          <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1553484771-11998c592b9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXhwZXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        <div className="p-5">
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{language ? "Expert Guidance" : "विशेषज्ञ मार्गदर्शन"}</h5>
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{language ? "Our team of experienced relationship counselors and experts is here to offer valuable insights and guidance. Whether you're navigating the early stages of a relationship or seeking advice on strengthening your bond, our experts are just a message away." : "अनुभवी संबंध परामर्शदाताओं और विशेषज्ञों की हमारी टीम बहुमूल्य अंतर्दृष्टि और मार्गदर्शन प्रदान करने के लिए यहां है। चाहे आप किसी रिश्ते के शुरुआती चरण में काम कर रहे हों या अपने बंधन को मजबूत करने के लिए सलाह ले रहे हों, हमारे विशेषज्ञ बस एक संदेश दूर हैं।"}</p>
          <Link to='/contact' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {language ? "Registration Form" : "पंजीकरण फॉर्म"}
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Home