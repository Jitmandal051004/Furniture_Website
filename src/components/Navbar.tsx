"use client"
import Image from 'next/image'
import Link from 'next/link'
import { navLinks } from '@/constant'
import { roboto_slab } from '@/app/fonts'
import { Search } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
    const [isSearching, setIsSearching] = useState(false);

    return (
        <nav className="flex flexBetween navbar w-full">
            <div className="flex-1 flexStart">
                <Link href="/">
                    <div className="logo flex gap-3">
                        <Image
                            src="/snug.jpeg"
                            width={136}
                            height= {76}
                            alt = "BrandLogo" 
                        />
                    </div>
                </Link>
                <ul className= {`xl:flex hidden text-small gap-7 ${roboto_slab.className}`} >
                    {navLinks.map((link)=>(
                        <Link className="p-3 rounded-md font-light " href={link.href} key={link.key}>
                            {link.text}
                        </Link>
                    ))}
                </ul>
                <div className={`xl:flex flexcenter hidden gap-3 ${roboto_slab.className} justify-center items-center`}>
                <div className="relative flex items-center">
                    {isSearching ? (
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 w-0 opacity-0 scale-90 
                                    focus:w-48 focus:opacity-100 focus:scale-100"
                            autoFocus
                            onBlur={() => setIsSearching(false)}
                        />
                        ) : (
                        <button
                            onClick={() => setIsSearching(true)}
                            className="p-2 transition-transform duration-300 hover:scale-110"
                        >
                            <Search size={20} />
                        </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar