import React from 'react'
import { useForm } from 'react-hook-form'


const Contact = ({ language }) => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data)

    var name = data.name;
    var address = data.address;
    var annualIncome = data.annualIncome;
    var birthTime = data.birthTime;
    var category = data.category;
    var contactNumber = data.contactNumber;
    var dob = data.dob;
    var education = data.education;
    var height = data.height;
    var manglik = data.manglik;
    var marrideStatus = data.marrideStatus;
    var occupation = data.occupation;
    var religion = data.religion;
    var sisAndBro = data.sisAndBro;

    var url = "https://wa.me/9644325057?text="
      + "*Name :* " + name + "%0a"
      + "*Phone :* " + contactNumber + "%0a"
      + "Address :* " + address + "%0a"
      + "Category :* " + category + "%"
      + "Education :* " + education + "%0a"
      + "Manglik :* " + manglik + "%0a"
      + "Marital Status :* " + marrideStatus + "%0a"
      + "Date of Birth :* " + dob + "%0a"
      + "Occupation :* " + occupation + "%0a"
      + "Annual Income :* " + annualIncome + "%0a"
      + "*Birth Time :* " + birthTime + "%0a"
      + "Height :* " + height + "%0a"
      + "Religion :*" + religion + "%0a"
      + "Sister and Brother :*" + sisAndBro + "%0a"

    window.open(url, '_blank').focus();
  }
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font relative">
        <h1 className='text-white text-3xl ml-4 px-4 py-4 ' >
          Contact Form
        </h1>
        <form className='mx-10' onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-3 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400 ">{language ? "Full Name" : "पूरा नाम"} <span className='text-red-500'>*</span></label>
              <input type="text" {...register("name", { required: true })} className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              {errors.name && <span className="text-red-300">Please enter name</span>}
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label htmlFor="floating_last_name" className="leading-7 text-sm text-gray-400">{language ? "Contact Number" : "मोबाइल नंबर"}      <span className='text-red-500'>*</span></label>
              <input type="text" {...register("contactNumber", { required: true })} className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              {errors.contactNumber && <p className="text-red-300">Invalid Phone</p>}
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label htmlFor="floating_company" className="leading-7 text-sm text-gray-400">{language ? "Address" : "पता"} <span className='text-red-500'>*</span></label>
              <input type="text" {...register("address", { required: true })} className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              {errors.address && <span className="text-red-300">Please enter address</span>}
            </div>
          </div>
          <div className="grid md:grid-cols-3 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <label htmlFor="floating_last_name" className="leading-7 text-sm text-gray-400">{language ? "Date of Birth" : "जन्म की तारीख"} <span className='text-red-500'>*</span></label>
              <input type="date" {...register("dob", { required: true })} className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label htmlFor="floating_phone" className="leading-7 text-sm text-gray-400">{language ? "Time of Birth" : "जन्म का समय"} <span className='text-red-500'>*</span></label>
              <input type="time" {...register("birthTime")} className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label htmlFor="floating_company" className="leading-7 text-sm text-gray-400">{language ? "Place of Birth" : "जन्म स्थान"} <span className='text-red-500'>*</span></label>
              <input type="text" {...register("placeBirth")} className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="grid md:grid-cols-3 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <label htmlFor="floating_last_name" className="leading-7 text-sm text-gray-400">{language ? "Height" : "ऊंचाई"} <span className='text-red-500'>*</span></label>
              <input type="text" {...register("height")} className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label htmlFor="floating_phone" className="leading-7 text-sm text-gray-400">{language ? "Religion" : "धर्म"} <span className='text-red-500'>*</span></label>
              <input type="text"  {...register("religion")} className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label htmlFor="floating_company" className="leading-7 text-sm text-gray-400">{language ? "Caterogy" : "वर्ग"} <span className='text-red-500'>*</span></label>
              <input type="text" {...register("category")} className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="grid md:grid-cols-3 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <label htmlFor="floating_last_name" className="leading-7 text-sm text-gray-400">{language ? "Total Brother & Sister" : "कुल भाई और बहन"} <span className='text-red-500'>*</span></label>
              <input type="text"  {...register("sisAndBro")} className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label htmlFor="floating_phone" className="leading-7 text-sm text-gray-400">{language ? "Manglik" : "मांगलिक"} <span className='text-red-500'>*</span></label>
              <select  {...register("manglik")} className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label htmlFor="floating_company" className="leading-7 text-sm text-gray-400">{language ? "Education" : "शिक्षा"} <span className='text-red-500'>*</span></label>
              <input type="text"  {...register("education")} className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <label htmlFor="floating_last_name" className="leading-7 text-sm text-gray-400">{language ? "Annual Income" : "वार्षिक आय"} <span className='text-red-500'>*</span></label>
              <input type="text"  {...register("annualIncome")} className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label htmlFor="floating_phone" className="leading-7 text-sm text-gray-400">{language ? "Marital Status" : "वैवाहिक स्थिति"} <span className='text-red-500'>*</span></label>
              <select  {...register("marrideStatus")} className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                <option value="">Select</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Widowed">Widowed</option>
                <option value="Divorced">Divorced</option>
              </select>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label htmlFor="floating_company" className="leading-7 text-sm text-gray-400">{language ? "Occupation" : "पेशा"} <span className='text-red-500'>*</span></label>
              <input type="text"  {...register("occupation")} className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>

          <button type="submit" className="text-white bg-sky-700 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{language ? "Submit" : "जमा"}</button>
        </form>

        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d229.98412024396032!2d75.88402744511629!3d22.73768318172112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1694541027452!5m2!1sen!2sin"
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              style={{ border: "0" }}
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
              <div className=" px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">516/7, Nehru Nagar, Indore, Pin Code -452011</p>
              </div>
              <div className=" px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
                <a className="text-indigo-400 leading-relaxed">rs29071983@gmail.com</a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed">+91 9575339047</p>
                <p className="leading-relaxed">+91 9754045753</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact