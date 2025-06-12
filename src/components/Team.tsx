import { roboto_slab } from '@/app/fonts'
import React from 'react'
import Image from 'next/image'

const Team = () => {
    return (
        <div className='h-[1880px] py-20 flex justify-center'>
            <div className="grid grid-rows-3 grid-cols-2 gap-7 ">
                <div className=" flex items-center justify-center text-white w-[792px] h-[520px] bg-founderImg bg-cover bg-[50%_25%] bg-no-repeat">
                </div>
                <div className="relative flex items-center text-black w-[792px] h-[520px]">
                    <p className={`${roboto_slab.className} absolute left-8 flex flex-col gap-4 text-left lg:w-[50%] text-pretty leading-[1.55]`}>
                        <span className='text-3xl font-normal flex flex-col'>Meet Lokesh<span className='text-sm italic'>Founder</span> </span>
                        <span className='text-base text-gray-500 italic'>“Unlike jewelry, watches are both aesthetic and useful.”</span>
                        <span>With a sharp business mind and a keen eye for interiors, Lokesh E., an MBA graduate, founded The Furnishing Studio in 2014 with a clear mission: to make soft furnishings more accessible, personalized, and style-driven. Over the years, his vision evolved into what is now known as Snug—a name that captures the essence of what the brand truly offers: comfort, elegance, and a sense of belonging.</span>
                        <span>Snug represents the culmination of Lokesh E.'s vision to make quality soft furnishings both accessible and stylish, building on a foundation established in 2014. The company specializes in creating personalized interior solutions, from custom curtains and plush upholstery to sophisticated wallpapers, all designed to enhance comfort and elegance. Rooted in trust and shaped by extensive industry experience, Snug continues to fulfill its core mission of helping clients feel truly at home in their spaces through exceptional design and craftsmanship.</span>
                        {/* <span>What began as a single-store venture quickly grew into a trusted name for premium curtains, blinds, upholstery, wallpapers, and more. Lokesh’s hands-on approach, industry knowledge, and genuine passion for helping clients turn houses into homes continue to shape the brand’s journey. Under his leadership, Snug isn’t just furnishing spaces—it’s designing experiences of warmth and expression.</span> */}
                    </p>
                </div>
                <div className="relative flex items-center justify-end text-black w-[792px] h-[520px]">
                    <p className={`${roboto_slab.className} absolute right-8 flex flex-col gap-4 text-left lg:w-[50%] text-pretty leading-[1.55]`}>
                        <span className='text-3xl font-normal'>Our Vision</span>
                        <span>To become a leading name in soft furnishings by redefining how people experience comfort in their living and working spaces—one curtain, one fabric, one cozy corner at a time.</span>
                    </p>
                </div>
                <div className="bg-[#E5E4DF] flex items-center justify-center text-white w-[792px] h-[520px] bg-ourVisionImg bg-cover bg-[50%_25%] bg-no-repeat">
                </div>
                <div className="bg-[#E5E4DF] flex items-center justify-center text-white w-[792px] h-[520px] bg-ourMissionImg bg-cover bg-[50%_25%] bg-no-repeat">
                </div>
                <div className="relative flex items-center justify-start text-black w-[792px]">
                    <p className={`${roboto_slab.className} absolute left-8 flex flex-col gap-4 text-left lg:w-[50%] text-pretty leading-[1.55]`}>
                        <span className='text-3xl font-normal'>Our Mission</span>
                        <span>To create spaces that feel like home by offering thoughtfully curated, high-quality soft furnishings that blend comfort, function, and personal style. Snug is committed to elevating everyday living through tailored solutions that reflect individuality and warmth.</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Team