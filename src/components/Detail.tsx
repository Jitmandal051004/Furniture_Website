import { Description } from '@/constant'
import { CircleDollarSign, Laugh, ShoppingCart, Truck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Deatil = () => {
    return (
        <div className='w-full flex justify-center py-20 bg-[#E5E4DF]'>
            <div className="flex flex-col gap-3 w-[85%]">
                <div className="flex flex-col gap-4 mb-10 lg:flex-row justify-between">
                    {Description.map((desc)=>(
                        <div className='items-center text-center lg:text-left lg:items-center lg:w-[20%] flex flex-col gap-8 justify-center'>
                            <div className='font-bold text-xl'>
                                {desc.title}
                            </div>
                            <Image 
                                src={desc.images}
                                height={386}
                                width={256}
                                alt={desc.title}
                            />
                            <div className='font-normal text-gray-900 text-wrap text-sm leading-6 text-center'>
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