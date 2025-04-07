import Image from 'next/image'

const Services = () => {
  return (
    <section id='services' className='bg-gray-10 max-container px-4 flexCenter flex-col gap-20 py-24 pb-22 lg:py-20 lg:px-6'>

        <div className='text-center w-full md:w-10/12'>
          <h1 className='text-4xl font-medium text-gray-900 mb-4'>Our Services</h1>
          <p className='text-gray-700'>Our services are designed with your well-being in mind. Whether you're looking to safeguard your vision, enhance your personal growth, improve your mental health, or protect your eyes from digital strain, we provide expert care tailored to your unique needs. Explore our comprehensive offerings and discover how we can help you look and feel your best.</p>
        </div>


        <div className='flex flex-col lg:flex-row gap-20 lg:gap-5'>

          {/* Left */}
          <div className='flex flex-col gap-20 lg:w-1/3 relative w-full'>
          <a href="/eye">
            <div className='shadow-md shadow-gray-20 rounded-xl px-6 py-10 flex flex-col gap-6 group cursor-pointer bg-white-10 hover:translate-y-5 transition-all'>
              <h2 className='font-medium text-2xl tracking-wide group-hover:text-blue-20'>Eye examinations <span></span></h2>
              <p>Ensure your vision stays clear and healthy with comprehensive eye examinations. We use state-of-the-art diagnostic tools to tailor care to your needs.</p>
            </div>
            </a>


            <a href="therapy">
            <div className='shadow-md shadow-gray-30 rounded-xl px-6 py-10 flex flex-col gap-6 group cursor-pointer bg-white-10 hover:translate-y-5 transition-all'>
              <h2 className='font-medium text-2xl tracking-wide group-hover:text-blue-20'> Mental Health Therapy Sessions <span></span></h2>
              <p>Prioritize your well-being with compassionate mental health therapy. Our dedicated therapists provide a safe, supportive space to navigate life’s challenges and enhance your emotional health.</p>
            </div>
            </a>
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

          <a href="/coach">
            <div className='shadow-md shadow-gray-30 rounded-xl px-6 py-10 flex flex-col gap-6 group cursor-pointer bg-white-10 hover:translate-y-5 transition-all'>
              <h2 className='font-medium text-2xl tracking-wide group-hover:text-blue-20'>Life Coaching/mentorship<span></span></h2>
              <p>Unlock your potential with personalized life coaching designed to help you achieve personal and professional growth. Our experienced coaches are here to guide you every step of the way.</p>
            </div>
            </a>

            <a href="/frames">
            <div className='shadow-md shadow-gray-30 rounded-xl px-6 py-10 flex flex-col gap-6 group cursor-pointer bg-white-10 hover:translate-y-5 transition-all'>
              <h2 className='font-medium text-2xl tracking-wide group-hover:text-blue-20'>Blue Cut glasses <span></span></h2>
              <p>Experience the ultimate in eye protection and comfort with our blue cut and/or photochromic glasses. These innovative lenses reduce digital eye strain and adapt to changing light conditions, keeping your eyes safeguarded both indoors and outdoors.</p>
            </div>
            </a>
          </div>
        </div>
    </section>
  )
}

export default Services