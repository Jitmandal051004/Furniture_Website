import { roboto_slab } from '@/app/fonts'

const Textbar = () => {
    return (
        <div className='w-full flex justify-center h-[12rem]'>
            <p className={`${roboto_slab.className} flex justify-center items-center text-center text-pretty font-medium text-zinc-900 font-mono text-xl lg:text-2xl leading-[1.35]`}>
                Snug brings bespoke comfort to your home with custom furnishings that blend style,<br /> function, and durability perfect for any space.
            </p>
        </div>
    )
}

export default Textbar