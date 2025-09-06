import React, { useState } from "react";
import Icons from '../../../../assets/Icons';
import {Link} from "react-router-dom"

const VideoPlaylist = ({playlist,limit=60,shuffle,setShuffle,loop,setLoop,handleClickPlaylistVideo,currentIndex}) => { 

    const [hoverVideo,setHoverVideo] = useState(null);

    const handleLoop = () => {
      setLoop(!loop);
      if (!loop) setShuffle(false); // agar loop ON ho, shuffle OFF ho jaye
    };
  
    // Shuffle ke liye toggle
    const handleShuffle = () => {
      setShuffle(!shuffle);
      if (!shuffle) setLoop(false); // agar shuffle ON ho, loop OFF ho jaye
    };

    return (
        <>
            {/* Video Playlist Section */}
            <section id="videoPlaylist" className="w-[456px] mx-5 mt-[22px] border border-[#d9d9d9] rounded-lg flex flex-col space-y-2">

                {/* Playlist Header */}
                <div className="flex justify-between items-baseline">

                    {/* Watch Later Label,Playlist visibility for example private public,playlist channel name,Playlist videos length */}
                    <div className="flex flex-col space-y-2   p-4">

                        {/* Watch Later Label */}
                        <div>
                            <Link to="/" className="text-[#0f0f0f] text-[20px] font-medium">{playlist?.name}</Link>
                        </div>
                        
                        {/* Playlist Visisbility, channel name and playlist all videos length */}
                        <div className="flex space-x-2">

                            {/* Playlist Visisbility */}
                            <div className="bg-[#f2f2f2] flex space-x-1 items-center px-1 text-[#606060]">
                                <p><Icons.LockIco /></p>
                                <p id="visibility" className="text-[12px]">{playlist?.visibility}</p>
                            </div>
                            
                            {/* channel name */}
                            <div>
                                <p id="channelName" className="text-[#0f0f0f] text-[12px] font-normal relative after:content-[''] after:absolute after:top-2.5 after:right-[-10px] after:bg-[#606060] after:h-[1px] after:w-[5px]">{playlist?.owner?.username}</p>
                            </div>
                            
                            {/* Videos length */}
                            <div>
                                <p className="text-[#606060] ml-1 text-[12px]">{playlist?.videos?.length}</p>
                            </div>
                        
                        </div>
                        
                        {/* Shuffle Playlist,loop playlist */}
                        <div className="flex space-x-1 ml-[-8px] mt-2">

                            {/* Loop Arrow Icon */}
                            <button type="button" onClick={handleLoop} className={` ${loop ? "bg-[#f2f2f2]" : "hover:bg-[#f2f2f2]"} px-2 py-2 rounded-full`}>
                              <Icons.LoopArrow />
                            </button>
                            
                            <button  type="button" onClick={handleShuffle} className={`${shuffle ? "bg-[#f2f2f2]" : "hover:bg-[#f2f2f2]"} px-2 py-2 rounded-full`}>
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

                {playlist?.videos?.map((video, index) => (
                  <Link to={`/watch?v=${video?._id}&playlistId=${playlist?._id}&index=${index}`}>
                    <div
                      key={index}
                      onClick={ () => handleClickPlaylistVideo(index)}
                      className={`flex items-center w-full px-2 py-2 ${currentIndex === index ? "bg-[#e9ecdf]" : "hover:bg-[#eaeaea]"} hover:shadow-[0px_2px_4px_#ccc] transition-all duration-300 rounded-md cursor-pointer`}
                      onMouseOver={() => setHoverVideo(index)}
                      onMouseOut={() => setHoverVideo(null)}
                    >
                      {/* Count Number / Icon */}
                      <div className="flex justify-center items-center w-[24px] h-[24px] mr-3">
                        {hoverVideo === index ? (
                          <>
                            {currentIndex === index ? (
                              <p> ▶</p>
                            ) : (
                              <Icons.TwoLineIcon className="text-[#606060]" />
                            )}
                          </>
                        ) : (
                          <span className="text-[14px] text-[#606060]">{index + 1}</span>
                        )}
                      </div>

                      {/* Thumbnail */}
                      <div className="relative w-[100px] h-[56px] mr-3">
                        <img
                          src={video?.thumbnail}
                          alt={video?.title}
                          className="w-full h-full object-cover rounded-md"
                        />
                        {/* Duration overlay (optional future use) */}
                        <div className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-[10px] px-1 rounded hidden">
                          {video?.duration}
                        </div>
                      </div>

                      {/* Video Info */}
                      <div className="flex flex-col flex-grow overflow-hidden">
                        {/* Title */}
                        <h2 className="text-[#0f0f0f] text-[14px] font-medium truncate max-w-[200px]">
                          {video?.title?.length < limit
                            ? video.title
                            : video?.title?.slice(0, limit) + "..."}
                        </h2>

                        {/* Channel */}
                        <p className="text-[#606060] text-[12px]">{video?.owner?.username}</p>
                      </div>

                      {/* Three Dot Icon (right side, visible only on hover) */}
                      <div
                        className={`ml-auto transition-opacity duration-300 ${
                          hoverVideo === index ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <Icons.ThreeDotIco className="text-[#606060]" />
                      </div>
                    </div>
                  </Link>
                
                ))}

            </section>
        </>
    )

}

export default VideoPlaylist;