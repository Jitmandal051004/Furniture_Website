// "use client"
// import { roboto_slab } from '@/app/fonts'
// import Link from 'next/link'
// import * as React from "react"
// import Autoplay from "embla-carousel-autoplay"
// import useEmblaCarousel from "embla-carousel-react"

// import { Card, CardContent } from "@/components/ui/card"
// import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

// const Banner = () => {
//     const totalSlides = 5
//     const barFillDuration = 5000

//     const [progressValues, setProgressValues] = React.useState(Array(totalSlides).fill(0))
//     const [activeBar, setActiveBar] = React.useState(0)

//     const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

//     const autoplayPlugin = React.useRef(
//         Autoplay({
//             delay: barFillDuration,
//             stopOnInteraction: false,
//             playOnInit: true,
//         })
//     )

//     React.useEffect(() => {
//         let step = 0
//         const steps = 100
//         const intervalTime = barFillDuration / steps

//         const interval = setInterval(() => {
//         setProgressValues((prev) => {
//             const updated = [...prev]
//             updated[activeBar] = (step / steps) * 100
//             return updated
//         })

//         step += 1

//         if (step > steps) {
//             step = 0

//             setProgressValues((prev) => {
//             const updated = [...prev]
//             updated[activeBar] = 100
//             return updated
//             })

//             setActiveBar((prev) => (prev + 1) % totalSlides)
//         }
//         }, intervalTime)

//         return () => clearInterval(interval)
//     }, [activeBar, barFillDuration])

