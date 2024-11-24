import { FaX } from "react-icons/fa6"
import { useEffect } from "react";

export interface IPopupProps{
    children: any,
    open: boolean,
    onOpen: ( state?: any ) => any,
    type?: "small" | "medium",
    hiddenX?: boolean,
    className?: string,
    bg?: "none",
    opacity?: number,
    title?: string,
    titlePosition?: "left" | "center" | "right"
}

export default function Popup( props: IPopupProps ){
    
    useEffect(() => {
    }, [])
    
    return (
        <section className={`transform  bg-opacity-[${props.opacity ? props.opacity : 0.5}] ${props.open ? "-translate-x-1/2 bg-black" : "-translate-x-[10000px]"} transition ease duration-[150ms] fixed top-1/2 left-1/2 w-full h-screen bg-blur-lg -translate-y-1/2  z-[1201]`} >
            <div  
                className={`${props.open ? "transition ease-in duration-400 -translate-y-1/2" : "-translate-y-2/2"} max-w-9/12 relative top-1/2  text-white transform  mx-auto ${props.bg == "none" ? "" : "bg-[#12151E]"} rounded ${props.className}`} >
                
                <div className="sticky top-0 bg-[#12151E] p-2" >
                    {
                        props.title ? (
                            <h2 className="text-center " >{props.title}</h2>
                        ): ""
                    }
                    {
                        !props.hiddenX ? (
                            <button 
                                onClick={() => {
                                    props.  onOpen( !open )
                                }} className=" p-2 outline outline-1 rounded-lg outline-gray-600 shadow-lg absolute top-1 right-1" >
                                <FaX className="text-gray-300 text-sm" />
                            </button>
                        ): ("")
                    }
                </div>
                    
                {props.children}
            </div>
        </section>
    )
}