import { productList } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <Link href={"/indItems"} className="w-[80%] grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
                {productList.map((list, index) => (
                <div key={index} className="flex flex-col gap-5 items-start bg-white overflow-hidden">
                    {/* <Image
                        src={list.img}
                        alt={list.text}
                        width="388"
                        height="388"
                        className="bg-zinc-300"
                    /> */}
                    <div className="h-[388px] w-[388px] bg-zinc-300 overflow-hidden"></div>
                    <h3 className="text-lg font-normal">{list.text}</h3>
                </div>
                ))}
            </Link>
        </div>
    );
};

export default ProductList;
