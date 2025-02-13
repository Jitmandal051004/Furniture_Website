import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <div className='h-[728px] bg-[#E5E4DF] flex justify-center items-center '>
            <div className='w-[86%] flex justify-center gap-20'>
                <div className="w-[792px] h-[520px] bg-no-repeat bg-abtBg bg-cover"></div>
                <div className="w-[567px] h-[468px] flex flex-col gap-5 justify-center">
                    <span className='text-3xl'>ABOUT US</span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus semper eget duis at. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Semper auctor neque vitae tempus quam pellentesque.</span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus semper eget duis at. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Semper auctor neque vitae tempus quam pellentesque.</span>
                    <span><Link className='hover:text-gray-500 border-b-2 border-b-black hover:border-b-gray-500' href={"/"}>Explore</Link></span>
                </div>
            </div>
        </div>
    )
}

export default About