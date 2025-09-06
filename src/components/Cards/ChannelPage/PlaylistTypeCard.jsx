import React, { useEffect, useRef, useState } from "react";
import Icons from "../../../assets/Icons";
import ColorThief from "colorthief";
import {Link} from "react-router-dom"
const PlaylistTypeCard = ({video}) => {

    // Get rgb color from image
    const thumbnailRef = useRef(null);
    const [color,setColor] = useState([0,0,0]);

    useEffect( () => {

        const img = thumbnailRef.current;
        const handleImageComplete = () => {
            if(!img) return;
            
            try {
                
                const colorTheif = new ColorThief();
                const rgbColor = colorTheif.getColor(img);
                setColor(rgbColor);
            } catch (error) {
                console.log(error)
            }
            

        }

        if(!img && !img.complete){
            
            img.addEventListener("load",img)
        }else {

            handleImageComplete();
        }


    },[] )

    return (
        <Link to={`/watch?v=${video._id || "123"}&playlistId=${video?.playlist?._id || "122"}`}  >
            <div id="video" className="w-[250px] m-[5px_10px_10px_0px] h-[200px] inline-block">
                
                {/* Thumbnail Collections */}
                <div className="relative">
                    {/* Collections */}
                    <div className="flex justify-center text-center  items-start flex-col">
                        <div 
                            className={`w-[225px] h-[3px] m-auto rounded-lg`} style={{
                            background: `linear-gradient(to bottom, rgba(${color.join(',')},0.9), rgba(${color.join(',')},0.5))`,}}>

                        </div>
                        <div 
                            className={`w-[225px] h-[3px] m-auto rounded-lg`} style={{
                            background: `linear-gradient(to bottom, rgba(${color.join(',')},0.9), rgba(${color.join(',')},0.5))`,}}>

                        </div>
                    </div>
                    
                    {/* Thumbnail */}
                    <div>
                        <img className="w-[250px] rounded-lg" crossOrigin="anonymous" ref={thumbnailRef} src="https://i.ytimg.com/vi/SBNth5Jrgu8/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD1dSQ2OPRlLpPSjR4yS7RLt3R3aQ" />
                    </div>

                    {/* Video List */}
                    <div className="flex items-center px-1 right-0 bottom-1 space-x-2 bg-[#412e36] rounded-md text-white absolute">
                        {/* Playlist Ico */}
                        <div className="w-[20px]"    >
                            <Icons.PlayListIco />
                        </div>
                        
                        {/* Label and Videos Total List */}
                        <div className="flex items-start space-x-1">

                            {/* Video Label */}
                            <p className="text-[11px]"> 
                                { video?.totalLenght > 1 ? "Videos" : "Video"}
                            </p>

                            {/* Video List */}
                            <p className="text-[11px]">
                                { video?.totalLenght > 1 ? video?.totalLenght : "1" }
                            </p>

                        </div>
                    </div>

                </div>
                
                {/* Playlist Name Visibilty and label or threedotes */}
                <div className="flex justify-between items-start mt-1">

                    <div className="flex flex-col ">    

                        {/* Playlist Label */}
                        <div>
                            <h2>Movies</h2>
                        </div>
                        
                        {/* Playlist Visibility */}
                        <div>
                            <p className="text-[#606060] hover:text-[#0f0f0f] text-[13px] cursor-pointer">Private</p>
                        </div>
                        
                        {/* view full playlist label */}
                        <div>
                            <p className="text-[#606060] hover:text-[#0f0f0f] text-[13px] cursor-pointer">view full playlist</p>
                        </div>

                    </div>
                    
                    <div>
                        <Icons.ThreeDotIco />
                    </div>
                
                </div>
                
            </div>
        </Link>
    )

};

export default PlaylistTypeCard;