import React,{useState,useRef,useEffect} from "react";
import {useLocation, useNavigate } from "react-router-dom";
import Icons from "../../assets/Icons";
import ColorThief from 'colorthief';
import LikeVideoTypeCard from "../../components/Cards/PlaylistPage/LikeVideoTypeCard";
import WatchHistoryTypeCard from "../../components/Cards/PlaylistPage/WatchHistoryTypeCard";

const SinglePlaylist = () => {

    const latestImgRef = useRef(null);
    const [bgColor, setBgColor] = useState([30, 30, 30]); // fallback RGB
    const [list,setList] = useState(null);
    const location = useLocation();
    const Navigate = useNavigate();

    useEffect( () => {

        const params = new URLSearchParams(location.search);
        if(params.get("list") === "WL" || params.get("list") === "LL"){
            setList(params.get("list"))
        }else(
            Navigate("/",{replace:true})
        )

    },[location.search])

    useEffect(() => {
      const img = latestImgRef.current;
      if(!img) return;
      if (img && img.complete) {
        getColor();
      } else {
        img.addEventListener('load', getColor);
      }
      
      function getColor() {
        const colorThief = new ColorThief();
        const color = colorThief.getColor(img);
        setBgColor(color); // [r, g, b]
      }
    },[]);
    

    const randomVideo = {
        _id: "123abc",
        title: "Exploring the Mountains in 4K",
        thumbnail: "https://i.ytimg.com/vi/abc123/default.jpg",
        views: 12500,
        createdAt: "2025-07-14T10:00:00Z",
        owner: {
          _id: "channel123",
          avatar: "https://i.pravatar.cc/36",
          channelName: "Nature Explorer",
        },
    };
    const gradientStyle = {
        background: `linear-gradient(to bottom, rgba(${bgColor.join(",")},0.9), rgba(${bgColor.join(",")},0.5))`
      };
    return (
        <>

            { list === "LL" ? (
                <>
                    {/* Video Play Options */}
                    <section 
                            style={{
                                background: `linear-gradient(to bottom, rgba(${bgColor.join(',')},0.9), rgba(${bgColor.join(',')},0.5))`,
                            }} 
                            className="w-[370px] h-[900px] sticky top-[80px] left-[100px] flex items-center justify-center rounded-lg flex-co">
                                
                                <div>
                                    {/* Playlist first Video Thumbnail  */}
                                    <div className="m-auto relative group">
                                        
                                        <div>
                                            <img className="w-[320px] rounded-md" crossOrigin="anonymous" ref={latestImgRef} src="https://i.ytimg.com/vi/QoiRcwKrl1M/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAPFctAFohScoef0ylWXNMkXdDIwQ" />
                                            
                                            <div className="w-[320px] rounded-md group-hover:opacity-100 h-[100%] opacity-0 absolute top-0 flex justify-center items-center bg-[#000000CC]">
                                                <p className="text-[#ffffff] flex space-x-2 cursor-pointer font-medium"> <span> <Icons.PlayIco /> </span> <span>Play All</span> </p>
                                            </div>
                                        </div>

                                    </div>

                                    {/* Like Videos Label your channel Name or total videos length views updated last time */}
                                    <div className="flex flex-col space-y-3">
                                        
                                        {/* Like Videos Label */}
                                        <div>
                                            <h1 className="text-[#ffffff] text-[28px] font-medium">Like Videos</h1>
                                        </div>
                                        
                                        {/* your channel Name or total videos length views updated last time */}
                                        <div className="flex space-y-2 flex-col">
                                            
                                            {/* Channel Name */}
                                            <div>
                                                <h2 className="text-[#fff]">Screen Scene</h2>
                                            </div>
                                            
                                            {/* Videos Length views updated last time*/}
                                            <div className="text-[#ffffffb3] flex space-x-2">

                                                {/* Videos Length */}
                                                <div>
                                                    <p> <span>5000</span> <span> Videos </span> </p>
                                                </div>
                                                
                                                {/* views */}
                                                <div>
                                                    <p> No views </p>
                                                </div>
                                                
                                                {/* updated last time */}
                                                <div>
                                                    <p> Updated today </p>
                                                </div>
                                            
                                            </div>

                                            {/* Download Ico Three Dote Ico */}
                                            <div className="text-[#ffffffb3] flex space-x-3">
                                                <button 
                                                    type="button"
                                                    style={{
                                                        background: `linear-gradient(to bottom, rgba(${bgColor.join(',')},0.9), rgba(${bgColor.join(',')},0.5))`,
                                                    }} 
                                                    className="p-2 font-bold rounded-full"
                                                    > <Icons.DownloadIco /> </button>
                                                
                                                <button 
                                                    type="button"
                                                    style={{
                                                        background: `linear-gradient(to bottom, rgba(${bgColor.join(',')},0.9), rgba(${bgColor.join(',')},0.5))`,
                                                    }} 
                                                    className="p-2 font-bold rounded-full"
                                                    > <Icons.ThreeDotIco /> </button>
                                            </div>
                                            
                                        </div>
                                        
                                        {/* Some Opeations */}
                                        <div className="flex space-x-2">
                                            
                                            <button type="button"
                                                    className="flex space-x-1 text-[#0f0f0f] bg-[#ffffff] px-4 py-2 rounded-full">

                                                {/* Play Icon */}
                                                <div>
                                                    <p><Icons.PlayIco /></p>
                                                </div>

                                                {/* Play All Label */}
                                                <div>
                                                    <p>Play all</p>
                                                </div>
                                            
                                            </button>

                                            <button 
                                                type="button"
                                                style={{
                                                    background: `linear-gradient(to bottom, rgba(${bgColor.join(',')},0.9), rgba(${bgColor.join(',')},0.5))`,
                                                }} 
                                                className="flex space-x-1 text-[#fff] bg-[#674673] px-4 py-2 rounded-full">
                                                
                                                {/* Shuffle Ico Icon */}
                                                <div>
                                                    <p><Icons.WavIco /></p>
                                                </div>

                                                {/* Shuffle Label */}
                                                <div>
                                                    <p>Shuffle</p>
                                                </div>

                                            </button>
                                        
                                        </div>
                                    
                                    </div>
                                </div>
                            
                    </section>

                    <section className="w-[60%] h-[calc(100vh - 80px)] ml-[60px] mt-2 flex justify-start space-x-4 items-start  overflow-hidden">

                            
                            {/* Playlist Videos */}
                            <section id="videosSection" className="relative">

                                    <LikeVideoTypeCard video={randomVideo } count={1}/>
                                    <LikeVideoTypeCard video={randomVideo } count={2}/>
                                    <LikeVideoTypeCard video={randomVideo } count={3}/>
                                    <LikeVideoTypeCard video={randomVideo } count={4}/>
                                    <LikeVideoTypeCard video={randomVideo } count={5}/>
                                    <LikeVideoTypeCard video={randomVideo } count={6}/>
                                    <LikeVideoTypeCard video={randomVideo } count={7}/>
                            </section>

                        
                    </section>

                </>
            ) : list === "WL" ? (

                <section id="watchLaterSection" className="w-full flex items-start justify-start gap-10 space-x-20">
                    {/* Sidebar */}
                    <section
                        style={gradientStyle}
                        className="w-[350px] min-h-[calc(100vh-100px)] h-auto sticky top-[80px] left-[100px] overflow-hidden flex flex-col items-center justify-start rounded-2xl p-4"
                    >
                        {/* Playlist Thumbnail */}
                        <div className="w-full relative group">
                        <img
                            className="w-full rounded-xl"
                            ref={latestImgRef}
                            crossOrigin="anonymous"
                            src="https://i.ytimg.com/vi/QoiRcwKrl1M/hq720.jpg"
                            alt="Playlist thumbnail"
                        />
                        <div className="absolute top-0 left-0 w-full h-full rounded-xl flex justify-center items-center bg-black/70 opacity-0 group-hover:opacity-100 transition">
                            <p className="text-white flex items-center space-x-2 cursor-pointer font-medium">
                            <Icons.PlayIco /> <span>Play All</span>
                            </p>
                        </div>
                        </div>

                        {/* Playlist Info */}
                        <div className="flex flex-col space-y-3 mt-6 w-full">
                        <h1 className="text-white text-[22px] font-semibold">Liked videos</h1>
                        <h2 className="text-white text-[15px]">Same Turmux</h2>

                        <div className="text-white/70 text-[13px] flex space-x-2">
                            <p>550 videos</p>
                            <p>No views</p>
                            <p>Updated today</p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-3 text-white/70">
                            <button
                            style={gradientStyle}
                            className="p-2 rounded-full"
                            aria-label="Download"
                            >
                            <Icons.DownloadIco />
                            </button>
                            <button
                            style={gradientStyle}
                            className="p-2 rounded-full"
                            aria-label="More options"
                            >
                            <Icons.ThreeDotIco />
                            </button>
                        </div>

                        <div className="flex space-x-2">
                            <button className="flex items-center space-x-1 text-black bg-white px-4 py-2 rounded-full">
                            <Icons.PlayIco /> <span>Play all</span>
                            </button>
                            <button
                            style={gradientStyle}
                            className="flex items-center space-x-1 text-white px-4 py-2 rounded-full"
                            >
                            <Icons.WavIco /> <span>Shuffle</span>
                            </button>
                        </div>
                        </div>
                    </section>

                    {/* Playlist Videos */}
                    <section className="w-[65%] h-[calc(100vh-80px)] mt-2 flex flex-col space-y-4 overflow-y-auto pr-2">
                        {/* Filter Buttons */}
                        <div className="flex items-center space-x-3 sticky top-0 bg-white py-2 z-10">
                        <button className="flex items-center space-x-1.5 cursor-pointer relative after:content-[''] after:absolute after:top-2 after:right-[-5px] after:bg-gray-300 after:h-[10px] after:w-[1px]">
                            <Icons.SortBarIco />
                            <p>Sort</p>
                        </button>
                        <button className="bg-gray-200 text-black px-3 py-1 rounded-md">All</button>
                        <button className="bg-gray-200 text-black px-3 py-1 rounded-md">Video</button>
                        <button className="bg-gray-200 text-black px-3 py-1 rounded-md">Shorts</button>
                        </div>

                        {/* Video Cards */}
                        <div className="flex flex-col">
                        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                            <WatchHistoryTypeCard key={i} video={randomVideo} count={i} />
                        ))}
                        </div>
                    </section>
                </section>

            ) : "Invalid Access" }
        </>
    )

}

export default SinglePlaylist;