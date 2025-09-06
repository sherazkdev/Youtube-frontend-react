import React from "react";
import Icons from "../../../assets/Icons";
import {Link} from "react-router-dom";
import DOMPurify from "dompurify";

const RowTypeCard = ({video,limit=185}) => {

    const isLessThen = video?.description < limit;
    const displayDesciption = isLessThen ? video?.description : video.description.slice(0,limit) + "...";

    return (

        <div className="flex hover:bg-[#f2f2f2] rounded-lg justify-start items-start flex-nowrap space-x-2.5 py-2">
                    
            <div>
                <img src={video?.thumbnail} className="rounded-[7px]  w-[246px] h-[138px]" title="Thumbnail" />
            </div>

            <div>
                <div>
                    <h2 className="text-[#0f0f0f] font-roboto">Still Learning MERN Stack in 2025? Here’s the HARSH Truth No One Tells You!</h2>
                    <div className="text-[#606060] font-semibold flex items-start  space-x-1 text-[11px]">
                            <div className="">
                                <Link to={`/channel/${video?.owner?._id}`}>
                                    <p className="text-[#606060] font-semibold  text-[11px]">{video?.owner?.fullname}</p>
                                </Link>
                            </div>

                            <div>
                                <p className="font-bold text-[18px] text-[#606060] mt-[-9.5px]">.</p>
                            </div>

                            <div id="views">
                                <p>12k views</p> 
                            </div>

                            <div>
                                <p  className="font-bold text-[18px] text-[#606060] mt-[-9.5px]">.</p>
                            </div>

                            <div id="uploaded-date">
                                <p>140 Hours Ago</p>
                            </div>
                            
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    
                    <div className="flex space-x-2 mt-2 mb-3 items-center"> 
        
                        <div>
                            <p id="description" className="text-[#606060] font-normal text-[13px]" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(displayDesciption) }} ></p>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <button type="button"><Icons.ThreeDotIco /></button>
            </div>
        
        </div>
    )

}

export default RowTypeCard;