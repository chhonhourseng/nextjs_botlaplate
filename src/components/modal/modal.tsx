import { AiOutlineClose } from "react-icons/ai";

export interface IModalProps{
    children: any,
    open: boolean,
    onOpen: ( state: boolean ) => void
    showX?: boolean,
    title?: string,
    className?: string,
    outBoxClickAble?: boolean
}

export default function Modal(props:IModalProps){
    return (
        <section 
            onClick={() => {
                if(props?.outBoxClickAble) props.onOpen( false )
            }}
            className={`transform ${props.open ? "-translate-x-[0px]" : "-translate-x-[10000px]"} flex justify-center items-center fixed top-0 left-0 w-full h-screen backdrop-blur-md z-[100] `} >
            <div
                onClick={(e) => {
                    e.stopPropagation()
                }} 
                className={`bg-modal-color | w-11/12 md:w-11/12 lg:w-auto lg:max-w-8/12 max-h-[80vh] | rounded-lg relative`} >
                {/* Content */}
                <div className="overflow-auto max-w-11/12 max-h-[80vh]" >
                    { props.children }
                </div>

                {/* Close button */}
                <AiOutlineClose
                    onClick={() => props.onOpen(!props.open)}
                    size={28}
                    style={{
                        background: "linear-gradient(180deg, #F2AE26 0%, #F2831A 100%)"
                    }}
                    className="cursor-pointer absolute top-[-10px] right-[-10px] p-1  text-white rounded-[50%] z-[11]"
                />
            </div>
        </section>
    )
}