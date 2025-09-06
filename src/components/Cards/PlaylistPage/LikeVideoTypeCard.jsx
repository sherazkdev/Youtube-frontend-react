import React from "react";
import Icons from "../../../assets/Icons";
import {Link} from "react-router-dom";

const LikeVideoTypeCard = ({video,count}) => {
    return (

        <>
            <div className="flex space-x-5 hover:bg-[#f2f2f2] py-2 px-2 rounded-2xl">
                <div className="content-center">
                    <p className="text-[#606060]">{count}</p>
                </div>
                <div className="flex m-[5px_0px_10px_0px] rounded-lg justify-start items-start flex-nowrap space-x-2.5">
                            
                            <div>
                                <img src={"https://i.ytimg.com/vi/_ON1tS4UHzY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCP8JG4tI5kM-jP60Fn8zbauFLGNQ"} className="rounded-[7px] w-[250px]" title="Thumbnail" />
                            </div>
                
                            <div>
                                <div>
                                    <h2 className="text-[#0f0f0f] font-roboto">Still Learning MERN Stack in 2025? Here’s the HARSH Truth No One Tells You!</h2>
                                    <div className="text-[#606060] font-semibold flex items-start  space-x-2 text-[11px]">
                                            <div className="">
                                                <Link to={`/channel/${video?.owner?._id}`}>
                                                    <p className="text-[#606060] font-semibold  text-[11px]">Mr.Beast</p>
                                                </Link>
                                            </div>
                
                                            <div>
                                                <p className="font-bold text-[18px] text-[#606060] mt-[-8px]">.</p>
                                            </div>
                
                                            <div id="views">
                                                <p>12k views</p> 
                                            </div>
                
                                            <div>
                                                <p  className="font-bold text-[18px] text-[#606060] mt-[-8px]">.</p>
                                            </div>
                
                                            <div id="uploaded-date">
                                                <p>140 Hours Ago</p>
                                            </div>
                                            
                
                                            
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    
                                    <div className="flex space-x-2 mt-2 mb-3 items-center"> 
                        
                                        <div>
                                            <p id="description" className="text-[#606060] font-normal text-[13px]">Check out our other channel: OutSystems Developer School In this video, we address a common frustration among new ...</p>
                                        </div>
                                    </div>
                
                                </div>
                            </div>
                
                            <div>
                                <button type="button"><Icons.ThreeDotIco /></button>
                            </div>
                        
                </div>
            </div>
        </>

    )

}

export default LikeVideoTypeCard;