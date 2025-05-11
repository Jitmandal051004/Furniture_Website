import { dm_sans, roboto_slab } from '@/app/fonts';
import { footerMenu, Links } from '@/constant';
import { Copyright, Facebook, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

type ColumnProps = {
    title: string;
    links: Array<string>;
}

const FooterColumn = ({title, links} : ColumnProps) => (
    <div className={`footer_column ${roboto_slab.className} text-lg flex-wrap w-[280px]`} >
        <h4 className='font-semibold mb-4 uppercase w-full'>{title}</h4>
        <ul className="flex flex-col gap-2 font-normal text-xs text-zinc-700">
            {links.map((link, index) => 
                <span key={index} className='text-sm'>
                    {link}
                </span>
            )}
        </ul>
    </div>
)

const Footbar = () => {
    return (
        <div className='w-full py-10 bg-[#E5E4DF] flex flex-col items-center justify-center'>
            <div className="w-[94.5%] flex flex-col gap-5">
                <div className='flex flex-col lg:flex-row mb-7 justify-center gap-10 items-start'>
                    <div className='flex flex-col lg:w-[160px] gap-4'>
                        <Image
                            src="/snug.jpeg"
                            width={160}
                            height={91.92}
                            alt = "BrandLogo" 
                        />
                        <div className='text-zinc-600 text-sm font-semibold flex gap-5'>
                            <Instagram />
                            <Linkedin />
                            <Facebook />
                        </div>
                    </div>
                    <div className='flex flex-col lg:w-[175px] gap-4'>
                        {Links.map((ftl, index)=>(
                            <Link key={index} href={ftl.href}>
                                <span>
                                    {ftl.text}
                                </span>
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-6 mt-6 lg:mt-0 lg:gap-12">
                        {footerMenu.map((ft, index)=>(
                            <div key={index} className="flex-1 flex flex-col gap-4">
                            <FooterColumn title={ft.title} links={ft.links}/>      
                        </div>
                        ))}
                    </div>
                </div>
                <div className='flex items-center text-zinc-700 text-sm justify-center py-4 border-t-2 border-zinc-500'>
                    Copyright&nbsp;<Copyright />&nbsp;2025 Snug. All right reserved
                </div>
            </div>
        </div>
    )
}

export default Footbar