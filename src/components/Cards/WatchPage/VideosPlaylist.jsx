import React, { useState } from "react";
import Icons from "../../../assets/Icons";
import {Link} from "react-router-dom"

const VideoPlaylist = ({videos,limit=60}) => {

    const [hoverVideo,setHoverVideo] = useState(null);

    

    return (
        <>
            {/* Video Playlist Section */}
            <section id="videoPlaylist" className="w-[426px] border py-2 border-[#d9d9d9] rounded-lg ml-6 mb-4 flex flex-col space-y-2">

                {/* Playlist Header */}
                <div className="flex justify-between items-baseline">

                    {/* Watch Later Label,Playlist visibility for example private public,playlist channel name,Playlist videos length */}
                    <div className="flex flex-col space-y-2   p-4">

                        {/* Watch Later Label */}
                        <div>
                            <Link to="/" className="text-[#0f0f0f] text-[20px] font-medium">Watch  later</Link>
                        </div>
                        
                        {/* Playlist Visisbility, channel name and playlist all videos length */}
                        <div className="flex space-x-2">

                            {/* Playlist Visisbility */}
                            <div className="bg-[#f2f2f2] flex space-x-1 items-center px-1 text-[#606060]">
                                <p><Icons.LockIco /></p>
                                <p id="visibility" className="text-[12px]">Private</p>
                            </div>
                            
                            {/* channel name */}
                            <div>
                                <p id="channelName" className="text-[#0f0f0f] text-[12px] font-normal relative after:content-[''] after:absolute after:top-2.5 after:right-[-10px] after:bg-[#606060] after:h-[1px] after:w-[5px]">Mr.beast</p>
                            </div>
                            
                            {/* Videos length */}
                            <div>
                                <p className="text-[#606060] ml-1 text-[12px]">24</p>
                            </div>
                        
                        </div>
                        
                        {/* Shuffle Playlist,loop playlist */}
                        <div className="flex space-x-1 ml-[-8px] mt-2">

                            {/* Loop Arrow Icon */}
                            <button type="button" className="hover:bg-[#f2f2f2] px-2 py-2 rounded-full">
                                <Icons.LoopArrow />
                            </button>
                            
                            <button type="button" className="hover:bg-[#f2f2f2] px-2 py-2 rounded-full">
                                <Icons.WavIco />
                            </button>
                        
                        </div>
                    
                    </div>
                    
                    {/* Close Button */}
                    <div className="p-4">
                        <button className="mt-2">
                                <Icons.CrossIcon />
                        </button>
                    </div>

                </div>

                {videos.map( (video,index) => ( 
                    // {/* Playlist Video Section */}
                    <div className="flex justify-start w-[426px] py-1 hover:shadow-[0px_2px_0px_#ccc] overflow-hidden hover:bg-[#f2f2f2]" onMouseOver={ () => setHoverVideo(index)} onMouseOut={ () => setHoverVideo(null)}>

                        {/* Count Number  */}
                        <div className="flex justify-center items-center px-2 mt-3 w-[24px] h-[24px]">
                            {hoverVideo === index ? (
                                <p className="w-[24px]"><Icons.TwoLineIcon /></p>
                            ) : (
                                <p className="w-[24px]">{index + 1}</p>
                            )}
                        </div>

                        {/* Video Details */}
                        <div className="flex space-x-1 items-start justify-start relative">
                            
                            {/* Thumbnail Section */}
                            <div>
                                <img src="https://i.ytimg.com/vi/SxTYjptEzZs/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCgUGdrYpOK4EaGG3bRrkwoZxnEpg" className="w-[100px] max-w-[100px] rounded-md" />
                            </div>

                            {/* Video Duration */}
                            <div id="duration" className="hidden"></div>

                            {/* Video Title and channel Name */}
                            <div className="flex flex-col items-start justify-start">

                                {/* Video Title */}
                                <div>
                                    <h2 className="text-[#0f0f0f] text-[14px]">{( video.title.length < limit ) ? video.title : video.title.slice(0,limit) + "..."}</h2>
                                </div>

                                {/* Channel Name */}
                                <div>
                                    <p className="text-[#606060] text-[12px]">{video.owner.channelName}</p>
                                </div>

                            </div>

                            {/* Three Dot Ico Show on hover */}
                            <div className="absolute top-4 right-10 w-[100%]">
                                <button type="button" className="ml-[410px]">
                                    <Icons.ThreeDotIco />
                                </button>
                            </div>
                        
                        </div>

                    </div>
                ))}

            </section>
        </>
    )

}

export default VideoPlaylist;