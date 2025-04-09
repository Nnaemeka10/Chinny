'use client';

// import { useState, useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import {
//   EffectCoverflow,
//   Autoplay,
//   Navigation,
//   Pagination
// } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import Image from 'next/image';

interface Carousel {
  src: string;
  id: number;
  alt: string;
}

interface CarouselProps {
  images: Carousel[];
}

// const Carousel: React.FC<CarouselProps> = ({ images }) => {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   return (
//     <div className="relative w-1/2 px-4 md:px-16 lg:px-32 py-12 bg-blue-10">
//       <Swiper
//         modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView="auto"
//         loop={true}
//         navigation={{
//           prevEl: prevRef.current,
//           nextEl: nextRef.current
//         }}
//         onBeforeInit={(swiper) => {
//           //@ts-ignore
//           swiper.params.navigation.prevEl = prevRef.current;
//           //@ts-ignore
//           swiper.params.navigation.nextEl = nextRef.current;
//         }}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false
//         }}
//         pagination={{ clickable: true }}
//         coverflowEffect={{
//           rotate: 30,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true
//         }}
//         className="w-full"
//       >
//         {images.map((src, index) => (
//           <SwiperSlide
//             key={index}
//             className="w-[125px] sm:w-[150px] md:w-[175px] lg:w-[200px]"
//           >
//             <div
//               className="relative w-full h-32 sm:h-36 md:h-40 lg:h-48 rounded-2xl overflow-hidden cursor-pointer"
//               onClick={() => setSelectedImage(src.src)}
//             >
//               <Image
//                 src={src.src}
//                 alt={`Slide ${index + 1}`}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Navigation Buttons */}
//       <div className="absolute inset-y-1/2 w-full flex justify-between px-4 z-10 pointer-events-none">
//         <button
//           ref={prevRef}
//           className="pointer-events-auto bg-white text-gray-600 hover:bg-gray-200 rounded-full shadow p-2 transition"
//         >
//           &#8592;
//         </button>
//         <button
//           ref={nextRef}
//           className="pointer-events-auto bg-white text-gray-600 hover:bg-gray-200 rounded-full shadow p-2 transition"
//         >
//           &#8594;
//         </button>
//       </div>

//       {/* Fullscreen Modal */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
//           onClick={() => setSelectedImage(null)}
//         >
//           <div className="relative w-[90vw] h-[90vh]">
//             <Image
//               src={selectedImage}
//               alt="Fullscreen View"
//               fill
//               className="object-contain"
//             />
//             <button
//               onClick={() => setSelectedImage(null)}
//               className="absolute top-4 right-4 text-white text-3xl font-bold"
//             >
//               &times;
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };



"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

import { ChevronLeft, ChevronRight } from "react-feather";


const Carousel: React.FC<CarouselProps> = ({ images }) => {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // State to determine if the image is being hovered over
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Function to show the previous slide
  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Function to show the next slide
  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // useEffect hook to handle automatic slide transition
  useEffect(() => {
    // Start interval for automatic slide change if not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      // Cleanup the interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  // Handle mouse over event
  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <div className="relative w-3/4 mx-auto mt-4">
      <div
        className="relative h-60 sm:h-[460px] mx-12 group hover:-translate-y-2"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer"
        />
      </div>
      <button
        className="absolute left-0 top-1/2 transform h-[40px]  rounded-full hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-blue-950 text-white p-2 group"
        onClick={prevSlide}
      >
        <ChevronLeft className="text-gray-400 group-hover:text-white" />
      </button>
      <button
        className="absolute right-0 top-1/2 transform h-[40px] rounded-full hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-blue-950 text-white p-2 group"
        onClick={nextSlide}
      >
        <ChevronRight className="text-gray-400 group-hover:text-white" />
      </button>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 w-1.5 mx-1 ${
              index === currentIndex
                ? "bg-blue-10 rounded-xl"
                : "bg-gray-300 rounded-xl"
            } transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
