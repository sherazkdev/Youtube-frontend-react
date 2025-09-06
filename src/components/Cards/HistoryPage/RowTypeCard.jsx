import React from "react";
import ViewsCalculate from "../../../utils/./ViewsCalculate";
import Icons from "../../../assets/./Icons";
import { Link } from "react-router-dom";
import  DOMPurify from "dompurify"
import DurationCalculate from "../../../utils/DurationCalculate"

const RowTypeCard = ({video,limit=113,handleRemoveVideoFromWatchHistory}) => {
    
    // Display title On Limit 
    const isLong = video?.description?.length < limit;
    const displayText = ( isLong ? video?.description : video?.description?.trim().slice(0,limit) + "..." );

    const {minutes,seconds} = DurationCalculate({duration:video?.duration})


    return (
        <div className="flex hover:bg-[#f2f2f2] m-[5px_0px_25px_0px] w-[842px] rounded-lg justify-between items-start flex-nowrap space-x-2.5">
                    
            <div className="flex space-x-2 relative">
                <Link to={`/watch?v=${video?._id}`}>
                    <img src={video.thumbnail || "https://i.ytimg.com/vi/_ON1tS4UHzY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCP8JG4tI5kM-jP60Fn8zbauFLGNQ"} className="rounded-[7px] w-[246px]" title="Thumbnail" />  
                </Link>
                <div id="durationOverlay" className="absolute bg-[#00000099] rounded-sm bottom-[5px] left-[195px] text-[#fff] px-1 py-0"><p className="text-[12px] font-medium"> {minutes}:{seconds} </p></div>    

                <div>

                    <div>
                        <Link to={`/watch?v=${video?._id}`}> <h2 className="text-[#0f0f0f] w-[479px] font-roboto">{video?.title}</h2> </Link>
                        <div className="text-[#606060] font-semibold flex space-x-1.5 text-[11px] relative">
                                <span id="views">{ (video?.views ? <ViewsCalculate views={video?.views} /> : "12k View" ) } </span>
                                <span id="uploaded-date">140 Hours Ago</span>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-1">
                        <div className="flex space-x-2 mt-2 mb-2 items-center"> 
                            <div id="left-channel-logo">
                                <Link to={`/channel/${video?.owner?._id}`}>
                                    <img src={video?.owner?.avatar || "https://yt3.ggpht.com/IdL16J56PE6-_d9M7Q4w0xt8cqUQLtIAI9Yz6xzyUMZKPxCLycGsP-bR43QK1EjgobHWK3je=s88-c-k-c0x00ffffff-no-rj"} className="clip-circle w-[25px] h-[25px]" title="Channel" />
                                </Link>
                            </div>

                            <div>
                                <Link to={`/channel/${video?.owner?._id}`}>
                                    <p className="text-[#606060] font-normal text-[13px]">{video?.owner?.username}</p>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <p id="description" className="text-[#606060] font-normal text-[13px]" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(displayText) }} ></p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex space-x-3 items-end mt-2">
                <button type="button" title="Remove from watch history" onClick={ () => handleRemoveVideoFromWatchHistory({videoId:video?._id})}><Icons.CrossIcon /></button>
                <button type="button"><Icons.ThreeDotIco /></button>
            </div>
        
        </div>
    )   

}

export default RowTypeCard;