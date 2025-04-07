import React from 'react'
import Link from 'next/link'

const FrameCTA = () => {
  return (
    <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="bg-gradient-to-br from-blue-200 to-gray-100 rounded-lg p-8 md:p-10 py-14 lg:p-14 flex flex-col md:flex-row items-center justify-center text-center md:text-left md:justify-start md:items-start gap-8">
                <div className="md:w-2/5">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-blue-10  font-display font-bold leading-tight text-left md:text-center">
                        Why Choose Chinny Photos?
                    </h1>
                </div>
                <div className="flex flex-col md:flex-1 space-y-8">
                    <h2 className="text-lg font-semibold text-gray-900 text-left">
                     Our glasses are designed to enhance your vision, comfort, and style with cutting-edge technology. Here’s what sets us apart:
                    </h2>
                   
                    <ul className="text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-5 ">
                        <li className="flex items-center gap-x-3 sm:text-left">
                            <span className="bg-blue-100 text-blue-600 p-0.5 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <p className='text-left'>Complete Eye Protection</p>
                        </li>
                        <li className="flex items-center gap-x-3">
                            <span className="bg-blue-100 text-blue-600 p-0.5 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <p className="text-left">Fashionable Yet Functional</p>
                        </li>
                        <li className="flex items-center gap-x-3">
                            <span className="bg-blue-100 text-blue-600 p-0.5 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <p className='text-left'>Enhanced Comfort & Clarity of sight </p>
                        </li>
                        <li className="flex items-center gap-x-3">
                            <span className="bg-blue-100 text-blue-600 p-0.5 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <p className="text-left"> Built to Last </p>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
    </section>
  )
}

export default FrameCTA