import Image from 'next/image'
import Link from 'next/link'
import { Links } from '@/constant'
import { roboto_slab } from '@/app/fonts'
import { Search } from 'lucide-react'

const Navbar = () => {
    return (
        <nav className="flex flexBetween navbar w-full">
            <div className="flex-1 flexStart">
                <Link href="/">
                    <div className="logo flex gap-3">
                        <Image
                            src="/snug.jpeg"
                            width={160}
                            height= {91.92}
                            alt = "BrandLogo" 
                        />
                    </div>
                </Link>
                <ul className= {`xl:flex hidden text-small gap-7 ${roboto_slab.className}`} >
                    {Links.map((link)=>(
                        <Link className="p-3 rounded-md font-light " href={link.href} key={link.key}>
                            {link.text}
                        </Link>
                    ))}
                </ul>
                <div className={`xl:flex flexcenter hidden gap-3 ${roboto_slab.className} justify-center items-center`}>
                    <Search />
                </div>
            </div>
        </nav>
    )
}

export default Navbar