import React from 'react'
import badanSudhak from '../assets/productsImage/badan-sudak.jpeg'
import bartanSudhak from '../assets/productsImage/bartan-sudhak.jpeg'
import dantManjan from '../assets/productsImage/dant-manjan.jpeg'
import dhoopBatti from '../assets/productsImage/dhoop-batti.jpeg'
import facePack from '../assets/productsImage/face-pack.jpeg'
import hastSudhak from '../assets/productsImage/hast-sudhak.jpeg'
import keshRakshakBasePowder from '../assets/productsImage/kesh-rakshak-base-powder.jpeg'
import keshRakshakPowder from '../assets/productsImage/kesh-rakshak-powder.jpeg'
import keshRakshakTel from '../assets/productsImage/kesh-rakshak-tel.jpeg'
import mansiRas from '../assets/productsImage/mansi-ras.jpeg'
import rasSempoo from '../assets/productsImage/ras-sempoo.jpeg'
import sochalaySudhak from '../assets/productsImage/sochalay-sudhak.jpeg'
import sudhSahad from '../assets/productsImage/sudh-sahad.jpeg'

const productsArray = [
  {
    img: badanSudhak,
    name: "Badan Sudhak",
    price: 130,
    weight: "100ML",
  },
  {
    img: bartanSudhak,
    name: "Bartan Sudhak",
    price: 60,
    weight: "100ML",
  },
  {
    img: dantManjan,
    name: "Dant Manjan",
    price: 105,
    weight: "100GM",
  },
  {
    img: dhoopBatti,
    name: "Dhoop Batti",
    price: 50,
    weight: "100GM",
  },
  {
    img: facePack,
    name: "Neem Honey Face Pack",
    price: 215,
    weight: "150GM",
  },
  {
    img: hastSudhak,
    name: "Hast Sudhak",
    price: 40,
    weight: "60GM",
  },
  {
    img: keshRakshakBasePowder,
    name: "Kesh Rakshak Base Powder",
    price: 250,
    weight: "250GM",
  },
  {
    img: keshRakshakPowder,
    name: "Kesh Rakshak Powder",
    price: 590,
    weight: "370GM",
  },
  {
    img: keshRakshakTel,
    name: "Kesh Rakshak Tel",
    price: 190,
    weight: "100ML",
  },
  {
    img: mansiRas,
    name: "Jata Mansi Ras",
    price: 200,
    weight: "200ML",
  },
  {
    img: rasSempoo,
    name: "Kesh Sudhak Ras Sempoo",
    price: 90,
    weight: "200GM",
  },
  {
    img: sochalaySudhak,
    name: "Shochalay Sudhak",
    price: 35,
    weight: "500GM",
  },
  {
    img: sudhSahad,
    name: "Sudah Sudhak",
    price: 150,
    weight: "300ML",
  },
]
const Products = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {productsArray?.map((pro, i) =>{
        return(
            <div  data-aos="fade-left"  className="lg:w-1/4 md:w-1/2 p-4 w-full delay-[100ms] duration-[200ms] taos:translate-x-[200px] taos:opacity-0" data-taos-offset="300">
              <a className="block relative rounded overflow-hidden">
                <img alt="ecommerce" className="object-contain w-full block" style={{height:"300px"}} src={pro.img}/>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Net Weight : {pro.weight}</h3>
                <h2 className="text-white title-font text-lg font-medium">{pro.name}</h2>
                <p className="mt-1">Rs. {pro.price}</p>
              </div>
            </div>

            )
       }   )
           }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products