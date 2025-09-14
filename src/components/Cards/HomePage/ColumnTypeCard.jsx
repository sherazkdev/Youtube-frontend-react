import React from "react";
import {Link} from "react-router-dom";
import ViewsCalculate from "../../../utils/ViewsCalculate";
const ColumnTypeCard = ({video,limit=86}) => {

    
    const isLong = video?.title?.length < limit;
    const displayTitle = ( isLong ? video?.title : video?.title?.slice(0,limit) + "...");


    const minutes = Math.floor(video?.duration / 60);
    const seconds = Math.floor( video?.duration % 60 );



    return (
        <div id="video" className="md-2040:w-[460px] lg-2267:w-[524px] xl-2550:w-[548px] align-top m-2 inline-block relative">
                            
            <div id="thumbnail" className="relative">

                <Link to={`/watch?v=${video._id}`}>
                                <img
                                src={video.thumbnail}
                                className="rounded-lg w-full aspect-video object-cover"
                                alt=""
                                />
                </Link>

                {/* overlay ab thumbnail ke andar fixed rahega */}
                <div
                    id="durationOverlay"
                    className="absolute bg-[#00000099] rounded-sm bottom-1 right-1 text-white px-2 py-0"
                >
                    <p className="text-[14px] font-medium">
                        {minutes}:{seconds.toString().padStart(2, "0")}
                    </p>
                </div>

            </div>

            <div id="channel" className="flex justify-start items-start mt-2">
                    <div id="left-channel-logo">
                        <Link to={`/channel/${video?.owner?._id}`}>
                            <img src={video?.owner?.avatar || "Undefind"} className="clip-circle rounded-full w-[36px] h-[36px]" title="Channel" />
                        </Link>
                    </div>
                    <div id="right-video-title" className="ml-3">
                        <div className="w-full">
                            <Link to={`video?id=${video._id}`}>
                                <p className="font-medium text-[16px] text-[#0F0F0F]">{displayTitle}</p>
                            </Link>
                        </div>
                        
                        <div>
                            <Link to={`/channel?username=${video?.owner?.username}`}>
                                <p className="text-[#606060] font-semibold text-[14px]">{video?.owner?.fullname}</p>
                            </Link>
                        </div>

                        <div className="text-[#606060] whitespace-nowrap font-[500] flex space-x-1 text-[12px] relative">
                            <span id="views"><ViewsCalculate views={video?.views} /></span>
                            <span className="font-extrabold m-[-3px]">.</span>
                            <span id="uploaded-date">140 Hours Ago</span>
                        </div>
                    </div>
            </div>

        </div>
    )


};

export default ColumnTypeCard;