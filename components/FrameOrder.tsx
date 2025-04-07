
import { ShoppingCart, User } from 'react-feather'
import Button from '@/components/Button'

const FrameOrder = () => {
  return (
    <section className="max-w-7xl mx-auto py-32 px-6">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-200">
                <div className="absolute right-0 top-0 h-full w-full flex justify-end">
                    <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
                        <span className="absolute w-16 h-16 -top-1 -right-1 bg-blue-500 rounded-md rotate-45" />
                        <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-teal-500 rounded-md rotate-45" />
                        <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-indigo-300 rounded-md rotate-45" />
                    </div>
                </div>
                <div className="absolute left-0 bottom-0 h-full w-full flex items-end">
                    <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
                        <span className="absolute w-16 h-16 -top-1 -right-1 bg-blue-500 rounded-md rotate-45" />
                        <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-teal-500 rounded-md rotate-45" />
                        <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-indigo-300 rounded-md rotate-45" />
                    </div>
                </div>
                <div className="mx-auto text-left sm:text-center max-w-xl md:max-w-2xl relative space-y-8">
                    <h1 className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight font-bold text-blue-10">
                        Click Below and <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-20 from-20% via-indigo-400 via-30% to-blue-10">Place Your Order Now</span>
                    </h1>
                    <div className="mx-auto max-w-md sm:max-w-xl flex justify-center">
                        <a href="https://www.instagram.com/chiniphotochromic/">
                            <Button 
                                type='button'
                                title='Order Now'
                                IconDefault={<ShoppingCart  strokeWidth={3} size={20}/>}
                                IconHover={<ShoppingCart className='text-blue-10' size={20} strokeWidth={3}/>}
                                variant='btn_dark_blue'
                            /> 
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FrameOrder