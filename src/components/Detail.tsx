import { Description } from '@/constant'
import { CircleDollarSign, Laugh, ShoppingCart, Truck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Deatil = () => {
    return (
        <div className='w-full flex justify-center py-20 bg-[#E5E4DF]'>
            <div className="flex flex-col justify-center">
                <div className="flex flex-col gap-20 mb-10 lg:flex-row justify-between">
                    {Description.map((desc, index)=>(
                        <div key={index} className='text-start lg:items-start items-center gap-3 flex flex-col lg:gap-5 justify-start w-[356px]'>
                            <div className= {`font-medium lg:text-start text-center text-2xl ${desc.titleWidth} h-[58px] mb-5`}>
                                {desc.title}
                            </div>
                            <Image 
                                src={desc.images}
                                height={258}
                                width={356}
                                alt={desc.title}
                            />
                            <div className='font-normal text-gray-900 lg:text-left text-sm leading-6 text-center'>
                                {desc.desc}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center '>
                    <Link className='hover:text-gray-500 border-b-2 border-b-black hover:border-b-gray-500' href={"/"}>Book A service</Link>
                </div>
            </div>
        </div>
    )
}

export default Deatil