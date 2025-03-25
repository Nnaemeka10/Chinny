import { Key } from "react-feather";

// NAVIGATION
export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/#about-page', key: 'about_us', label: 'About Us' },
    { href: '/eye', key: 'eye_consultancy ', label: 'Eye Consultancy'},
    { href: '/therapy', key: 'therapy_session', label: 'Mental Health Therapy'},
    { href: '/coach', key: 'life_coaching', label: 'Life Coach' },
    { href: '/frames', key: 'frames', label: 'Frames' },
  ];
  

  export const ABOUT_INFO = 
    {
      title: 'About Us',
      description:
        ' My business Chiniphotos is an eyecare brand just as the name implies,photos stands for photochromic lenses. The present day weather such as the harsh effects of the ultraviolet rays coming from the sun and the blue ray coming from our phones,laptops all play a damaging role to the eyes. This increased the need for people to make use of these glasses that aims to shield from the sun and bright lights. Presently chiniphotos deals in prescription of these photochromic/bluecut lenses at a very affordable amount unlike other eyeclinics. This is because the lenses are sourced directly from the optical lab. Also contact lenses and other eyecare solutions are available. We also handle home consultations and online consultations to various individuals as their case maybe.Presently the team is made up of three people,Myself the optometrist who prescribes the adequate lens required by the particular individual,the optician who fits the lenses and the delivery man who makes deliveries either door to door or waybills as the case may be nationwide. As an optometrist I have been practicing in this field for 5years now during which I have gathered experiences from the best eyeclinics/professionals. As an enterpreneur I have attended various trainings including the tony elumelu business management course.I have also carried out various anniversary sales/ participated in outreaches and given talks as a means of giving back to the society as I believe that everyone deserves equal access to quality eyecare.'
    }

  // Frames section
  export const FRAMES = [
    { 
      'id': 1,
      'src': '/frame1.jpg', 
      'alt': 'frame1' 
    },
    { 
      'id': 2,
      'src': '/frame2.jpg', 
      'alt': 'frame2' 
    },
    { 
      'id': 3,
      'src': '/frame3.jpg', 
      'alt': 'frame3' 
    },
    { 
      'id': 4,
      'src': '/frame4.jpg', 
      'alt': 'frame4' 
    },
  ];
  
  // FOOTER SECTION
  export const FOOTER_LINKS = [
    {
      title: 'Services',
      links: [
        { label: 'Eye Consultancy', href: '/eye', key: 'f_eye_consultancy' },
        { label: 'Frames', href: '/frames', key: 'f_frame' },
        { label: 'Mental Health Therapy', href: '/therapy', key: 'f_mental_health_therapy' },
        { label: 'Life Coach', href: '/coach', key: 'f_life_coaching' },
      ],
    },
    {
      title: 'Our Community',
      links: [
        {label: 'Umuahia', href: '/', key: 'f_umuahia'}, 
        {label: 'Portharcourt', href: '/', key: 'f_portharcourt'}, 
        {label: 'Owerri', href: '/', key: 'f_owerri'},
      ],
    },
  ];
  
  export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
      { label: 'Admin', value: '08022938790' },
      { label: 'Email', value: 'chiniphotos80@gmail.com' },
    ],
  };
  
  export const SOCIALS = {
    title: 'Social',
    links: [
      '/facebook.svg',
      '/instagram.svg',
      '/twitter.svg',
      '/youtube.svg',
    ],
  };