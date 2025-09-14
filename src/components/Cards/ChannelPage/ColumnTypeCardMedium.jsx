import React from "react";
import Icons from "../../../assets/Icons";
import {Link} from "react-router-dom";
import ViewsCalculate from "../../../utils/ViewsCalculate";
const ColumnTypeCard = ({video,limit = 90}) => {

    const isLong = video?.title?.length < limit;
    const displayText = ( isLong ? video?.title : video?.title?.slice(0,limit) + "...");

    return (
        // Column Type Card
        <div id="video" className="w-[305px] m-[5px_10px_10px_0px]  align-top inline-block relative">
            
            {/* Thumbnail */}
            <img src={video?.thumbnail} className="rounded-lg max-h-96 max-w-[305px]" alt="" />
            
            <div id="durationOverlay" className="absolute bg-[#00000099] rounded-sm bottom-[50px] right-1 text-[#fff] px-1 py-0">
                <p className="text-[13px] font-medium"> {video.durationa || "33:10"} </p>
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
                        <span id="views"><ViewsCalculate views={video?.views} /></span>
                        <span id="uploaded-date">140 Hours Ago</span>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default ColumnTypeCard;