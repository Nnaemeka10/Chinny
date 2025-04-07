import React from 'react'
import Button from './Button'
import { User } from 'react-feather' 
import Image from 'next/image'

interface CoachHeroProps {
  HText: string;
  PText: string;
  HhText: string;
  BTitle: string;
  BLink: string;
}

const CoachHero: React.FC<CoachHeroProps> = ({HText, PText, HhText, BTitle, BLink}) => {
  return (
    <section className="flexCenter flex-col py-20 px-5 animate-fade-in min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800 mx-auto lg:max-w-7xl w-full sm:px-10 md:px-12 lg:px-5 lg:flex-row lg:items-stretch gap-10">
        <div className='flexCenter flex-col just lg:w-1/2 lg:py-10 xl:py-12 text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto'>
            <h1 className="text-4xl md:text-5xl text-center mb-6 font-semibold leading-tight text-teal-950 lg:text-6xl">{HText}
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-tr from-blue-20 to-orange-20">{HhText}</span></h1>
            <p className="text-lg md:text-xl text-center mb-8 max-w-xl text-gray-700 mt-8">
            {PText}
            </p>
            <div className="flexCenter mt-8 flex-col sm:flex-row lg:justify-start gap-4">
                <a href={BLink}>
                <Button 
                type='button'
                title={BTitle}
                IconDefault={<User  strokeWidth={3} size={20}/>}
                IconHover={<User className='text-blue-10' size={20} strokeWidth={3}/>}
                variant='btn_dark_green'
                />
                </a>

                <a href="/#about-page">
                <Button 
                type='button'
                title='About Me'
                IconDefault={<User  strokeWidth={3} size={20}/>}
                IconHover={<User className='text-blue-10' size={20} strokeWidth={3}/>}
                variant='btn_dark_green'
                />
                </a>
            </div>
        </div>  

        <div className="lg:w-1/2 relative lg:h-auto max-w-2xl md:max-w-3xl mx-auto">
            <Image 
            src="/about.jpg" 
            width={2250} 
            height={1400} 
            alt="Coach Image" 
            className="lg:w-full lg:h-full object-cover" />
        </div>
      </section>
  )
}

export default CoachHero
