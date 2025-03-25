import Image from 'next/image'
import React from 'react'
import Button from './Button'



const Hero = () => {
  return (
    <section className="max-container px-1 flex flex-col-reverse gap-20 py-5 pb-22 lg:gap-10 lg:py-20 lg:px-6 lg:flex-row-reverse hide-scrollbar">

        {/* Left */}
        <div className=" relative h-screen w-full lg:w-1/2 lg:h-screen">
            <Image
            src="/herobg.jpg"
            alt="Hero Image"
            fill
            className="object-cover rounded-3xl"
            priority
            />
        </div>

        {/* Right */}
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col items-center justify-center p-8 gap-10">
            <div className="text-left max-w-full">
                <h1 className="text-5xl font-medium text-gray-900 mb-4">
                    Clear vision, Clear mind, Complete care.
                </h1>
                <p className="text-lg text-gray-700">
                Experience holistic care that goes further than what meets the eye. At <span className="text-blue-20 font-bold"> Chinny Photos</span>, we nurture both your eyesight and your inner peace, guiding you toward a balanced, vibrant life.
                </p>
            </div>

            <div className="flex flex-col gap-10 sm:flex-row justify-start sm:w-full">
                <Button 
                type='button'
                title='Book Therapy'
                icon='/user.svg'
                variant='btn_dark_blue'
                />

                <Button 
                type='button'
                title='Book Optometrics'
                icon='/user.svg'
                variant='btn_dark_blue'
                />
            </div>
        </div>        
    </section>
  )
}

export default Hero