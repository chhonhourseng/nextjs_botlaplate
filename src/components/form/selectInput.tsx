import { useState } from "react"

export interface ISelectInputProps{
    title: string,
    onSelected?: ( selected: string ) => any,
    defaultValue?: string,
    items: Array< {
        title: string,
        value: string
    } >,
    className?: string
}

export default function SelectInput( props:ISelectInputProps ){

    return (
        <form className="max-w-sm mx-auto">
            <select onChange={(e: any) => props.onSelected ? props.onSelected( e.target.value == props.title ? "" : e.target.value ) : "" } defaultValue={props.defaultValue} id="countries" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${props.className}`}>
                <option>{ props.title }</option>
                {
                    props.items.map((item, index) => (
                        <option key={index} value={item.value || ""} >{ item.title }</option>
                    ))
                }
            </select>
        </form>
    )
}