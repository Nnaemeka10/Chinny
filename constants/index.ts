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
    { 
      'id': 5,
      'src': '/frame5.png', 
      'alt': 'frame5' 
    },
    { 
      'id': 6,
      'src': '/frame6.png', 
      'alt': 'frame6' 
    },
    { 
      'id': 7,
      'src': '/frame7.png', 
      'alt': 'frame7' 
    },
    { 
      'id': 8,
      'src': '/frame8.png', 
      'alt': 'frame8' 
    },
  ];

export const COACH_SERVICES = [
  {
    id: 1,
    title: "Personal Growth Coaching",
    description: "Unlock your potential and create a life of fulfillment and purpose, Let us talk about your goals, life purpose, etc.",
  },
  {
    id: 2,
    title: "Career Coaching",
    description: "Navigate your career path with confidence and clarity. Let us talk about your career goals, job search strategies, etc.",
  },
  {
    id: 3,
    title: "Spiritual Coaching",
    description: "Live an unburdened life. Let us talk about your belief, life, spiritual goals, etc.",
  },
];

export const THERAPY_SERVICES = [


  {
    id: 2,
    title: "",
    description: "As a mental health advocate, I am involved in creating mental health awareness by going to schools to give talks on suicide prevention. \n\n I also create mental health awareness on digital platforms through my podcasts on youtube and tiktok.\n \n I have also written books on mental health published on Amazon and okadabooks.\n \n Presently I have a mental health level 2 certificate.\n I am all about promoting mental health in the society.",
  },
];

export const OPTOMETRY_SERVICES = [
  { 
    title: 'Eye Exams', 
    description: 'Comprehensive eye exams to assess vision and overall eye health.' 
  },
  { 
    title: 'Contact Lens Fitting', 
    description: 'Expert fitting and training for all types of contact lenses.' 
  },
  { 
    title: 'Pediatric Eye Care', 
    description: 'Specialized care for children’s unique visual needs.' 
  },
  { 
    title: 'Eyeglass Prescriptions', 
    description: 'Personalized prescriptions to improve vision clarity.' 
  },
  { title: 'Vision Therapy', 
    description: 'Customized programs to improve visual skills and efficiency.' },
];

export const COACH_TESTIMONIALS = [
  {
    id: 1,
    description: '"I’ve gained clarity and confidence in pursuing my dreams."',
    person: '- Nnaemeka',
  },

  {
    id: 2,
    description: '"The coaching sessions have transformed my mindset and unlocked new possibilities."',
    person: '- Princess',
  }
];

export const THERAPY_TESTIMONIALS = [
  {
    id: 1,
    description: '“Working with Dr. Chinny has been life-changing. They helped me process past trauma and develop healthier coping mechanisms. I feel more resilient and empowered than ever before.”',
    person: '- Martins',
  },
  {
    id: 2,
    description: '“Therapy has been a transformative experience for me. It provided a safe space to explore my emotions, gain clarity, and rebuild my confidence.”',
    person: '- Chiamaka',
  }
]

export const OPTOMETRY_TESTIMONIALS = [
 
  {
    description: "My new glasses are perfect! The optometrist took the time to explain everything and helped me find a stylish frame that suits me.",
    person: "Covenant E."
  },
 
  {
    description: "Booking an appointment was simple and the service was outstanding. I finally feel like I understand what’s going on with my vision.",
    person: "Chukwuma T."
  },
];

export const PRODUCTS = [
  {
    id: 1,
    name: "Classic Frame",
    description: "Stylish, protective lenses designed for daily screen use.",
    price: "$120",
    image: "/product1.png",
  },
  {
    id: 2,
    name: "Modern Frame",
    description: "Transitions from indoors to outdoors with UV protection.",
    price: "$150",
    image: "/product2.png",
  },
  {
    id: 3,
    name: "Digital Frane",
    description: "Perfect for professionals with prolonged screen time.",
    price: "$130",
    image: "/product3.png",
  },
  {
    id: 4,
    name: "Adaptive Frame",
    description: "Effortlessly adjusts to varying light conditions.",
    price: "$160",
    image: "/product4.png",
  },
  {
    id: 5,
    name: "Premium Frame",
    description: "Enhanced protection with sleek, modern design.",
    price: "$180",
    image: "/product5.png",
  },
  {
    id: 6,
    name: "Classic Frame",
    description: "Perfect for outdoor enthusiasts and daily use.",
    price: "$140",
    image: "/product6.png",
  },
  {
    id: 7,
    name: "Trendy Frame",
    description: "Fashion-forward design with blue light filtering.",
    price: "$125",
    image: "/product7.png",
  },
  {
    id: 8,
    name: "Sporty Frame",
    description: "Durable and stylish for active lifestyles.",
    price: "$155",
    image: "/product8.png",
  },
  {
    id: 9,
    name: "Elegant Frame",
    description: "Sophisticated design with advanced blue light protection.",
    price: "$175",
    image: "/product9.png",
  },
  {
    id: 10,
    name: "Luxury Frame",
    description: "High-end lenses that adapt to your lifestyle.",
    price: "$200",
    image: "/product10.png",
  },
  {
    id: 11,
    name: "Retro Frame",
    description: "Vintage-inspired design with modern blue light technology.",
    price: "$135",
    image: "/product11.png",
  },
  {
    id: 12,
    name: "Chic Frame",
    description: "Fashionable and functional for everyday wear.",
    price: "$145",
    image: "/product12.jpg",
  },
  {
    id: 13,
    name: "Stylish Frame",
    description: "Sleek design with effective blue light filtering.",
    price: "$150",
    image: "/product13.png",
  },
  {
    id: 14,
    name: "All-Day Frame",
    description: "Comfortable and stylish for all-day wear.",
    price: "$165",
    image: "/product14.png",
  },
  {
    id: 15,
    name: "Fashionable Frame",
    description: "Trendy design with advanced blue light protection.",
    price: "$170",
    image: "/product15.png",
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
    // {
    //   title: 'Our Community',
    //   links: [
    //     {label: 'Umuahia', href: '/', key: 'f_umuahia'}, 
    //     {label: 'Portharcourt', href: '/', key: 'f_portharcourt'}, 
    //     {label: 'Owerri', href: '/', key: 'f_owerri'},
    //   ],
    // },
  ];
  
  export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
      { label: 'Admin', value: '+234 809 628 2563' },
      { label: 'Email', value: 'chiamakanduka@yahoo.com' },
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