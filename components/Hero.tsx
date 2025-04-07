import Image from 'next/image'
import React from 'react'
import Button from './Button'
import {Gift, User} from 'react-feather'



const Hero = () => {
  return (
    <section className="max-container px-1 flex flex-col-reverse gap-10 md:gap-20 py-5 pb-22 lg:gap-10 lg:py-20 lg:px-6 lg:flex-row-reverse hide-scrollbar animate-fade-in">

        {/* Left */}
        <div className=" relative h-[50vh] md:h-screen w-full lg:w-1/2 lg:h-screen">
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
                <a href="#services"><Button 
                    type='button'
                    title='Our Services'
                    IconDefault={<Gift  strokeWidth={3} size={30}/>}
                    IconHover={<Gift className='text-blue-10' size={30} strokeWidth={3}/>}
                    variant='btn_dark_blue'
                    />
                </a>

                <a href="/#about-page"> 
                <Button 
                type='button'
                title='About Us'
                IconDefault={<User  strokeWidth={3} size={30}/>}
                IconHover={<User className='text-blue-10' size={30} strokeWidth={3}/>}
                variant='btn_dark_blue'
                />
                </a>
            </div>
        </div>        
    </section>
  )
}

export default Hero