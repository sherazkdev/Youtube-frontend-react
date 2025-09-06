import React from "react";
import ViewsCalculate from "../../../utils/ViewsCalculate";
import Icons from "../../../assets/Icons";
import { Link } from "react-router-dom";

const RowTypeCard = ({video,limit = 36}) => {

    const isLong = video.title.length > limit;
    const displayTitle = ( isLong ? video.title.slice(0,limit) : video.title)

    return (

        <div className="flex w-[450px] mb-4 items-start justify-start space-x-2 flex-nowrap">

            {/* Thumbnail */}
            <div>
                <Link to={`/watch?v=${video?._id}`}><img className="w-[164px] h-[94px] rounded-lg overflow-hidden" src={video?.thumbnail} alt="" /></Link>
            </div>
            
            {/* Title views Uploadted Date if currenty uploaded to show New */}
            <div className="flex flex-col space-y-06">

                {/* Title */}
                <div>
                    <h3 className="text-[#0f0f0f] font-medium">{displayTitle}</h3>
                </div>
                
                {/* Channel Name */}
                <div>
                    <Link to={`/${video?.owner?._id}`}><p  className="text-[#606060] font-medium  text-[12px]"> {video?.owner?.fullname || "Techno Gamer"} </p></Link>
                </div>
                
                {/* view and uploaded date */}
                <div className="text-[#606060] font-medium  text-[12px] flex space-x-2">

                    <div className="flex space-x-1">
                        <p>{<ViewsCalculate views={video?.views || 1500} />}</p>
                        <p>views</p>
                    </div>
                    
                    <div className="m-[-5px_0px_0px_0px]">
                        <p className="text-[14px] font-bold">.</p>
                    </div>
                    
                    <div>
                        <p>22 hours ago</p>
                    </div>

                </div>
                
                {/* For New Uploaded Video */}
                <div>
                    <button className="bg-[#f2f2f2] px-2 rounded-sm text-[#0f0f0f] text-[12px]">New</button>
                </div>
            
            </div>
    
    </div>

    )
}

export default RowTypeCard;