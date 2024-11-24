import { useState } from "react";

export interface IOtpInput {
    length: number,
    onChange?: (state: string[]) => void,
    textError?: string
}

function OtpInput(props: IOtpInput) {
    const [otp, setOtp] = useState(new Array(props.length).fill(""));

    const handleChange = (element: any, index: number) => {
        // Update OTP array
        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        if( props.onChange ) props.onChange( newOtp )

        // Move focus to the next input
        if (element.nextSibling && element.value) {
            element.nextSibling.focus();
        }
    };

    const handleKeyDown = (event: any, index: number) => {
        if (event.key === "Backspace" && !otp[index] && index > 0) {
            event.target.previousSibling.focus();
        }
    };

    return (
        <div className="grid gap-1" >
            <div className="flex gap-2 md:gap-3 justify-center">
                {otp.map((_, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength={1}
                        value={otp[index]}
                        onChange={(e) => handleChange(e.target, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        className={`input3 ${props.textError ? "border border-error-color" : ""}`}
                    />
                ))}
            </div>
            {
                props.textError ? (

                    <span 
                    className="text-error-color body10 text-center"
                    >{ props.textError }</span>
                ): ""
            }
        </div>
    );
}

export default OtpInput;
