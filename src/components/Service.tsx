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
                    {ServicesP.map((ser,index)=>(
                        <div className={`${ser.img} relative overflow-hidden bg-no-repeat bg-[50%_80%] ${ser.position} h-[520px] w-[792px] flex justify-center`}>
                            <div className="absolute inset-0 bg-black opacity-45"></div>
                            <div className={`${roboto_slab} flex relative flex-col items-center gap-3 text-white top-[376px]`}>
                                <span className='font-semibold'>{ser.content}</span>
                                <span><Link className='text-sm hover:text-gray-300 border-b-2 border-b-white hover:border-b-gray-300' href={"/"}>Explore</Link></span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Service