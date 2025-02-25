import Link from 'next/link'
import { ServicesP } from '@/constant'
import { roboto_slab } from '@/app/fonts'

const Service = () => {
    return (
        <div className='w-full flex justify-center py-20'>
            <div className="w-[86%]">
                <div className='font-semibold text-3xl mb-7 flex justify-between'>
                    <span className='font-medium text-3xl'>Our Services</span>
                    <span><Link className='hover:text-gray-500 border-b-2 border-b-black hover:border-b-gray-500' href={"/"}>Explore</Link></span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className={`bg-CP1 relative overflow-hidden bg-no-repeat bg-[50%_80%] bg-[length:912px_1035px] h-[520px] w-[792px] flex justify-center`}>
                        <div className="absolute inset-0 bg-black opacity-45"></div>
                        <div className={`${roboto_slab} flex relative flex-col items-center gap-3 text-white top-[376px]`}>
                            <span className='font-semibold'>Custom Sofas</span>
                            <span><Link className='text-sm hover:text-gray-300 border-b-2 border-b-white hover:border-b-gray-300' href={"/"}>Explore</Link></span>
                        </div>
                    </div>
                    <div className={`bg-CP2 relative overflow-hidden bg-no-repeat bg-[50%_80%] bg-[length:912px_1035px] h-[520px] w-[792px] flex justify-center`}>
                        <div className="absolute inset-0 bg-black opacity-45"></div>
                        <div className={`${roboto_slab} flex relative flex-col items-center gap-3 text-white top-[376px]`}>
                            <span className='font-semibold'>Curtain works</span>
                            <span><Link className='text-sm hover:text-gray-300 border-b-2 border-b-white hover:border-b-gray-300' href={"/"}>Explore</Link></span>
                        </div>
                    </div>
                    <div className={`bg-CP3 relative overflow-hidden bg-no-repeat bg-cover h-[520px] w-[792px] flex justify-center`}>
                        <div className="absolute inset-0 bg-black opacity-45"></div>
                        <div className={`${roboto_slab} flex relative flex-col items-center gap-3 text-white top-[376px]`}>
                            <span className='font-semibold'>Wallpapers</span>
                            <span><Link className='text-sm hover:text-gray-300 border-b-2 border-b-white hover:border-b-gray-300' href={"/"}>Explore</Link></span>
                        </div>
                    </div>
                    <div className={`bg-CP4 relative overflow-hidden bg-no-repeat bg-[length:912px_1035px] bg-[50%_80%] h-[520px] w-[792px] flex justify-center`}>
                        <div className="absolute inset-0 bg-black opacity-45"></div>
                        <div className={`${roboto_slab} flex relative flex-col items-center gap-3 text-white top-[376px]`}>
                            <span className='font-semibold'>Window Blinds</span>
                            <span><Link className='text-sm hover:text-gray-300 border-b-2 border-b-white hover:border-b-gray-300' href={"/"}>Explore</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service