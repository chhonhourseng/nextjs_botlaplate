import PhoneInput from "react-phone-input-2";

export interface IPhoneNumberInputProps{
    showPassword?: boolean,
    label: string,
    errorText?: string,
    handleShowPassword?: (state?: any) => any,
    name: string,
    placeholder?: string,
    className?: string,
    id: string
    disable?: boolean,
    onChange?: ( e:any ) => any,
    value?: string | undefined,
    defaultValue?: string
}

export default function PhoneNumberInput( { id, label, errorText, name, onChange:onTextChange }: IPhoneNumberInputProps ){
    return (
        <div className="grid gap-1.5" >
            <label className="body3 md:body5" htmlFor={id} >{label}</label>
            <div className={`shadow-lg grid rounded relative`} >
                <div className="flex items-center" >
                    <PhoneInput
                        country={"kh"}
                        inputClass="phoneInput2 md:phoneInput1"
                        buttonClass="phoneButton"
                        inputProps={{
                            name: 'phone',
                            required: false,
                        }}
                        onChange={(e:any) => {
                            if(onTextChange) onTextChange(e)
                        }}
                        enableSearch
                    />
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