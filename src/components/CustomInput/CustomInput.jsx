import React from "react";
import './CustomInput.css'

export const CustomInput = React.forwardRef(({name,label,error,...rest},ref)=>
{
    console.log( JSON.stringify(rest))
    return(
        <div>
        <label htmlFor={name}>{label}</label>
        <input
            name={name}
            {...rest}
            ref = {ref} 
        />
        {error&& <span style={{color:'red'}}>{error.message}</span>}
        </div>
    );
});

