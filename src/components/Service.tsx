import Link from 'next/link'
import { roboto_slab } from '@/app/fonts'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"

const Service = () => {
    return (
        <div className='w-full flex justify-center py-20'>
            <div className="w-[85%]">
                <div className='font-semibold text-4xl mb-7 flex justify-between'>
                    <span className='font-medium text-3xl'>Our Services</span>
                    <span><Link className='hover:text-gray-500 border-b-2 border-b-black hover:border-b-gray-500' href={"/"}>Explore</Link></span>
                </div>
                <div className="grid lg:grid-cols-2 w-full gap-4">
                    <div className={`bg-CP1 relative overflow-hidden bg-no-repeat bg-[10%_80%] bg-[length:912px_1035px] h-[520px] flex justify-center`}>
                        <div className="absolute inset-0 bg-black opacity-45"></div>
                        <div className={`${roboto_slab} flex relative flex-col items-center gap-3 text-white top-[376px]`}>
                            <span className='font-semibold'>Custom Sofas</span>
                            <HoverCard>
                                <HoverCardTrigger className='underline underline-offset-2 cursor-pointer'>Learn More</HoverCardTrigger>
                                <HoverCardContent>
                                    Your sofa plays a vital role in your living space, offering comfort and reflecting your personal style. At Snag, we offer a convenient custom sofa service, allowing you to create a piece tailored to your exact specifications.
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </div>
                    <div className={`bg-CP2 relative overflow-hidden bg-no-repeat bg-[50%_80%] bg-[length:912px_1035px] h-[520px] flex justify-center`}>
                        <div className="absolute inset-0 bg-black opacity-45"></div>
                        <div className={`${roboto_slab} flex relative flex-col items-center gap-3 text-white top-[376px]`}>
                            <span className='font-semibold'>Curtain works</span>
                            <HoverCard>
                                <HoverCardTrigger className='underline underline-offset-2 cursor-pointer'>Learn More</HoverCardTrigger>
                                <HoverCardContent>
                                    At SNUG, we offer a curated selection of curtain styles, each designed to meet diverse aesthetic preferences and practical needs.
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </div>
                    <div className={`bg-CP3 relative overflow-hidden bg-no-repeat bg-cover h-[520px] flex justify-center`}>
                        <div className="absolute inset-0 bg-black opacity-45"></div>
                        <div className={`${roboto_slab} flex relative flex-col items-center gap-3 text-white top-[376px]`}>
                            <span className='font-semibold'>Wallpapers</span>
                            <HoverCard>
                                <HoverCardTrigger className='underline underline-offset-2 cursor-pointer'>Learn More</HoverCardTrigger>
                                <HoverCardContent>
                                    Wallpaper is a powerful design element that can instantly elevate the look and feel of any space, adding texture, color, and personality to your walls. At [Your Brand Name], we offer an exquisite collection of wallpapers from renowned international and Indian brands, along with the exciting possibility of creating your very own custom designs.
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </div>
                    <div className={`bg-CP4 relative overflow-hidden bg-no-repeat bg-[length:912px_1035px] bg-[50%_60%] h-[520px] flex justify-center`}>
                        <div className="absolute inset-0 bg-black opacity-45"></div>
                        <div className={`${roboto_slab} flex relative flex-col items-center gap-3 text-white top-[376px]`}>
                            <span className='font-semibold'>Window Blinds</span>
                            <HoverCard>
                                <HoverCardTrigger className='underline underline-offset-2 cursor-pointer'>Learn More</HoverCardTrigger>
                                <HoverCardContent>
                                    Blinds offer a sleek and practical alternative to curtains, providing excellent light control, privacy, and a clean aesthetic. At SNUG, we offer a diverse range of interior and exterior blind solutions to complement any style and meet various functional needs.
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service