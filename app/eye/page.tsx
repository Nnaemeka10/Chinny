// pages/login.js
import React from 'react';

export default function LoginPage() {
  return (
    <section className="bg-white flex w-full min-h-screen overflow-hidden no-scrollbar">
      {/* Outer container */}
      <div className="flex flex-col min-h-screen flex-grow">
        {/* Login background */}
         {/*<div
          className="relative bg-white pt-16"
          style={{ minHeight: "692px" }}
        >
          <div
            className="grid justify-center"
            style={{
              display: "grid",
              gridTemplateColumns:
                "1fr repeat(16, 86.6px) 1fr",
              gridTemplateRows:
                "1fr repeat(8, 64px) 1fr",
              margin: "0 -2%",
              transform: "rotate(-12deg) skew(-12deg)",
            }}
          > */}
            {/* Background grid items */}
            {/* <div
              className="flex"
              style={{ gridArea: "top / start / 8 / end" }}
            >
              <div
                className="flex-grow bg-gradient-to-b from-white to-gray-100"
              ></div>
            </div>
            <div
              className="flex"
              style={{ gridArea: "4 / 2 / auto / 5" }}
            >
              <div
                className="flex-grow border-2 border-gray-200 animate-[animationLeftRight_2s_ease-in-out_infinite]"
              ></div>
            </div>
            <div
              className="flex"
              style={{ gridArea: "6 / start / auto / 2" }}
            >
              <div className="flex-grow bg-blue-900"></div>
            </div>
            <div
              className="flex"
              style={{ gridArea: "7 / start / auto / 4" }}
            >
              <div className="flex-grow bg-blue-600 animate-[animationLeftRight_2s_ease-in-out_infinite]"></div>
            </div>
            <div
              className="flex"
              style={{ gridArea: "8 / 4 / auto / 6" }}
            >
              <div className="flex-grow bg-gray-100 animate-[animationLeftRight_2s_ease-in-out_infinite]"></div>
            </div>
            <div
              className="flex"
              style={{ gridArea: "2 / 15 / auto / end" }}
            >
              <div className="flex-grow bg-cyan-200 animate-[animationRightLeft_2s_ease-in-out_infinite]"></div>
            </div>
            <div
              className="flex"
              style={{ gridArea: "3 / 14 / auto / end" }}
            >
              <div className="flex-grow bg-blue-600 animate-[animationRightLeft_2s_ease-in-out_infinite]"></div>
            </div>
            <div
              className="flex"
              style={{ gridArea: "4 / 17 / auto / 20" }}
            >
              <div className="flex-grow bg-gray-100 animate-[animationRightLeft_2s_ease-in-out_infinite]"></div>
            </div>
            <div
              className="flex"
              style={{ gridArea: "5 / 14 / auto / 17" }}
            >
              <div className="flex-grow border-2 border-gray-200 animate-[animationRightLeft_2s_ease-in-out_infinite]"></div>
            </div>
          </div>
        </div> */}
        {/* Main content */}
        <div className="pt-6 flex flex-col flex-grow relative z-10">
          <div className="pt-12 pb-6 flex justify-center">
          <h1 className='text-2xl font-medium text-gray-900 mb-4'>Book Eye Consultancy</h1>
          </div>
          <div className="w-full">
            <div className="mx-auto w-full max-w-[448px] bg-white rounded shadow-lg mb-40">
              <div className="px-12 py-12">
                <span className="block text-xl leading-7 text-[#1a1f36] pb-4">
                  Please input your details
                </span>
                <form id="eye-consult">
                  
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

                  <div className="mb-6">
                    <div className="grid grid-cols-2 items-center">
                      <label htmlFor="complaint" className="block mb-2">
                        Complaint
                      </label>
                    </div>
                    <textarea
                      rows={3}
                      required
                      autoComplete='off'                   
                      name="complaint"
                      className="text-base leading-7 px-4 py-2 w-full min-h-[44px] border-0 rounded outline-blue-500 bg-white shadow-[0_0_0_1px_rgba(60,66,87,0.16)] hide-scrollbar"
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
  );
}
