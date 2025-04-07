import React from 'react'
import {PRODUCTS} from '@/constants'
import Image from 'next/image'

const FrameProduct = () => {
  return (
    <section id='shopping-list' className="max-w-7xl mx-auto py-4 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">Our Glasses Collection</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS.map(product => (
          <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className='w-full h-40 flex items-center justify-center relative'>
            <Image
                src={product.image} 
                alt={product.name} 
                width={180}
                height={180}
                className=" object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FrameProduct