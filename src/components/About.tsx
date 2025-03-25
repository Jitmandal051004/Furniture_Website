import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <div className='h-[728px] bg-[#E5E4DF] flex justify-center items-center '>
            <div className='w-[86%] flex justify-center items-center gap-20'>
                <div className="w-[792px] h-[520px] bg-no-repeat bg-abtBg bg-cover"></div>
                <div className="w-[567px] h-[440px] flex flex-col gap-2 justify-center">
                    <span className='text-3xl mb-3'>ABOUT US</span>
                    <span>Welcome to Snug ”where comfort, connectivity, and sustainability come together.</span>
                    <span>We believe home is more than a space; it’s an experience that should seamlessly fit your lifestyle. Our logo, a continuous thread, symbolizes this connectivity, reflecting how our versatile, adaptable products blend effortlessly into your home.</span>
                    <span>Committed to style, quality, and sustainability, we partner with eco-conscious brands to offer responsibly made furnishings. At Snug, we create not just products, but lasting experiences that enhance your space while caring for the planet.</span>
                    <span>Discover how Snug transforms your home with comfort, connection, and conscious living.</span>
                    <span className='mt-10'><Link className='hover:text-gray-500 text-2xl border-b-2 border-b-black hover:border-b-gray-500' href={"/"}>Know More</Link></span>
                </div>
            </div>
        </div>
    )
}

export default About