//     return (
//         <div className='w-full flex justify-center'>
//             <div className='w-[94.5%] h-[35rem] lg:h-[50rem] rounded-xl overflow-hidden relative'>
//                 <Carousel ref={emblaRef} plugins={[autoplayPlugin.current]} className="w-full h-full">
//                     <CarouselContent>
//                         <CarouselItem key="1" className="w-full h-full">
//                             <Card className={`w-full h-full bg-BP1 bg-center bg-cover border-none`}>
//                             <CardContent className="relative w-full h-full p-0">
//                                 <div className='absolute inset-0 flex flex-col gap-10 items-end top-24 right-7 text-center'>
//                                 <p className={`${roboto_slab.className} flex flex-col gap-4 text-right w-[80%] lg:w-[60%] text-pretty font-semibold text-zinc-900 font-mono text-xl lg:text-[3rem] leading-[1.35]`}>
//                                     Transform Your Space with Snug&apos;s<br /> Custom Furnishings<br />
//                                     <Link href={"/"} className='hover:text-zinc-400 text-zinc-700 flex justify-end'>
//                                     <span className='border-b-2 border-zinc-700 hover:border-zinc-400'>
//                                         Explore Our Services
//                                     </span>
//                                     </Link>
//                                 </p>
//                                 </div>
//                             </CardContent>
//                             </Card>
//                         </CarouselItem>
//                         <CarouselItem key="2" className="w-full h-full">
//                             <Card className={`w-full h-full bg-BP2 bg-center bg-cover border-none`}>
//                             <CardContent className="relative w-full h-full p-0">
//                                 <div className='absolute inset-0 flex flex-col gap-10 items-end top-24 right-7 text-center'>
//                                 <p className={`${roboto_slab.className} flex flex-col gap-4 text-right w-[80%] lg:w-[60%] text-pretty font-semibold text-zinc-900 font-mono text-xl lg:text-[3rem] leading-[1.35]`}>
//                                     Transform Your Space with Snug&apos;s<br /> Custom Furnishings<br />
//                                     <Link href={"/"} className='hover:text-zinc-400 text-zinc-700 flex justify-end'>
//                                     <span className='border-b-2 border-zinc-700 hover:border-zinc-400'>
//                                         Explore Our Services
//                                     </span>
//                                     </Link>
//                                 </p>
//                                 </div>
//                             </CardContent>
//                             </Card>
//                         </CarouselItem>
//                         <CarouselItem key="3" className="w-full h-full">
//                             <Card className={`w-full h-full bg-BP3 bg-center bg-cover border-none`}>
//                             <CardContent className="relative w-full h-full p-0">
//                                 <div className='absolute inset-0 flex flex-col gap-10 items-end top-24 right-7 text-center'>
//                                 <p className={`${roboto_slab.className} flex flex-col gap-4 text-right w-[80%] lg:w-[60%] text-pretty font-semibold text-zinc-900 font-mono text-xl lg:text-[3rem] leading-[1.35]`}>
//                                     Transform Your Space with Snug&apos;s<br /> Custom Furnishings<br />
//                                     <Link href={"/"} className='hover:text-zinc-400 text-zinc-700 flex justify-end'>
//                                     <span className='border-b-2 border-zinc-700 hover:border-zinc-400'>
//                                         Explore Our Services
//                                     </span>
//                                     </Link>
//                                 </p>
//                                 </div>
//                             </CardContent>
//                             </Card>
//                         </CarouselItem>
//                         <CarouselItem key="4" className="w-full h-full">
//                             <Card className={`w-full h-full bg-BP4 bg-center bg-cover border-none`}>
//                             <CardContent className="relative w-full h-full p-0">
//                                 <div className='absolute inset-0 flex flex-col gap-10 items-end top-24 right-7 text-center'>
//                                 <p className={`${roboto_slab.className} flex flex-col gap-4 text-right w-[80%] lg:w-[60%] text-pretty font-semibold text-zinc-900 font-mono text-xl lg:text-[3rem] leading-[1.35]`}>
//                                     Transform Your Space with Snug&apos;s<br /> Custom Furnishings<br />
//                                     <Link href={"/"} className='hover:text-zinc-400 text-zinc-700 flex justify-end'>
//                                     <span className='border-b-2 border-zinc-700 hover:border-zinc-400'>
//                                         Explore Our Services
//                                     </span>
//                                     </Link>
//                                 </p>
//                                 </div>
//                             </CardContent>
//                             </Card>
//                         </CarouselItem>
//                         <CarouselItem key="5" className="w-full h-full">
//                             <Card className={`w-full h-full bg-BP5 bg-center bg-cover border-none`}>
//                             <CardContent className="relative w-full h-full p-0">
//                                 <div className='absolute inset-0 flex flex-col gap-10 items-end top-24 right-7 text-center'>
//                                 <p className={`${roboto_slab.className} flex flex-col gap-4 text-right w-[80%] lg:w-[60%] text-pretty font-semibold text-zinc-900 font-mono text-xl lg:text-[3rem] leading-[1.35]`}>
//                                     Transform Your Space with Snug&apos;s<br /> Custom Furnishings<br />
//                                     <Link href={"/"} className='hover:text-zinc-400 text-zinc-700 flex justify-end'>
//                                     <span className='border-b-2 border-zinc-700 hover:border-zinc-400'>
//                                         Explore Our Services
//                                     </span>
//                                     </Link>
//                                 </p>
//                                 </div>
//                             </CardContent>
//                             </Card>
//                         </CarouselItem>
//                     </CarouselContent>
//                 </Carousel>
//             </div>
//         </div>
//     )
// }

// export default Banner

import { roboto_slab } from '@/app/fonts'
import Link from 'next/link'

const Banner = () => {
    return (
        <div className='w-full flex justify-center bg-BP3 bg-no-repeat bg-cover bg-[50%_70%]'>
            <div className='w-[100%] h-[35rem] lg:h-[50rem] overflow-hidden relative'>
                <div className='absolute inset-0 flex flex-col gap-10 items-end top-24 right-7 text-center '>
                    <p className={`${roboto_slab.className} flex flex-col gap-4 text-right w-[80%] lg:w-[60%] text-pretty font-semibold text-zinc-900 font-mono text-xl lg:text-[3rem] leading-[1.35]`}>
                        Transform Your Space with Snug&apos;s<br /> Custom Furnishings<br />
                        <Link href={"/"} className='hover:text-zinc-400 text-zinc-700 flex justify-end'>
                            <span className='border-b-2 border-zinc-700 hover:border-zinc-400'>
                                Explore Our Services
                            </span>
                        </Link>
                    </p>
                </div> 
                {/*<video width="100%" height="100%" controls autoPlay loop muted>
                    <source src="/bannerVideo.mp4" type="video/mp4" />
                     Your browser does not support the video tag. 
                </video>*/}
            </div>
        </div>
    )
}

export default Banner
