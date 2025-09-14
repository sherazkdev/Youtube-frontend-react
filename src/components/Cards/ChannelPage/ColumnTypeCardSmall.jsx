import React from "react";
import Icons from "../../../assets/Icons";
import DurationCalculate  from "../../../utils/DurationCalculate"
import {Link} from "react-router-dom";
import ViewsCalculate from "../../../utils/ViewsCalculate";
const ColumnTypeCard = ({video,limit = 50}) => {

    const isLong = video?.title?.length < limit;
    const displayText = ( isLong ? video?.title : video?.title?.slice(0,limit) + "...");

    const {minutes,seconds} = DurationCalculate({duration: video?.duration});

    return (
        // Column Type Card
        <div id="video" className="w-[210px] m-[5px_10px_10px_0px] h-[200px] align-top inline-block relative">
            
            {/* Thumbnail */}
            <div className="relative">
                <img src={video?.thumbnail} className="rounded-lg max-h-96 max-w-[210px]" alt="" />
                <div id="durationOverlay" className="absolute bg-[#00000099] rounded-sm bottom-[2px] right-1 text-[#fff] px-1 py-0">
                    <p className="text-[11px] font-medium"> {minutes} : {seconds} </p>
                </div>
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
                    

                    <div class="text-[#606060] whitespace-nowrap font-[500] flex space-x-1 text-[12px] relative">
                        <span id="views"><ViewsCalculate views={video?.views} /></span>
                        <span class="font-extrabold m-[-3px]">.</span>
                        <span id="uploaded-date">140 Hours Ago</span>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default ColumnTypeCard;