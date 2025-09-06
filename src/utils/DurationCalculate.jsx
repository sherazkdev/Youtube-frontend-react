import React from "react";

const DurationCalculate = ({duration}) => {
    
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60 );

    return {minutes,seconds}
}

export default DurationCalculate;