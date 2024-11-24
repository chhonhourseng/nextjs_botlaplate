import { Assets } from "@/assets"
import LanguageCubit from "@/data/providers/languageCubit"
import { LanguageItems } from "@/data/types/language"
import { useBloc } from "@blac/react"
import Image from "next/image"
import { useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md"

export default function LangSwitcher(){

    const [ active, setActive ] = useState< {
        chooseLang?: boolean
    } >()
    const [t, e] = useBloc( LanguageCubit )

    return (
        <div
            className="relative"
        >
            <button 
                onClick={(e) => {
                    e.stopPropagation()
                    setActive((pre: any) => ( {...pre, chooseLang: !active?.chooseLang} ))
                }}
                className="relative bg-third-color py-1 flex items-center h-[48px] px-2 gap-1 rounded-[8px]" >
                <Image 
                    src={"/svg/flags/" + t + ".svg"}
                    width={32}
                    height={32}
                    alt=""
                    className="w-[32px] h-[32px]"
                />
                <MdKeyboardArrowDown 
                    size={24} 
                    className={`transition ease duration-150 ${ active?.chooseLang ? "rotate-180" : "rotate-0" }`}
                />
            </button>
            
            {/*  */}
            <ul className={`${active?.chooseLang ? "translate-y-[0px]" : "translate-y-[-1000px]"} absolute transition ease duration-150 top-[100%] bg-[#17041C] right-0 w-[200%] z-[2] shadow border border-gray-700 rounded`} >
                {
                    LanguageItems.map((lang, index) => (
                        <li onClick={() => {
                            e.change( lang.code )
                            setActive((pre: any) => ({...pre, chooseLang: false}))
                        }} key={index} className={`${ t == lang.code ? "bg-helper" : "" } hover:opacity-[0.9] rounded  p-2 flex items-center gap-4 cursor-pointer`} >
                            <Image 
                                src={lang.url}
                                width={32}
                                height={32}
                                alt=""
                                priority
                                className="w-[32px] h-[32px]"
                            />
                            <span>{ lang.title }</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}