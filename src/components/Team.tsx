import { roboto_slab } from '@/app/fonts'
import React from 'react'

const Team = () => {
    return (
        <div className='h-[1880px] py-20 flex justify-center'>
            <div className="grid grid-rows-3 grid-cols-2 gap-7 ">
                <div className="bg-[#E5E4DF] flex items-center justify-center text-white w-[792px] h-[520px]">
                </div>
                <div className="relative flex items-center text-black w-[792px] h-[520px]">
                    <p className={`${roboto_slab.className} absolute left-8 flex flex-col gap-4 text-left lg:w-[50%] text-pretty leading-[1.55]`}>
                        <span className='text-3xl font-normal flex flex-col'>Meet Lokesh<span className='text-sm italic'>Founder</span> </span>
                        <span className='text-base text-gray-500 italic'>“Unlike jewelry, watches are both aesthetic and useful.”</span>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus semper eget duis at. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Semper auctor neque vitae tempus quam pellentesque.</span>
                    </p>
                </div>
                <div className="relative flex items-center justify-end text-black w-[792px] h-[520px]">
                    <p className={`${roboto_slab.className} absolute right-8 flex flex-col gap-4 text-left lg:w-[50%] text-pretty leading-[1.55]`}>
                        <span className='text-3xl font-normal'>Our Vision</span>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus semper eget duis at. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Semper auctor neque vitae tempus quam pellentesque.</span>
                    </p>
                </div>
                <div className="bg-[#E5E4DF] flex items-center justify-center text-white w-[792px] h-[520px]">
                    
                </div>
                <div className="bg-[#E5E4DF] flex items-center justify-center text-white w-[792px]">
                    
                </div>
                <div className="relative flex items-center justify-start text-black w-[792px]">
                    <p className={`${roboto_slab.className} absolute left-8 flex flex-col gap-4 text-left lg:w-[50%] text-pretty leading-[1.55]`}>
                        <span className='text-3xl font-normal'>Our Mission</span>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus semper eget duis at. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Semper auctor neque vitae tempus quam pellentesque.</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Team