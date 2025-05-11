"use client";

import { thumbnails } from "@/constant";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";

export default function ProductDetail() {
const [selectedImage, setSelectedImage] = useState("/img/CP4.jpeg");

    return (
        <div className="flex justify-center py-3">
            <div className="container w-[80%] py-8 grid grid-cols-1 md:grid-cols-2 gap-14">
                <div className="flex gap-7">
                    <div className="flex flex-col gap-4 overflow-hidden">
                    {thumbnails.map((thumb, index) => (
                        <div
                            key={index}
                            className="cursor-pointer rounded overflow-hidden bg-slate-600"
                            onClick={() => setSelectedImage(thumb)}
                        >
                            <Image
                                src={thumb}
                                alt={`Thumbnail ${index + 1}`}
                                width={160}
                                height={146}
                                className="object-cover h-full w-full"
                            />
                        </div>
                    ))}
                    </div>

                    <div className="rounded overflow-hidden">
                    <Image
                        src={selectedImage}
                        alt="Product Image"
                        width={792}
                        height={901}
                        className="object-fill w-full"
                    />
                    </div>
                </div>

                <div>
                    <h1 className="text-2xl font-semibold">Beige Sofa</h1>
                    <p className="text-gray-600 mt-2">
                        This exquisite luxury sofa, with its gracefully curved shape,
                        transforms any living space into a haven of luxury. Upholstered in
                        premium fabric, it offers a plush seating experience, inviting you to
                        relax in unparalleled comfort. The brass legs not only provide sturdy
                        support but also add a touch of opulence, creating a striking contrast
                        against the soft, neutral tones of the upholstery.
                    </p>
                    <div className="mt-6 border-t pt-4">
                        <h2 className="text-lg font-medium">Dimensions</h2>
                        <p className="text-gray-500">L - 1120mm</p>
                    </div>
                    <div className="mt-4 border-t pt-4">
                        <h2 className="text-lg font-medium">Material</h2>
                        <p className="text-gray-500">Fabric body with brass legs</p>
                    </div>
                    <div className="mt-6 flex gap-4">
                        <Button variant={"destructive"} size={"lg"} className="border border-black">
                            REQUEST A QUOTE
                        </Button>
                        <Button  variant={"ghost"} size={"lg"} className="border border-black">
                            ADD TO WISHLIST
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
