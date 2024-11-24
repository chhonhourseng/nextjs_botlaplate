import { BsSearch } from "react-icons/bs";
import SelectInput, { ISelectInputProps } from "./selectInput";

export interface ISearchByInput{
    title: string,
    onSelected?: ( selected: string ) => any,
    defaultValue?: string,
    items: Array< {
        title: string,
        value: string,
    } >,
    className?: string
}

export interface ISearchMultipleChoiceProps{
    searchBy: ISearchByInput,
    placeholder?: string,
    value?: string,
    onChange?: (e: any) => void,
    onSearch?: () => void,
    searchType?: string
}

export default function SearchMultipleChoice(props:ISearchMultipleChoiceProps){
    return(
        <div className="flex" >
            <SelectInput 
                { ...props.searchBy }   
                className="rounded-none"
            />
            <input 
                type={ props.searchType }
                className={`text-black text-sm px-2`}
                placeholder={props.placeholder}
                onChange={(e) => {if( props.onChange ) props.onChange(e)} }
            />
            <button onClick={() => { if(props.onSearch) props.onSearch() } } className="bg-blue-600 font-bold px-3 active:opacity-[0.8]" >
                <BsSearch className="font-bold" />
            </button>
        </div>   
    )
}