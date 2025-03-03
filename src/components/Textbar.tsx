import { roboto_slab } from '@/app/fonts'

type custom = {
    text : string,
    bgColor : string
} 

const Textbar = ({text,bgColor}: custom) => {
    return (
        <div className={`w-full flex justify-center h-[12rem] ${bgColor}`}>
            <div className="flex flex-col justify-center items-center text-center gap-4">
                {text.split("<br />").map((line, index) => (
                    <p key={index} className={`${roboto_slab.className} text-pretty font-normal text-zinc-900 font-mono text-xl lg:text-2xl leading-[1.35]`}>
                        {line}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default Textbar