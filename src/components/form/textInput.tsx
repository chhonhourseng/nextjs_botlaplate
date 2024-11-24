import { useState } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export interface ITextProps{
    showPassword?: boolean,
    label: string,
    errorText?: string,
    type: "text" | "password",
    handleShowPassword?: (state?: any) => any,
    register: UseFormRegister<any>,
    name: string,
    validation: RegisterOptions,
    placeholder?: string,
    className?: string,
    id: string
    style?: "1" | "2",
    disable?: boolean,
    onChange?: ( e:any ) => any,
    value?: string | undefined,
    defaultValue?: string
}

export default function TextInput({ defaultValue, value, onChange, disable, style, id, showPassword, label, errorText, type, handleShowPassword, register, name, validation, placeholder }:ITextProps){
    
    const [show, setShow]  = useState<boolean>(false);

    return (
        <div className="grid gap-1.5" >
            <label className="body6 md:body5" htmlFor={id} >{label}</label>
            <div className={`shadow-lg grid rounded relative`} >
                <div className="flex items-center" >
                    <input disabled={disable} {...register( name, validation )} id={id} type={ type == "password" ? !(showPassword || show) ? "password": "text" : "text" } 
                        className={`border ${ errorText ? "border-error-color" : "border-third-color focus:border focus:border-focus-color" } | body7 md:body5 | bg-secondary-color ${ disable ? 'opacity-50' : '' } focus:outline-none active:outline-none w-full input2 md:input1 rounded`} 
                        placeholder={placeholder} />
                    {
                        type == "password" ? (
                            (showPassword || show) ? (
                                <FaRegEyeSlash className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => {
                                    if(handleShowPassword) handleShowPassword( !showPassword )
                                    setShow(!show)
                                } } />
                                ): (
                                <FaRegEye className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => {
                                    if(handleShowPassword) handleShowPassword( !showPassword )
                                    setShow(!show)
                                } } />
                                )
                        ): (
                            ""
                        )
                    }
                </div>
            </div>
            {
                errorText ? (
                    <span className="text-red-600 text-xs md:text-sm" >{errorText}</span>
                ): ""
            }
        </div>
    )
}