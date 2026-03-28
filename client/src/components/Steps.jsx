import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40'>

      <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>
        Steps to remove background <br /> image in seconds
      </h1>

      <div className='mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>

        {/* Step 1 */}
        <div className='p-8 rounded-2xl shadow-md hover:shadow-xl transition bg-white'>
          <img src={assets.upload_icon} alt="" className='mx-auto w-14'/>
          <p className='mt-4 font-semibold text-xl'>Upload Image</p>
          <p className='text-gray-500 mt-2'>Upload your image from device</p>
        </div>

        {/* Step 2 */}
        <div className='p-8 rounded-2xl shadow-md hover:shadow-xl transition bg-white'>
          <img src={assets.remove_bg_icon} alt="" className='mx-auto w-14'/>
          <p className='mt-4 font-semibold text-xl'>Remove Background</p>
          <p className='text-gray-500 mt-2'>AI removes background instantly</p>
        </div>

        {/* Step 3 */}
        <div className='p-8 rounded-2xl shadow-md hover:shadow-xl transition bg-white'>
          <img src={assets.download_icon} alt="" className='mx-auto w-14'/>
          <p className='mt-4 font-semibold text-xl'>Download Image</p>
          <p className='text-gray-500 mt-2'>Download HD transparent image</p>
        </div>

      </div>

    </div>
  )
}

export default Steps