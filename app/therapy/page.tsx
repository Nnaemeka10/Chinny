
import CoachCta from '@/components/CoachCta';
import CoachHero from '@/components/CoachHero';
import CoachService from '@/components/CoachService';
import CoachTestimonial from '@/components/CoachTestimonial';
import TherapyForm from '@/components/TherapyForm';
import { THERAPY_SERVICES, THERAPY_TESTIMONIALS } from '@/constants';
import React from 'react';

export default function LoginPage() {
  return (
    <>
    <CoachHero 
      HText='Mental Health Therapy for ' 
      HhText='Healing and Growth'
      PText='Overcome challenges, build resilience, and enhance your emotional well-being with compassionate therapy.'
      BTitle='Schedule Therapy'
      BLink='/therapy/#Therapy_form'
      />
    <CoachService services={THERAPY_SERVICES} Title='My Journey As A Therapist'/>
    <CoachTestimonial testimonials={THERAPY_TESTIMONIALS} />
    <CoachCta paragraph='Need to Open up To Someone? Fill the form below let us talk.'/>

    <TherapyForm /> 
    </>
  );
}
