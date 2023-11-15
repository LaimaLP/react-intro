import { useState } from "react";


const numberStyle = {
    padding: '1rem',
    fontSize: '2rem',
    lineHeight: '1rem',
    fontWeight: 'bold',
    width: '50px',
    cursor: 'pointer',
};

export function Button({number, paduodamaFunc}) {
    
    return (
        
        <button style={numberStyle} onClick={()=>paduodamaFunc(number)}>{number}</button>
        
    )
}


