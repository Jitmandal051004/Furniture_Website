"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

export default function CarouselPlugin() {
    const totalSlides = 5
    const barFillDuration = 4998 // 5 seconds per bar

    const [progressValues, setProgressValues] = React.useState(Array(totalSlides).fill(0))
    const [activeBar, setActiveBar] = React.useState(0)

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const autoplayPlugin = React.useRef(
        Autoplay({
        delay: barFillDuration,
        stopOnInteraction: false,
        playOnInit: true,
        }),
    )

    React.useEffect(() => {
        let step = 0
        const steps = 100
        const intervalTime = barFillDuration / steps

        const interval = setInterval(() => {
            setProgressValues((prev) => {
                const updated = [...prev]
                updated[activeBar] = (step / steps) * 100
                return updated
            })

            step += 1

            if (step > steps) {
                step = 0

                setProgressValues((prev) => {
                const updated = [...prev]
                updated[activeBar] = 100
                return updated
                })

                if (activeBar < totalSlides - 1) {
                setActiveBar((prev) => prev + 1)
                } else {
                setActiveBar(0)
                setProgressValues(Array(totalSlides).fill(0))
                }
            }
        }, intervalTime)

        return () => clearInterval(interval)
    }, [activeBar, barFillDuration])

    return (
        <div className="relative w-[100%] h-[500px]">
            <Carousel
                ref={emblaRef}
                plugins={[autoplayPlugin.current]}
                className="w-full h-full"
            >
                <CarouselContent className="h-full">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <CarouselItem key={index} className="h-full">
                        <div className="p-2 h-[500px]">
                            <Card className="h-full">
                            <CardContent className="h-full w-full bg-[#E5E4DF] flex justify-center items-center ">
                                {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                                <div className='w-[56%] flex justify-center gap-10 flex-col items-center text-center'>
                                    <span className='text-5xl'>Testimonials</span>
                                    <span>“We had a wonderful experience with Furnishing Studio and Mr. Lokesh in helping us choose the perfect curtains and blinds for our home. Mr. Lokesh was incredibly knowledgeable and attentive, helping us find the best styles and materials to suit our space. From start to finish, the service was seamless, professional, and personalized to our needs. The quality of the curtains and blinds is outstanding, and they’ve truly elevated the look of our home. Highly recommend Furnishing Studio for anyone looking for top-notch home furnishings and exceptional customer service.”</span>
                                    <span className='text-xl font-semibold'>Rohan Goud</span>
                                </div>
                            </CardContent>
                            </Card>
                        </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Progress Bars (independent from carousel) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-2 items-center justify-center bottom-20">
                {progressValues.map((value, index) => (
                <div
                    key={index}
                    className="relative bg-gray-300 rounded-full overflow-hidden w-[25px] h-[4px]"
                >
                    <div
                    className="absolute top-0 left-0 h-full bg-white transition-all duration-[50ms] ease-linear"
                    style={{ width: `${value}%` }}
                    />
                </div>
                ))}
            </div>
        </div>
    )
}
