import { toast } from "react-toastify";

export interface IToastify{
    message: string
}

export function Toastify( props:IToastify ){
        return (
            toast( props.message, {
                draggable: true,
            } )
        )
}

export function ToastifyError( props: IToastify ){
    return (
        toast.error( props.message, {
            draggable: true,
        })
    )
}

export function ToastifySuccess( props: IToastify ){
    return (
        toast.success( props.message, {
            draggable: true,
        } )
    )
}