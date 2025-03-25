'use client'
import { FRAMES } from '@/constants'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ChevronLeft, ChevronRight } from "react-feather";

import {Swiper, SwiperSlide} from "swiper/react"

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


const Frames = () => {
  return (
    <section className='bg-white-10 max-container px-4 py-24 lg:py-20 lg:px-6 flex flex-col justify-center items-center overflow-hidden shadow-black relative'>
      <h1 className='text-4xl font-medium text-gray-900 mb-4 text-center'> Blue Cut Frames</h1>
      <div className='max-w-xs'>
     
       <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {FRAMES.map((frame, index) => (
          <SwiperSlide key={index}>
            <img src={frame.src} alt={frame.alt} className='w-96 h-96 object-cover'/>
          </SwiperSlide>
        ))}

<div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
          <button
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
      </div>
    </section>
  )
}

export default Frames
