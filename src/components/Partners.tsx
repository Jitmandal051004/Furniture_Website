import { roboto_slab } from '@/app/fonts'
import { brands } from '@/constant'

const Partners = () => {
    return (
        <div className='h-[813px] flex justify-center items-center'>
            <div className='w-[86%] flex flex-col items-center justify-center gap-10'>
                <div className={`${roboto_slab} w-[55%] flex flex-col gap-5 justify-center items-center text-center`}>
                    <span className='text-4xl'>OUR PARTNERS</span>
                    <span className='text-xl'>
                        At Snug, we believe that quality starts with the right materials. That is why we source our fabrics, wallpapers, flooring, and upholstery from trusted brands known for durability, aesthetics, and sustainability.
                    </span>
                </div>
                <div className="grid grid-cols-7 grid-rows-3 gap-6 w-full">
                    {/* {brands.map((br)=>(
                        <div className={`bg-gray-300 flex items-center justify-center text-white h-[130px] ${br.bg} bg-cover`}>
                        </div>
                    ))} */}
                        <div className="bg-white flex items-center justify-center text-white h-[130px] bg-br1 bg-center bg-contain bg-no-repeat"></div>
                        <div className="bg-white flex items-center justify-center text-white h-[130px] bg-br2 bg-center bg-contain bg-no-repeat"></div>
                        <div className="bg-white flex items-center justify-center text-white h-[130px] bg-br3 bg-center bg-contain bg-no-repeat"></div>
                        <div className="bg-white flex items-center justify-center text-white h-[130px] bg-br4 bg-center bg-contain bg-no-repeat"></div>
                        <div className="bg-white flex items-center justify-center text-white h-[130px] bg-br5 bg-center bg-contain bg-no-repeat"></div>
                        <div className="bg-white flex items-center justify-center text-white h-[130px] bg-br6 bg-center bg-contain bg-no-repeat"></div>
                        <div className="bg-white flex items-center justify-center text-white h-[130px] bg-br7 bg-center bg-contain bg-no-repeat"></div>
                        <div className="bg-white flex items-center justify-center text-white h-[130px] bg-br8 bg-center bg-contain bg-no-repeat"></div>
                        <div className="bg-white flex items-center justify-center text-white h-[130px] bg-br9 bg-center bg-contain bg-no-repeat"></div>
                        <div className="bg-white flex items-center justify-center text-white h-[130px] bg-br10 bg-center bg-contain bg-no-repeat"></div>
                        <div className="bg-white flex items-center justify-center text-white h-[130px] bg-br11 bg-center bg-contain bg-no-repeat"></div>
                        <div className="bg-white flex items-center justify-center text-white h-[130px] bg-br12 bg-center bg-contain bg-no-repeat"></div>
                        <div className="bg-white flex items-center justify-center text-white h-[130px] bg-br13 bg-center bg-contain bg-no-repeat"></div>
                        <div className="bg-white flex items-center justify-center text-white h-[130px] bg-br14 bg-center bg-contain bg-no-repeat"></div>
                        <div className="bg-white flex items-center justify-center text-white h-[130px] bg-br15 bg-center bg-contain bg-no-repeat"></div>
                        <div className="bg-white flex items-center justify-center text-white h-[130px] bg-br16 bg-center bg-contain bg-no-repeat"></div>
                        <div className="bg-white flex items-center justify-center text-white h-[130px] bg-br17 bg-center bg-contain bg-no-repeat"></div>
                        <div className="bg-white flex items-center justify-center text-white h-[130px] bg-br18 bg-center bg-contain bg-no-repeat"></div>
                        <div className="bg-white flex items-center justify-center text-white h-[130px] bg-br19 bg-center bg-contain bg-no-repeat"></div>
                        <div className="bg-white flex items-center justify-center text-white h-[130px] bg-br20 bg-center bg-contain bg-no-repeat"></div>
                        <div className="bg-white flex items-center justify-center text-white h-[130px] bg-br21 bg-center bg-contain bg-no-repeat"></div>
                        {/* <div className="bg-gray-300 flex items-center justify-center text-white h-[130px] bg-br22 bg-cover"></div>
                        <div className="bg-gray-300 flex items-center justify-center text-white h-[130px] bg-br23 bg-cover"></div>
                        <div className="bg-gray-300 flex items-center justify-center text-white h-[130px] bg-br24 bg-cover"></div> */}
                </div>
            </div>
        </div>
    )
}

export default Partners