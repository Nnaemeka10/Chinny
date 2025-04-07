import CoachHero from '@/components/CoachHero';
import EyeForm from '@/components/EyeForm';
import CoachService from '@/components/CoachService';
import CoachTestimonial from '@/components/CoachTestimonial';
import CoachCta from '@/components/CoachCta';
import { OPTOMETRY_SERVICES, OPTOMETRY_TESTIMONIALS } from '@/constants';

export default function LoginPage() {
  return (
    <>
    <CoachHero
    HText='Clear Vision For A'
    HhText=' Brighter Future'
    PText='Professional eye care services tailored to your unique needs'
    BTitle='Book an Appointment'
    BLink='/eye/#eyeform'
    />
    <CoachService services={OPTOMETRY_SERVICES} Title='EyeCare Services'/>
    <CoachTestimonial testimonials={OPTOMETRY_TESTIMONIALS}/>
    <CoachCta paragraph='Want to experience what professional eyecare feels like? Fill the form below to book your consultation.'/>
    <EyeForm />
    </>
    
      //  <div className="container mx-auto px-4 flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-50 to-blue-10">
      //   <div className="md:w-1/2 mb-10 md:mb-0">
      //     <h1 className="text-4xl md:text-5xl font-bold mb-4">Clear Vision for a Brighter Future</h1>
      //     <p className="text-xl mb-8">Professional eye care services tailored to your unique needs.</p>
      //     <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
      //       <button className="bg-white-10 text-blue-10 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
      //         Book an Appointment
      //       </button>
      //       <button className="border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white-10 hover:text-blue-10 transition">
      //         Our Services
      //       </button>
      //     </div>
      //   </div>
      //   <div className="md:w-1/2 flex justify-center">
      //     <div className="relative w-64 h-64 md:w-80 md:h-80">
      //       <Image 
      //         src="/about.jpg" 
      //         alt="Eyeglasses" 
      //         fill
      //         className="object-contain"
      //         priority
      //       />
      //     </div>
      //   </div>
      // </div>
      // <div className="absolute bottom-0 left-0 right-0 h-16 bg-white-10 transform skew-y-1 -mb-8"></div>
        
  );
}
