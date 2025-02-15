import { roboto_slab } from '@/app/fonts'
import { qnsDetail } from '@/constant'
import Image from 'next/image'

const QNSdetail = () => {
    return (
        <div className=' py-20 flex justify-center'>
            <div className="flex justify-center items-center flex-col gap-20">
                {qnsDetail.map((det)=>(
                    <div className={`flex justify-between ${det.bgColor}`}>
                        <div className="overflow-hidden flex items-center justify-center">
                            <Image 
                                objectFit='cover'
                                height= "525"
                                width = "794"
                                src={det.img}
                                alt={det.title}
                            />
                        </div>
                        <div className="flex items-center justify-center text-black w-[794px] h-[520px]">
                            <p className={`${roboto_slab.className} flex justify-center items-start flex-col gap-4 lg:w-[80%] text-pretty leading-[1.55]`}>
                                <span className='text-2xl font-normal'>
                                    {det.title}
                                </span>
                                <span className='text-sm font-light leading-6'>
                                    {det.desc}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QNSdetail