import React from 'react'
import nature from '../assets/image/natureCare.jpeg'
import brvkm from '../assets/image/charity1.jpg'

const Aboutus = () => {
  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Bhartiya Rojgar Vikas Kranti Manch</h1>
      <p class="mb-8 leading-relaxed">A beacon of hope and progress. 🌟 Our charitable trust is dedicated to addressing unemployment head-on. With unwavering commitment, we provide gainful employment, adhering to government regulations. We illuminate young minds through education, uplift women by enabling work-from-home opportunities, and empower girls with tele-calling roles. Not stopping there, we warm hearts by distributing jackets in winter and T-shirts in summer to those in need.</p>
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
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">NatureCare.com</h1>
      <p class="mb-8 leading-relaxed">Nurturing with nature's touch. 🍃 At Nature Care, we are more than a company; we are a commitment to purity. Specializing in organic products, we craft hair oil, toothpaste, shampoo, dish wash, bath soap, and more. Every creation is a testament to our belief in the power of nature to care for us. From hair care to toilet cleanliness, our products embody authenticity, ensuring a harmonious coexistence with our planet. Welcome to a world where care comes naturally.</p>
    </div>
   
  </div>
</section>
    </div>
  )
}

export default Aboutus