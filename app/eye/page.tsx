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
  );
}
