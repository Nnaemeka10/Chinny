import React from 'react'

const TherapyForm = () => {
  return (
    <section id='Therapy_form' className="bg-white flex w-full min-h-screen overflow-hidden no-scrollbar">
      {/* Outer container */}
      <div className="flex flex-col min-h-screen flex-grow">
        {/* Main content */}
        <div className="pt-6 flex flex-col flex-grow relative z-10">
          <div className="pt-12 pb-6 flex justify-center">
          <h1 className='text-2xl font-medium text-gray-900 mb-4'>Book Therapy Session</h1>
          </div>
          <div className="w-full">
            <div className="mx-auto w-full max-w-[448px] bg-white rounded shadow-lg mb-40">
              <div className="px-12 py-12">
                <span className="block text-xl leading-7 text-[#1a1f36] pb-4">
                  Please fill the form
                </span>
                <form action='https://formsubmit.co/20aea8516128f7977f3780fda8633b44'  method='POST' id="eye-consult" encType="multipart/form-data">
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="text-base leading-7 px-4 py-2 w-full min-h-[44px] border-0 rounded outline-blue-500 bg-white shadow-[0_0_0_1px_rgba(60,66,87,0.16)]"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="name" className="block mb-2">
                        Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="text-base leading-7 px-4 py-2 w-full min-h-[44px] border-0 rounded outline-blue-500 bg-white shadow-[0_0_0_1px_rgba(60,66,87,0.16)]"
                    />
                  </div>

                  
                  <div className="mb-6">
                    <div className="grid grid-cols-2 items-center">
                      <label htmlFor="sex" className="block mb-2">
                        Sex
                      </label>
                    </div>
                    <select
                      name="sex"
                      defaultValue='default'
                      className="text-base leading-7 px-2 py-2 w-full min-h-[44px] border-0 rounded outline-blue-500 bg-white shadow-[0_0_0_1px_rgba(60,66,87,0.16)] flex flex-1 text-gray-800 cursor-pointer appearance-none select overflow-hidden relative" 
                    >
                      <option value = 'default' disabled>-select your sex-</option>
                      <option value = '1'>Male</option>
                      <option value = '2'>Female</option>
                      <option value = '3'>Others</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <div className="grid grid-cols-2 items-center">
                      <label htmlFor="age" className="block mb-2">
                        Age
                      </label>
                    </div>
                    <select
                      name="age"
                      defaultValue='default'
                      className="text-base leading-7 px-2 py-2 w-full min-h-[44px] border-0 rounded outline-blue-500 bg-white shadow-[0_0_0_1px_rgba(60,66,87,0.16)] flex flex-1 text-gray-800 cursor-pointer appearance-none select overflow-hidden relative" 
                    >
                        <option value = 'default' disabled>-select your age-</option>
                      <option value = '1'>0-12</option>
                      <option value = '2'>13-25</option>
                      <option value = '3'>Above 25</option>
                    </select>
                  </div>

                  <span className="block text-sm mb-6">
                   
                <a href="https://www.worksafenb.ca/media/62308/succeed-mental-health-questionnaire.pdf" className="text-blue-600">
                    Click on this link, fill the form and upload it below{" "}
                </a>
              </span>

                  <div className="mb-6">
                    <div className="grid grid-cols-2 items-center">
                      <label htmlFor="file" className="block mb-2">
                        Upload Form
                      </label>
                    </div>
                    <input
                      type='file'
                      required                   
                      name="file"
                      className="text-base leading-7 py-2 w-full min-h-[44px] border-0 rounded bg-white hide-scrollbar inline-block border-b-2 border-blue-10"
                    />
                  </div>

                  

                  <div className="mb-6 flex items-center">
                    <label htmlFor="checkbox" className="flex items-center m-0">
                      <input
                        type="checkbox"
                        name="checkbox"
                        className="w-5 h-4 mr-2 shadow-none"
                      />
                      <p className='text-xs'>I guarantee that all information provided is accurate</p>
                    </label>
                  </div>
                  <div className="mb-6">
                    <input
                      type="submit"
                      name="submit"
                      value="Book"
                      className="bg-blue-10 shadow-md text-white-10 font-semibold cursor-pointer w-full py-2 rounded"
                    />
                  </div>

                 
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default TherapyForm