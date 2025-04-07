import Link from "next/link"
interface CoachCtaProps {
  paragraph: string;
}

const CoachCta: React.FC<CoachCtaProps> = ({paragraph}) => {
  return (
    <section>
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="bg-gradient-to-br from-blue-50 to-orange-20 rounded-lg p-8 md:p-10 py-14 lg:p-14 flex flex-col md:flex-row items-center justify-center text-center md:text-left md:justify-start md:items-start gap-8">
                <div className="md:w-2/5">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-blue-950 font-display font-bold leading-tight">
                        Get In Touch
                    </h1>
                </div>
                <div className="flex flex-col md:flex-1 space-y-8">
                    <p className="text-gray-700 text-lg">
                    {paragraph}
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CoachCta