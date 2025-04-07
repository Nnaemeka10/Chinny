'use client'
import { FRAMES } from '@/constants'

import Carousel from './Carousel';
import Button from './Button';
import { Search } from 'react-feather';


const Frames = () => {
  return (
    <section className='bg-white-10 max-container px-4 py-24 lg:py-20 lg:px-6 flex flex-col md:flex-row justify-center items-center overflow-hidden shadow-black relative'>
      <div className = 'flexCenter flex-col px-10 mb-10 md:w-1/2 gap-7'>
        <h1 className='text-4xl font-medium text-gray-900 mb-4 text-center md:text-left'> Glass Frames</h1>
        <p>Browse our catalogue of high quality frames crafted with the best materials available whilst producing comfort</p>
        <a href="/frames">
        <Button 
                type='button'
                title='Browse Frames'
                IconDefault={<Search  strokeWidth={3} size={30}/>}
                IconHover={<Search className='text-blue-10' size={30} strokeWidth={3}/>}
                variant='btn_dark_blue'
                />
        </a>
      </div>

      <Carousel images = {FRAMES}/>
    </section>
  )
}

export default Frames
