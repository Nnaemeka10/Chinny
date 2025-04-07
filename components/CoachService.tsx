

interface CoachService {
    title: string;
    description: string;
}
interface CoachServiceProps {
    services: CoachService[];
    Title: string;
}


const CoachService: React.FC<CoachServiceProps> = ({ services, Title }) => {
  return (
    <section className="py-20 px-10 animate-fade-in sm:px-4 bg-gradient-to-b from-white-10 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{Title}</h2>
          
          
          <div className={`${services.length===1 ? 'justify-items-center' : 'md:grid-cols-3 sm:grid-cols-2'} grid grid-cols-1 gap-8`}>       
            {services.map((service, index) => (
              <div key={index} className={`${services.length===1 ? 'md:w-10/12 w-11/12 lg:w-1/2 xl:w-1/2' : ''} relative transition-transform transform hover:scale-105 bg-white shadow-lg rounded-xl p-6 overflow-hidden`}>
                <div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="whitespace-pre-line">{service.description}</p>
                </div>
                <span className="absolute w-32 aspect-square -bottom-16 -right-16 bg-sky-600/10 rounded-full"/>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default CoachService
