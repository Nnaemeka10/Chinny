import React from 'react'
import Image from 'next/image'

const FrameAbout = () => {
  return (
    <section className="py-20 px-6 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Bluecut Glasses */}
          <div className="p-6 border rounded-xl shadow-lg flex flex-col items-center gap-4">
                <div className='h-60 relative w-full'>
                    <Image 
                        src= '/bluelight.jpg' 
                        alt='An image of bluecut photochromic glasses' 
                        fill
                        className='object-cover rounded-lg'
                    />
                </div>
            
                <div className='h-0.5 w-full bg-gray-30 inset-1'></div>
                <div className='flex flex-col items-left gap-4 w-full'>
                    <h2 className="text-2xl font-bold mb-2 text-gray-900">BlueCut Photochromic Glasses</h2>
                    <p className='text-gray-600'>
                        Protect your eyes from harmful blue light emitted by screens and artificial lighting. <br />
                        Blue-Cut glasses are specially crafted to filter out harmful blue light emitted from digital screens, including phones, computers, and tablets. <br /> 
                        They help reduce eye strain, prevent headaches, and improve sleep quality, making them perfect for prolonged screen use. <br />
                       <span className='text-blue-10'>Ideal for those who frequently work with digital screens</span>   <br />
                    </p>       
                </div>    
            </div>

          {/* Photochromic Glasses */}
            <div className="p-6 border rounded-xl shadow-lg flex flex-col items-center gap-4">
                <div className='h-60 relative w-full'>
                    <Image 
                        src= '/bluecutglasses.jpg' 
                        alt='An image of photochromic anti-reflective glasses' 
                        fill
                        className='object-cover rounded-lg'
                    />
                </div>
            
                <div className='h-0.5 w-full bg-gray-30 inset-1'></div>
                <div className='flex flex-col items-left gap-4 w-full'>
                    <h2 className="text-2xl font-bold mb-2 text-gray-900">Photochromic Anti-reflective Glasses</h2>
                    <p className='text-gray-600'>
                        Automatically adjust to changing light conditions, providing comfort indoors and outdoors. <br />
                        Photochromic anti-reflective glasses are designed to adapt to changing light conditions. <br />
                        They darken when exposed to sunlight and clear up indoors, providing seamless protection against harmful UV rays. <br />
                       <span className='text-blue-10'>Ideal for those who frequently transition between indoor and outdoor environments.</span>   <br />
                    </p>       
                </div>    
            </div>
        </div>
      </section>
  )
}

export default FrameAbout