import { qnsabt } from '@/constant'
import Image from 'next/image'
import React from 'react'

const QNS = () => {
    return (
        <div className='w-full h-[320px] flex justify-center items-center gap-10 bg-[#E5E4DF]'>
            {qnsabt.map((q, index)=>(
                <div key={index} className='flex flex-col justify-center items-center gap-2 w-[220px] h-[160px]'>
                    <Image
                        height = "80"
                        width = "80"
                        src = {q.img}
                        alt = {q.text}
                    />
                    <span>
                        {q.text}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default QNS