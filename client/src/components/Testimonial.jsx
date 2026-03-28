import React from 'react'
import { testimonialsData } from '../assets/assets'

const Testimonial = () => {
  return (
    <div className="py-20">

      <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>
        Customer Testimonials
      </h1>

      <div className='mt-14 flex flex-wrap justify-center gap-8 px-4'>

        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className='w-full sm:w-[400px] bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300'
          >
            <p className='text-5xl text-blue-500 leading-none'>“</p>

            <p className='text-gray-600 mt-4 text-sm leading-relaxed'>
              {item.text}
            </p>

            <div className='flex items-center gap-4 mt-6'>
              <img
                src={item.image}
                alt=""
                className='w-12 h-12 rounded-full object-cover'
              />

              <div>
                <p className='font-semibold text-gray-800'>
                  {item.author}
                </p>
                <p className='text-gray-500 text-sm'>
                  {item.jobTitle}
                </p>
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default Testimonial