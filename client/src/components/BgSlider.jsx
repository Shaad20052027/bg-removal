import React, { useState } from 'react'
import { assets } from '../assets/assets'

const BgSlider = () => {
    const [sliderposition, setsliderposition] = useState(50)

    const handlesliderchange = (e) => {
        setsliderposition(e.target.value)
    }

    return (
        <div className='pb-10 md:py-20 mx-2'>
            <h1 className='mb-12 sm:mb-20 text-center text-3xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>
                Remove Background with high <br/> quality and acuracy
            </h1>

            {/* IMAGE CONTAINER */}
            <div className='relative w-full max-w-3xl overflow-hidden m-auto rounded-xl mt-10'>

                {/* BG IMAGE */}
                <img
                    src={assets.image_w_bg}
                    style={{ clipPath: `inset(0 ${100 - sliderposition}% 0 0)` }}
                    alt=""
                />

                {/* NO BG IMAGE */}
                <img
                    className='absolute top-0 left-0 w-full h-full'
                    src={assets.image_wo_bg}
                    style={{ clipPath: `inset(0 0 0 ${sliderposition}%)` }}
                    alt=""
                />

                {/* DIVIDER LINE */}
                <div
                    className="absolute top-0 bottom-0 w-1 bg-white z-20"
                    style={{ left: `${sliderposition}%` }}
                />

                {/* SLIDER */}
                <input
                    className='absolute top-0 left-0 w-full h-full z-30 appearance-none bg-transparent cursor-ew-resize'
                    type='range'
                    min={0}
                    max={100}
                    value={sliderposition}
                    onChange={handlesliderchange}
                />
            </div>
        </div>
    )
}

export default BgSlider