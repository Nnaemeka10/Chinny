interface CoachTestimonial {
    person: string;
    description: string;
}
interface CoachTestimonialProps {
    testimonials: CoachTestimonial[];
}

const CoachTestimonial: React.FC<CoachTestimonialProps> = ({testimonials}) => {
  return (
    <section className="py-20 px-10 sm:px-4 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative transition-transform transform hover:scale-105 bg-white shadow-lg rounded-xl p-6 overflow-hidden">
                <div>
                  <p>{testimonial.description}</p>
                  <span className="text-sm text-gray-600">{testimonial.person}</span>
                </div>
                <span className="absolute w-32 aspect-square -bottom-16 -right-16 bg-sky-600/10 rounded-full" />
              </div>
            ))}

          </div>
        </div>
       
      </section>
  )
}

export default CoachTestimonial