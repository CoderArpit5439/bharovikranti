import React from 'react'
import image1 from '../assets/image/money_india.jpg'
import { useNavigate } from 'react-router-dom'

const Home = ({language}) => {
  const navigate = useNavigate()
  return (
    <div>

<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
      <img class="object-cover object-center rounded" alt="hero" src={image1}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{language ? "Digital Media Education Course" : "डिजिटल मीडिया शिक्षा पाठ्यक्रम"}
      </h1>
      <p class="mb-8 leading-relaxed">{language?"Women, Men, Students and any other person can earn money by training sitting at home." : "महिला, पुरुष, विद्यार्थी एवं कोई भी व्यक्ति घर बैठे प्रशिक्षण लेकर पैसा कमा सकता है।"}</p>
      <div class="flex justify-center">
        <button onClick={() => navigate('/contact')} class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"  >{language ? "Contact Us Now We are available 24/7" : "अभी हमसे संपर्क करें हम 24/7 उपलब्ध हैं"}</button>
      </div>
    </div>
  </div>
</section>

      <section className="text-white body-font overflow-hidden bg-gray-900">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">CLASS</span>
                <span className="mt-1 text-gray-500 text-sm">First</span>
              </div>
              <div className="md:flex-grow mx-5">
                <h2 className="text-2xl font-medium text-white title-font mb-2">{language ? "Social Media Income Plan":"सोशल मीडिया आय योजना"}</h2>
                <p className="leading-relaxed">{language ? "What is social media": "सोशल मीडिया क्या है"} </p>
                <p className="leading-relaxed">{language ? "what awards do you get" : "आपको कौन से पुरस्कार मिलते हैं"} </p>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">CLASS</span>
                <span className="mt-1 text-gray-500 text-sm">Second</span>
              </div>
              <div className="md:flex-grow mx-5">
                <h2 className="text-2xl font-medium text-white title-font mb-2">{language ? "What Work To Do": "क्या काम करना है"}</h2>
                <p className="leading-relaxed">{language ? "How to edit part time or full time video" : "पार्ट टाइम या फुल टाइम वीडियो कैसे एडिट करें"}</p>
                <p className="leading-relaxed">{language ? "and on which application" : "और किस एप्लीकेशन पर"}</p>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">CLASS</span>
                <span className="text-sm text-gray-500">Third</span>
              </div>
              <div className="md:flex-grow mx-5">
                <h2 className="text-2xl font-medium text-white title-font mb-2">{language ? "How To Earn Money From Facebook" : "फेसबुक से पैसे कैसे कमाए"}</h2>
                <p className="leading-relaxed">{language ? "How and on which application do you type" : "आप कैसे और किस एप्लीकेशन पर टाइप करते हैं"} </p>
                <p className="leading-relaxed">{language ? "the main information of Facebook?" : "फेसबुक की मुख्य जानकारी?"}</p>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">CLASS</span>
                <span className="text-sm text-gray-500">Fourth</span>
              </div>
              <div className="md:flex-grow mx-5">
                <h2 className="text-2xl font-medium text-white title-font mb-2">{language ? "How To Earn Money From Instagram" : "इंस्टाग्राम से पैसे कैसे कमाए"}</h2>
                <p className="leading-relaxed">{language ? "Main information of Instagram" : "इंस्टाग्राम की मुख्य जानकारी"}</p>
                <p className="leading-relaxed">{language ? "How to make instagram post":"इंस्टाग्राम पोस्ट कैसे बनाये"}</p>
                <p className="leading-relaxed">{language ? "On which application the post is created":"पोस्ट किस एप्लीकेशन पर बनाई गई है"}</p>
                <p className="leading-relaxed">{language ?"How to earn money from instagram" : "इंस्टाग्राम से पैसे कैसे कमाए"}</p>



              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">CLASS</span>
                <span className="text-sm text-gray-500">Fifth</span>
              </div>
              <div className="md:flex-grow mx-5">
                <h2 className="text-2xl font-medium text-white title-font mb-2">{language ? "How To Grow Youtube Channel?" : "यूट्यूब चैनल कैसे बढ़ाएं?"}</h2>
                <p className="leading-relaxed">{language ? "Creating and Running a YouTube Channel" :"YouTube चैनल बनाना और चलाना"}</p>
                <p className="leading-relaxed">{language ? "How to upload video and what are the problems in uploading" : "वीडियो कैसे अपलोड करें और अपलोड करने में क्या दिक्कतें आती हैं"}</p>
                <p className="leading-relaxed">{language ? "How to grow youtube channel" : "यूट्यूब चैनल कैसे बढ़ाएं"}</p>
                <p className="leading-relaxed">{language ? "Youtube video not uploading" : "यूट्यूब वीडियो अपलोड नहीं हो रहा"}</p>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">CLASS</span>
                <span className="text-sm text-gray-500">Sixth</span>
              </div>
              <div className="md:flex-grow mx-5">
                <h2 className="text-2xl font-medium text-white title-font mb-2">{language ? "How To Earn Money From YouTube" : "यूट्यूब से पैसे कैसे कमाए"}</h2>
                <p className="leading-relaxed">{language ? "Youtube specsification":"यूट्यूब विशिष्टता"}</p>
                <p className="leading-relaxed">{language ? "How to edit youtube video" : "यूट्यूब वीडियो कैसे एडिट करें"}</p>
                <p className="leading-relaxed">{language ? "By which application do you make": "आप कौन सा एप्लीकेशन बनाते हैं"}</p>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">CLASS</span>
                <span className="text-sm text-gray-500">Seventh</span>
              </div>
              <div className="md:flex-grow mx-5">
                <h2 className="text-2xl font-medium text-white title-font mb-2">{language ? "What Is Social Media Marketing" : "सोशल मीडिया मार्केटिंग क्या है"}</h2>
                <p className="leading-relaxed">{language ? "How does this work" : "कैसे यह काम करता है"}</p>
                <p className="leading-relaxed">{language ? "How is the income" : "आमदनी कैसी है"}</p>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">CLASS</span>
                <span className="text-sm text-gray-500">Eightth</span>
              </div>
              <div className="md:flex-grow mx-5">
                <h2 className="text-2xl font-medium text-white title-font mb-2">{language ? "How social media ads are run" : "सोशल मीडिया विज्ञापन कैसे चलाए जाते हैं"}</h2>
                <p className="leading-relaxed">{language ? "Why do people give ads on social media?" : "लोग सोशल मीडिया पर विज्ञापन क्यों देते हैं?"}</p>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">CLASS</span>
                <span className="text-sm text-gray-500">Ninth</span>
              </div>
              <div className="md:flex-grow mx-5">
                <h2 className="text-2xl font-medium text-white title-font mb-2">{language ? "How to increase views on youtube" : "यूट्यूब पर व्यूज कैसे बढ़ाएं"}</h2>
                <p className="leading-relaxed">{language ? "Why youtube channel is not growing" : "यूट्यूब चैनल ग्रो क्यों नहीं हो रहा है?"}</p>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">CLASS</span>
                <span className="text-sm text-gray-500">Tenth</span>
              </div>
              <div className="md:flex-grow mx-5">
                <h2 className="text-2xl font-medium text-white title-font mb-2">{language ? "How to earn from Facebook page and Instagram page": "फेसबुक पेज और इंस्टाग्राम पेज से कमाई कैसे करें"}</h2>
                <p className="leading-relaxed">{language ? "How to make a good facebook page and instagram page" : "एक अच्छा फेसबुक पेज और इंस्टाग्राम पेज कैसे बनाएं"}</p>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">CLASS</span>
                <span className="text-sm text-gray-500">Eleventh</span>
              </div>
              <div className="md:flex-grow mx-5">
                <h2 className="text-2xl font-medium text-white title-font mb-2">{language ? "When and how much and how income comes from youtube":"यूट्यूब से कब और कितनी और कैसे इनकम होती है"}</h2>
                <p className="leading-relaxed">{language ? "what we do that earn income from youtube" : "हम क्या करते हैं कि यूट्यूब से इनकम होती है"}</p>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">CLASS</span>
                <span className="text-sm text-gray-500">Twelth</span>
              </div>
              <div className="md:flex-grow mx-5">
                <h2 className="text-2xl font-medium text-white title-font mb-2">{language ? "What is DHAMAAL app ?" : "धमाल ऐप क्या है?"}</h2>
                <p className="leading-relaxed">{language ? "When is the income from Dhamaal app" : "धमाल ऐप से इनकम कब होती है"}</p>
                <p className="leading-relaxed">{language ? "How and how much is the income from Dhamaal app" : "धमाल ऐप से इनकम कैसे और कितनी होती है"}</p>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">CLASS</span>
                <span className="text-sm text-gray-500">Thirteen</span>
              </div>
              <div className="md:flex-grow mx-5">
                <h2 className="text-2xl font-medium text-white title-font mb-2">{language ? "How to understand and solve the technical problems ?" : "तकनीकी समस्याओं को कैसे समझें और हल करें?"}</h2>
                <p className="leading-relaxed">{language ? "Youtube, Facebook, Instagram solve the technical problems" : "यूट्यूब, फेसबुक, इंस्टाग्राम तकनीकी समस्याओं का समाधान करते हैं"}</p>
                <p className="leading-relaxed"> {language ? "How to understand and solve the technical problems of Dhamaal App, Bharovi Kranti India" : "धमाल ऐप, भरोवी क्रांति इंडिया की तकनीकी समस्याओं को कैसे समझें और हल करें"}</p>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">CLASS</span>
                <span className="text-sm text-gray-500">Forteen</span>
              </div>
              <div className="md:flex-grow mx-5">
                <h2 className="text-2xl font-medium text-white title-font mb-2">{language ? "How to withdraw money from social media, what is the process": "सोशल मीडिया से पैसे कैसे निकालें, क्या है प्रक्रिया?"}</h2>
                <p className="leading-relaxed">{language ? "Withdraw money from Youtube, Facebook, Instagram " : "यूट्यूब, फेसबुक, इंस्टाग्राम से पैसे निकालें"}</p>
                <p className="leading-relaxed">{language ? "What is the process of Withdraw money on Dhamaal App, Bharovi Kranti India" : "धमाल ऐप, भरोवी क्रांति इंडिया पर पैसे निकालने की प्रक्रिया क्या है"}</p>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">CLASS</span>
                <span className="text-sm text-gray-500">Fifteen</span>
              </div>
              <div className="md:flex-grow mx-5">
                <h2 className="text-2xl font-medium text-white title-font mb-2">{language ? "Fixed incentive amount 3,000-30,000 per month" : "प्रोत्साहन राशि 3,000-30,000 प्रति माह निर्धारित"}</h2>
                <p className="leading-relaxed">{language ? "Written certificate is given" : " लिखित प्रमाण पत्र दिया जाता है"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home