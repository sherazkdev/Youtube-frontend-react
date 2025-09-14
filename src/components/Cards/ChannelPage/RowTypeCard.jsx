import React from "react";
import ViewsCalculate from "../../../utils/ViewsCalculate";
import {Link} from "react-router-dom";
import Icons from "../../../assets/Icons";
const RowTypeCard = ({video,limit=100}) => {
    
    // Display title On Limit 
    const isLong = video?.title?.length < limit;
    const displayText = ( isLong ? video?.title : video?.title?.trim().slice(0,limit));


    return (
        <div className="flex m-[5px_0px_10px_0px] w-full rounded-lg justify-start relative items-start flex-nowrap space-x-2.5">
                    
            <div>
                <img src={video?.thumbnail} className="rounded-[7px] w-[424px]" title="Thumbnail" />
            </div>

            <div id="durationOverlay" className="absolute bg-[#00000099] rounded-sm bottom-[5px] left-[374px] text-[#fff] px-1 py-0"><p className="text-[12px] font-medium"> 33:10 </p></div>     

            <div>
                <div>
                    <h2 className="text-[#0f0f0f] font-roboto">{video?.title}</h2>
                    <div className="text-[#606060] font-semibold flex space-x-1.5 text-[11px] relative">
                            <span id="views">{ (video?.views ? <ViewsCalculate views={video?.views} /> : "12k View" ) } </span>
                            <span id="uploaded-date">140 Hours Ago</span>
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <div className="flex space-x-2 mt-2 mb-3 items-center"> 
                        <div id="left-channel-logo">
                            <Link to={`/channel/${video?.owner?._id}`}>
                                <img src={video?.owner?.avatar} className="clip-circle w-[25px] h-[25px]" title="Channel" />
                            </Link>
                        </div>
                        <div>
                            <Link to={`/channel/${video?.owner?._id}`}>
                                <p className="text-[#606060] font-normal text-[13px]">{video?.owner?.fullname}</p>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <p id="description" className="text-[#606060] font-normal text-[13px]">{ displayText } {isLong == false && ( <Link to={"#videos"} className="cursor-pointer text-[#0f0f0f] font-medium"> Read more </Link>)}</p>
                    </div>
                </div>
            </div>
        
        </div>
    )   

}

export default RowTypeCard;