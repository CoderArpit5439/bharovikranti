import React from 'react'
import nature from '../assets/image/natureCare.jpeg'
import brvkm from '../assets/image/charity1.jpg'

const Aboutus = ({language}) => {
  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{language ? "Bhartiya Rojgar Vikas Kranti Manch" : "भारतीय रोजगार विकास क्रांति मंच"}</h1>
      <p class="mb-8 leading-relaxed">
        {language ? "A beacon of hope and progress. 🌟 Our charitable trust is dedicated to addressing unemployment head-on. With unwavering commitment, we provide gainful employment, adhering to government regulations. We illuminate young minds through education, uplift women by enabling work-from-home opportunities, and empower girls with tele-calling roles. Not stopping there, we warm hearts by distributing jackets in winter and T-shirts in summer to those in need."
        :"आशा और प्रगति का प्रतीक. 🌟 हमारा धर्मार्थ ट्रस्ट बेरोजगारी को सीधे संबोधित करने के लिए समर्पित है। अटूट प्रतिबद्धता के साथ, हम सरकारी नियमों का पालन करते हुए लाभकारी रोजगार प्रदान करते हैं। हम शिक्षा के माध्यम से युवा दिमागों को रोशन करते हैं, घर से काम करने के अवसरों को सक्षम करके महिलाओं का उत्थान करते हैं और टेली-कॉलिंग भूमिकाओं के साथ लड़कियों को सशक्त बनाते हैं। यहीं नहीं रुकते, हम जरूरतमंदों को सर्दियों में जैकेट और गर्मियों में टी-शर्ट वितरित करके दिल को गर्म करते हैं।"}
      </p>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src={brvkm} />
    </div>
  </div>
</section>
<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-8">
      <img class="object-cover object-center rounded" alt="hero" src={nature}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{language ? "NatureCare.com" : "नेचर केयर .com"}</h1>
      <p class="mb-8 leading-relaxed">{language ? "Nurturing with nature's touch. 🍃 At Nature Care, we are more than a company; we are a commitment to purity. Specializing in organic products, we craft hair oil, toothpaste, shampoo, dish wash, bath soap, and more. Every creation is a testament to our belief in the power of nature to care for us. From hair care to toilet cleanliness, our products embody authenticity, ensuring a harmonious coexistence with our planet. Welcome to a world where care comes naturally." 
      : 
      "प्रकृति के स्पर्श से पालन-पोषण। 🍃 नेचर केयर में, हम एक कंपनी से कहीं अधिक हैं; हम शुद्धता के प्रति प्रतिबद्ध हैं। जैविक उत्पादों में विशेषज्ञता रखते हुए, हम हेयर ऑयल, टूथपेस्ट, शैम्पू, डिश वॉश, नहाने का साबुन और बहुत कुछ तैयार करते हैं। प्रत्येक रचना हमारी देखभाल करने की प्रकृति की शक्ति में हमारे विश्वास का प्रमाण है। बालों की देखभाल से लेकर शौचालय की सफाई तक, हमारे उत्पाद प्रामाणिकता का प्रतीक हैं, जो हमारे ग्रह के साथ सामंजस्यपूर्ण सह-अस्तित्व सुनिश्चित करते हैं। ऐसी दुनिया में आपका स्वागत है जहां देखभाल स्वाभाविक रूप से आती है।"}</p>
    </div>
   
  </div>
</section>
    </div>
  )
}

export default Aboutus