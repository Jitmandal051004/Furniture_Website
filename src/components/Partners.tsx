import { roboto_slab } from '@/app/fonts'
import { brands } from '@/constant'
import Link from 'next/link'
import React from 'react'

const Partners = () => {
    return (
        <div className='h-[813px] flex justify-center items-center'>
            <div className='w-[86%] flex flex-col items-center justify-center gap-10'>
                <div className={`${roboto_slab} w-[55%] flex flex-col gap-5 justify-center items-center text-center`}>
                    <span className='text-4xl'>OUR PARTNERS</span>
                    <span className='text-xl'>
                        At Snug, we believe that quality starts with the right materials. That is why we source our fabrics, wallpapers, flooring, and upholstery from trusted brands known for durability, aesthetics, and sustainability.
                    </span>
                </div>
                <div className="grid grid-cols-8 grid-rows-3 gap-4 w-full">
                    {/* {Array.from({ length: 24 }).map((_, index) => (
                        <div 
                        key={index} 
                        className={`bg-gray-300 flex items-center justify-center text-white h-[136px] `} >
                        Item {index + 1}
                        </div>
                    ))} */}
                    {brands.map((br)=>(
                        <div className={`bg-gray-300 flex items-center justify-center text-white h-[136px] ${br.bg} bg-cover`}>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Partners