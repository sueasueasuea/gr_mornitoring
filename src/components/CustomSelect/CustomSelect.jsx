import React from "react";
import './CustomSelect.css'

export const CustomSelect = React.forwardRef(({ name, label, ...rest }, ref) => {
    console.log(JSON.stringify(rest))
    return (
        <div style={{display:"flex",flexDirection:"column",textAlign:'left'}}>
            <label htmlFor={name}>{label}</label>
            <select
                name={name}
                {...rest}
                ref={ref}
                
            >
                {rest.options.map((option, index) => (
                    <option key={index} value={option.value} label={option.label}/>
                ))}

            </select>



        </div>
    );
});

