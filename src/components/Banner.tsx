import { roboto_slab } from '@/app/fonts'
import Image from 'next/image'
import { Button } from './ui/button'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'

const Banner = () => {
    return (
        <div className='w-full flex justify-center bg-hero-banner bg-center'>
            <div className='w-[94.5%] h-[35rem] lg:h-[50rem] rounded-xl overflow-hidden relative'>
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
            </div>
        </div>
    )
}

export default Banner