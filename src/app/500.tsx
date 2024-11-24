"use client"

import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage(){
    return (
        <main className="h-screen w-full px-2 md:px-0 flex flex-col justify-center items-center bg-primary-color">
            <div className=" relative ">
                <Image 
                    className="w-auto h-auto animate-[bounce_3s_ease_infinite]s"
                    priority
                    src={"/images/assets/500.webp"}
                    width={768}
                    height={468}
                    alt=""
                    sizes=""
                />
            </div>
            <div>
                <span className="block text-center py-4 px-6 text-on-primary font-medium text-xl md:text-3xl lg:text-3xl" >Internal Server Error</span>
            </div>
            <button 
                onClick={() => window.location.reload() }
                className="px-6 py-2 rounded-lg bg-helper text-on-primary relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
            >
                Reload page
            </button>
        </main>
    )
}