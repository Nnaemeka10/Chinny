import React from 'react'
import { ShoppingCart, User } from 'react-feather'
import Button from '@/components/Button'

const FrameHero = () => {
  return (
    <section className="relative max-container px-1 flex flex-col gap-20 py-5 pb-22 lg:py-20 lg:px-6 hide-scrollbar animate-fade-in">

        {/* video */}
        <div className='relative w-full xs:h-dvh h-[50vh]'>
        <div className="inset-0 absolute overflow-hidden -z-10 rounded-lg w-full " >
            <video
            className="object-cover w-full h-full brightness-50"
            autoPlay
            loop
            muted
            playsInline>
                <source src="/framehero.mp4" type="video/mp4" />
                your browser does not support the video tag
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-white-10 to-transparent opacity-10"></div>
        </div>
        </div>

        {/* overlay text */}
        <div className="relative flex flex-col items-center justify-center p-8 gap-10 inset-0 h-48 xs:-top-96 -top-72 -mb-80" >
            <div className="relative text-center max-w-full bg-black/20 rounded-lg w-full">
                <h1 className="xs:text-5xl text-2xl font-medium text-white-10 mb-4">
                    Protect Your Vision
                </h1>
                <p className="xs:text-lg text-white-10 text-xs">
                Discover the power of  <span className="text-blue-100 font-bold"> Blue-cut and Photochromic Glasses</span>
                </p>
            </div>

            <div className="flex justify-start">
                <a href="/frames/#shopping-list">
                <Button 
                type='button'
                title='Shop Now'
                IconDefault={<ShoppingCart  strokeWidth={3} size={20}/>}
                IconHover={<ShoppingCart className='text-blue-10' size={20} strokeWidth={3}/>}
                variant='btn_dark_blue'
                /> 
                </a>
            </div>
        </div>        
    </section>
  )
}

export default FrameHero