
"use client"
import Image from 'next/image'
import { ABOUT_INFO } from '@/constants'
import { useState } from 'react';




const About = () => {
  const [showFullDescription, setShowFullDescription] = useState<boolean>(false);
  let description = 'My business Chiniphotos is an eyecare brand just as the name implies,photos stands for photochromic lenses. The present day weather such as the harsh effects of the ultraviolet rays coming from the sun and the blue ray coming from our phones,laptops all play a damaging role to the eyes.\n \n This increased the need for people to make use of these glasses that aims to shield from the sun and bright lights. Presently chiniphotos deals in prescription of these photochromic/bluecut lenses at a very affordable amount unlike other eyeclinics. This is because the lenses are sourced directly from the optical lab. Also contact lenses and other eyecare solutions are available. \n \n We also handle home consultations and online consultations to various individuals as their case maybe.Presently the team is made up of three people,Myself the optometrist who prescribes the adequate lens required by the particular individual,the optician who fits the lenses and the delivery man who makes deliveries either door to door or waybills as the case may be nationwide. \n \n As an optometrist I have been practicing in this field for 5years now during which I have gathered experiences from the best eyeclinics/professionals. \n \n As an enterpreneur I have attended various trainings including the tony elumelu business management course.I have also carried out various anniversary sales/ participated in outreaches and given talks as a means of giving back to the society as I believe that everyone deserves equal access to quality eyecare.';
  if (!showFullDescription) {
    description = description.slice(0, 100) + '...';
    
  }
  


  return (
    <section id='about-page' className='max-container px-4 flex flex-col gap-4 py-24 pb-22 lg:py-20 lg:px-6 bg-gradient-to-bl from-white-10 to-blue-300'>

      <h1 className='text-4xl font-medium text-gray-900 mb-4 text-center'>About me</h1>


      <div className='flex flex-col-reverse lg:flex-row gap-2 lg:gap-5 text-left lg:px-24'>
        <div className="max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm lg:w-2/3">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 text-left sm:text-center pt-10 sm:pt-5"><span className='text-blue-20'>Hello</span>, I am Dr Nduka Chiamaka Chinweoke</h5>
          <p className="mb-3 font-normal text-gray-500 whitespace-pre-line">
            I am an <span className='text-blue-20 font-medium'>optometrist</span>,a <span className='text-blue-20 font-medium'>mental health advocate</span> and the <span className='text-blue-20 font-medium'>CEO of chiniphotos.</span> <br /> <br />{description} 
          </p>
            
          <button className="inline-flex font-medium items-center text-blue-20 hover:underline" onClick={()=>setShowFullDescription((prevState)=> !prevState)}>
          {showFullDescription ? 'See Less...' : 'See More...'}
            
            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
            </svg>
          
          </button>
        </div>

        <div className=" relative flex justify-center top-10 lg:w-1/3 lg:top-0 lg:items-start lg:-left-18">
            <Image
            src="/about.jpg"
            alt="about Image"
            height={240}
            width={240} 
            className="object-cover rounded-full aspect-square h-80 w-80"
            priority
            />
        </div>
      </div>

    </section>
  )
}

export default About