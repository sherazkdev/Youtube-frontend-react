import React from "react";
import Icons from "../../../assets/Icons";
import {Link} from "react-router-dom";
const ColumnTypeCard = ({video,limit = 90}) => {

    const isLong = video.title.length < limit;
    const displayText = ( isLong ? video.title : video.title.slice(0,limit) + "...");

    return (
        // Column Type Card
        <div id="video" className="w-[210px] m-[5px_10px_10px_0px] h-[200px] inline-block relative">
            
            {/* Thumbnail */}
            <img src={"https://i.ytimg.com/vi/_ON1tS4UHzY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCP8JG4tI5kM-jP60Fn8zbauFLGNQ"} className="rounded-lg max-h-96 max-w-[210px]" alt="" />
            
            <div id="durationOverlay" className="absolute bg-[#00000099] rounded-sm bottom-[90px] right-1 text-[#fff] px-1 py-0">
                <p className="text-[11px] font-medium"> {video.duration || "33:10"} </p>
            </div>
            
            {/* Channel Section */}
            <div id="channel" className="flex justify-start mt-2 items-start">
                <div id="right-video-title" className="ml-0 mt-0">
                    <div>
                        <Link to={`video?id=${video._id}`}>
                            <p className="font-medium text-[#0F0F0F] text-[13px]">
                                {displayText}
                            </p>
                        </Link>
                    </div>
                    

                    <div className="text-[#606060] font-semibold flex space-x-2.5 text-[12px] relative">
                        <span id="views">12k views </span>
                        <span id="uploaded-date">140 Hours Ago</span>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default ColumnTypeCard;