import { roboto_slab } from '@/app/fonts'
import Image from 'next/image'
import { Button } from './ui/button'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'

const Aboutbanner = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center gap-10 p-16 bg-[#E5E4DF]'>
            <div className='w-[90.5%] h-[35rem] lg:h-[525px] bg-abtpgBg bg-[10%_47.5%] bg-[length:1604px_1000px] bg-no-repeat overflow-hidden relative'></div>
            <div className='w-[90.5%] flex justify-center'>
                <p className={`${roboto_slab.className} flex flex-col gap-4 text-center lg:w-[60%] text-pretty font-light text-zinc-900 text-xl lg:text-[3rem] leading-[1.55]`}>
                    <span className='text-4xl font-normal'>About Snag</span>
                    <span>At SNUG, we specialize in crafting custom furnishing solutions that bring comfort, elegance, and personality to your space. From bespoke curtains and blinds to custom wallpapers, flooring solutions, and handcrafted sofas, our expert team ensures every piece is tailored to fit your style and needs.</span>
                    <span>With a focus on quality, craftsmanship, and attention to detail, we transform interiors into inviting, functional spaces that feel like home. Whether you are renovating, redecorating, or designing from scratch, SNUG is here to create furnishings that reflect your vision.</span>
                    <span>Let&apos;s bring your space to life- customized, just for you</span>
                </p>
            </div>
        </div>
    )
}

export default Aboutbanner