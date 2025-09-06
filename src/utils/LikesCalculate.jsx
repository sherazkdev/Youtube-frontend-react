import React from "react";

const LikesCalculate = ( { likes }) => {

    let formatedLikes = "";

    if (likes >= 1_000_000_000) {
        formatedLikes = (Math.floor( (likes / 1_000_000_000 ) * 10) / 10).toFixed(1) + "B";
    } else if (likes >= 1_000_000) {
        formatedLikes = (Math.floor( (likes / 1_000_000 ) * 10) / 10).toFixed(1) + "M";
    } else if (likes >= 1_000) {
        formatedLikes = (Math.floor( (likes / 1_000 ) * 10) / 10).toFixed(1) + "K";
    } else {
        formatedLikes = likes?.toString(); 
    }

    return formatedLikes;

}

export default LikesCalculate;