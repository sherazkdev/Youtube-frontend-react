import React from "react";

const DateCalculate = ( {localDate} ) => {
    
    const calculatedDate = new Date(localDate).toLocaleDateString("en-Us",{
        year:"numeric",
        month:"short",
        day:"numeric"
    } );

    return calculatedDate;

}

export default DateCalculate;