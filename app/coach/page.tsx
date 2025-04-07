
import CoachCta from '@/components/CoachCta';
import CoachForm from '@/components/CoachForm';
import CoachHero from '@/components/CoachHero';
import CoachService from '@/components/CoachService';
import CoachTestimonial from '@/components/CoachTestimonial';

import { COACH_SERVICES, COACH_TESTIMONIALS, THERAPY_TESTIMONIALS } from '@/constants';

export default function Coach() {
  return (
   <>
   <CoachHero 
    HText='Transform Your Life with' 
    HhText='Expert Coaching !' 
    PText=' Achieve clarity, overcome obstacles, and reach your fullest potential with personalized coaching.' 
    BTitle='Book Consultation'
    BLink='/coach/#Life_coach_form' 
    />
   <CoachService services={COACH_SERVICES} Title='Services'/>
   <CoachTestimonial testimonials={COACH_TESTIMONIALS}/>
   <CoachCta paragraph='Ready to start your journey? Fill the form below to book your consultation.'/>
   <CoachForm />
   
   </>
  );
}
