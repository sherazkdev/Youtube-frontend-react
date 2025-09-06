import React from "react";
import Icons from "../../../assets/Icons";
import { Link } from "react-router-dom";
import Dompurify from "dompurify"
import DurationCalculate from "../../../utils/DurationCalculate";
const RowTypeCard = ({limit=130,video}) => {

    const isLong = video?.description?.length < limit;
    const displayDescription = ( isLong ? video?.description : video?.description?.slice(0,limit) + "...");

    // get views
    const {minutes,seconds} = DurationCalculate({duration:video?.duration});

    return (
        <>          
            {/* single video */}
            <div key={video?._id} id="video" className="w-full flex justify-between items-start">

                {/* thumbnail and video content */}
                <div className="flex space-x-3">

                    {/* thumbnail */}
                    <div className="w-[500px] h-[280px] relative">
                        <Link to={`/watch?v=${video?._id}`}>
                            <img
                                src={video?.thumbnail}
                                className="w-full h-full rounded-md"
                                alt="Video Thumbnail"
                            />
                        </Link>
                        <div id="durationOverlay" className="absolute bg-[#00000099] rounded-md bottom-1 right-1 text-white px-2 py-0"><p class="text-[13px] font-medium"> <span>{minutes}</span>:<span>{seconds}</span> </p></div>
                    </div>

                    {/* content */}
                    <div className="flex flex-col space-y-3 items-start justify-start">

                        {/* video title */}
                        <div>

                                        <div>
                                            <Link to={`/watch?v=${video?._id}`}>
                                                <h2 className="text-[16px] font-[400] line-height-[2.6rem] white-space-nornal text-[#0f0f0f]">
                                                    Kurulus Osman Episode 195 Season 7 Trailer 1 With Urdu Subtitle | New Updates Sultan Orhan Series
                                                </h2>
                                            </Link>
                                        </div>

                                        {/* video views and uploaded date */}
                                        <div className="flex space-x-2 text-[12px] text-[#606060]">
                                            
                                            <div>
                                                <p>160M views</p>
                                            </div>

                                            <div className="mt-[-2px] font-extrabold">.</div>

                                            <div>
                                                <p>8 years ago</p>
                                            </div>

                                        </div>
                                        
                        </div>

                        {/* channel info */}
                        <div className="flex space-x-2 items-start">
                                        
                                        <div className="w-[24px] h-[24px]">

                                            <img
                                                src={video?.owner?.avatar}
                                                className="w-full rounded-full h-full object-cover"
                                                alt="Channel Avatar"
                                            />
                                            
                                        </div>

                                        <div>
                                            <p className="text-[#606060] text-[12px] mt-1">{video?.owner?.fullname}</p>
                                        </div>

                        </div>

                        {/* description */}
                        <div>
                            <p className="text-[12px] text-[#606060]" dangerouslySetInnerHTML={{__html:Dompurify.sanitize(displayDescription)}}></p>
                        </div>
                    </div>

                </div>

                {/* more details */}
                <div>
                                <button>
                                    <Icons.ThreeDotIco />
                                </button>
                </div>

            </div>
        </>
    )

};

export default RowTypeCard;