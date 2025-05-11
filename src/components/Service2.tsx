"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { roboto_slab } from '@/app/fonts'

const Service = () => {
    return (
        <div className='w-full flex justify-center py-20'>
            <div className="w-[85%]">
                <div className='font-semibold text-4xl mb-7 flex justify-between'>
                    <span className='font-medium text-3xl'>Our Services</span>
                    <span>
                        <Link
                            className='hover:text-gray-500 border-b-2 border-b-black hover:border-b-gray-500'
                            href={"/"}
                        >
                            Explore
                        </Link>
                    </span>
                </div>

                <div className="grid lg:grid-cols-2 w-full gap-4">
                    <CustomSofa />
                    <CurtainWorks />
                    <Wallpapers />
                    <WindowBlinds />
                </div>
            </div>
        </div>
    )
}

const CustomSofa = () => {
    const [show, setShow] = useState(false)

    return (
        <div className={`bg-CP1 relative overflow-hidden bg-no-repeat bg-[10%_80%] bg-[length:912px_1035px] h-[520px] flex justify-center items-end`}>
            <div className="absolute inset-0 bg-black opacity-45"></div>
            <div className={`${roboto_slab.className} relative z-10 flex flex-col items-center text-white w-[90%] pb-6`}>
                <span className='font-semibold text-lg mb-2'>Custom Sofas</span>
                <button
                    onClick={() => setShow(prev => !prev)}
                    className='text-sm mb-2 hover:text-gray-300 border-b-2 border-b-white hover:border-b-gray-300'
                >
                    Learn More
                </button>
                <div
                    className={`
                        text-gray-300 text-sm text-center overflow-hidden transition-all duration-500 ease-in-out
                        ${show ? 'max-h-[160px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-4'}
                    `}
                >
                    Your sofa plays a vital role in your living space, offering comfort and reflecting your personal style. At SNUG, we offer a convenient custom sofa service, allowing you to create a piece tailored to your exact specifications.
                </div>
            </div>
        </div>
    )
}

const CurtainWorks = () => {
    const [show, setShow] = useState(false)

    return (
        <div className={`bg-CP2 relative overflow-hidden bg-no-repeat bg-[50%_80%] bg-[length:912px_1035px] h-[520px] flex justify-center items-end`}>
            <div className="absolute inset-0 bg-black opacity-45"></div>
            <div className={`${roboto_slab.className} relative z-10 flex flex-col items-center text-white w-[90%] pb-6`}>
                <span className='font-semibold text-lg mb-2'>Curtain Works</span>
                <button
                    onClick={() => setShow(prev => !prev)}
                    className='text-sm mb-2 hover:text-gray-300 border-b-2 border-b-white hover:border-b-gray-300'
                >
                    Learn More
                </button>
                <div
                    className={`
                        text-gray-300 text-sm text-center overflow-hidden transition-all duration-500 ease-in-out
                        ${show ? 'max-h-[160px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-4'}
                    `}
                >
                    At SNUG, we offer a curated selection of curtain styles, each designed to meet diverse aesthetic preferences and practical needs.
                </div>
            </div>
        </div>
    )
}

const Wallpapers = () => {
    const [show, setShow] = useState(false)

    return (
        <div className={`bg-CP3 relative overflow-hidden bg-no-repeat bg-cover h-[520px] flex justify-center items-end`}>
            <div className="absolute inset-0 bg-black opacity-45"></div>
            <div className={`${roboto_slab.className} relative z-10 flex flex-col items-center text-white w-[90%] pb-6`}>
                <span className='font-semibold text-lg mb-2'>Wallpapers</span>
                <button
                    onClick={() => setShow(prev => !prev)}
                    className='text-sm mb-2 hover:text-gray-300 border-b-2 border-b-white hover:border-b-gray-300'
                >
                    Learn More
                </button>
                <div
                    className={`
                        text-gray-300 text-sm text-center overflow-hidden transition-all duration-500 ease-in-out
                        ${show ? 'max-h-[160px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-4'}
                    `}
                >
                    Wallpaper is a powerful design element that can elevate your space. We offer a collection of wallpapers from renowned brands and custom design options.
                </div>
            </div>
        </div>
    )
}

const WindowBlinds = () => {
    const [show, setShow] = useState(false)

    return (
        <div className={`bg-CP4 relative overflow-hidden bg-no-repeat bg-[50%_60%] bg-[length:912px_1035px] h-[520px] flex justify-center items-end`}>
            <div className="absolute inset-0 bg-black opacity-45"></div>
            <div className={`${roboto_slab.className} relative z-10 flex flex-col items-center text-white w-[90%] pb-6`}>
                <span className='font-semibold text-lg mb-2'>Window Blinds</span>
                <button
                    onClick={() => setShow(prev => !prev)}
                    className='text-sm mb-2 hover:text-gray-300 border-b-2 border-b-white hover:border-b-gray-300'
                >
                    Learn More
                </button>
                <div
                    className={`
                        text-gray-300 text-sm text-center overflow-hidden transition-all duration-500 ease-in-out
                        ${show ? 'max-h-[160px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-4'}
                    `}
                >
                    Blinds offer a sleek alternative to curtains with great light control and a clean look. Explore our range of interior and exterior blinds.
                </div>
            </div>
        </div>
    )
}

export default Service
