import React from "react";

const ViewsCalculate = ( { views }) => {

    let formattedViews = "";

    if (views >= 1_000_000_000) {
        formattedViews = (Math.floor( (views / 1_000_000_000 ) * 10) / 10).toFixed(1) + "B";
    } else if (views >= 1_000_000) {
        formattedViews = (Math.floor( (views / 1_000_000 ) * 10) / 10).toFixed(1) + "M";
    } else if (views >= 1_000) {
        formattedViews = (Math.floor( (views / 1_000 ) * 10) / 10).toFixed(1) + "K";
    } else {
        formattedViews = views?.toString(); 
    }

    return formattedViews;

}

export default ViewsCalculate;