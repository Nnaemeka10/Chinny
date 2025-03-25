import Image from 'next/image'

const Services = () => {
  return (
    <section className='bg-gray-10 max-container px-4 flex flex-col gap-20 py-24 pb-22 lg:py-20 lg:px-6'>

        <div className='text-center'>
          <h1 className='text-4xl font-medium text-gray-900 mb-4'>Our Services</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate saepe cumque magni.</p>
        </div>


        <div className='flex flex-col lg:flex-row gap-20 lg:gap-5'>

          {/* Left */}
          <div className='flex flex-col gap-20 lg:w-1/3 relative w-full'>
            <div className='shadow-md shadow-gray-20 rounded-xl px-6 py-10 flex flex-col gap-6 group cursor-pointer bg-white-10'>
              <h2 className='font-medium text-2xl tracking-wide group-hover:text-blue-20'>Eye examinations <span></span></h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quas aliquid Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, sit dicta accusantium.</p>
            </div>

            <div className='shadow-md shadow-gray-30 rounded-xl px-6 py-10 flex flex-col gap-6 group cursor-pointer bg-white-10'>
              <h2 className='font-medium text-2xl tracking-wide group-hover:text-blue-20'> Counselling and Therapy Sessions <span></span></h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quas aliquid animi ea aliquam! Perferendis adipisci veritatis laudantium sint quia dolorum, sunt, voluptatem eius, assumenda impedit similique quo laboriosam quidem?</p>
            </div>
          </div>

          {/* Middle */}
           <div className=" relative h-screen w-full lg:w-1/3 lg:h-screen">
            <Image
            src="/services.jpg"
            alt="Services Image"
            fill
            className="object-cover rounded-3xl"
            priority
            />
        </div>

          {/* Right */}
          <div className='flex flex-col gap-20 lg:w-1/3 relative w-full'>
            <div className='shadow-md shadow-gray-30 rounded-xl px-6 py-10 flex flex-col gap-6 group cursor-pointer bg-white-10'>
              <h2 className='font-medium text-2xl tracking-wide group-hover:text-blue-20'>Life Coaching/mentorship<span></span></h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quas aliquid Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, sit dicta accusantium.</p>
            </div>

            <div className='shadow-md shadow-gray-30 rounded-xl px-6 py-10 flex flex-col gap-6 group cursor-pointer bg-white-10'>
              <h2 className='font-medium text-2xl tracking-wide group-hover:text-blue-20'>Blue Cut glasses <span></span></h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quas aliquid animi ea aliquam! Perferendis adipisci veritatis laudantium sint quia dolorum, sunt, voluptatem eius, assumenda impedit similique quo laboriosam quidem?</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Services