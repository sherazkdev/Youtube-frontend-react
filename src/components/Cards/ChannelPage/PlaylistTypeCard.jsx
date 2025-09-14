import React, { useEffect, useRef, useState } from "react";
import Icons from "../../../assets/Icons";
import ColorThief from "colorthief";
import {Link} from "react-router-dom"
const PlaylistTypeCard = ({playlist}) => {

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
        <Link to={`/watch?v=${playlist.videos[0]?._id}&playlistId=${playlist?._id}`}  >
            <div id="video" className="w-[250px] m-[5px_10px_10px_0px] h-[200px] inline-block">
                
                {/* Thumbnail Collections */}
                <div className="relative">
                    {/* Collections */}
                    <div className="flex justify-center text-center  items-start flex-col">
                        <div 
                            className={`w-[95%] h-[3px] m-auto rounded-lg`} style={{
                            background: `linear-gradient(to bottom, rgba(${color.join(',')},0.9), rgba(${color.join(',')},0.5))`,}}>

                        </div>
                        <div 
                            className={`w-[95%] h-[3px] m-auto rounded-lg`} style={{
                            background: `linear-gradient(to bottom, rgba(${color.join(',')},0.9), rgba(${color.join(',')},0.5))`,}}>

                        </div>
                    </div>
                    
                    {/* Thumbnail */}
                    <div>
                        <img className="w-[250px] rounded-lg" crossOrigin="anonymous" ref={thumbnailRef} src={playlist?.videos[0]?.thumbnail} />
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
                                { playlist?.videos?.length > 1 ? "Videos" : "Video"}
                            </p>

                            {/* Video List */}
                            <p className="text-[11px]">
                                { playlist?.videos?.length}
                            </p>

                        </div>
                    </div>

                </div>
                
                {/* Playlist Name Visibilty and label or threedotes */}
                <div className="flex justify-between items-start mt-1">

                    <div className="flex flex-col ">    

                        {/* Playlist Label */}
                        <div>
                            <h2>{playlist?.name}</h2>
                        </div>
                        
                        {/* Playlist Visibility */}
                        <div>
                            <p className="text-[#606060] hover:text-[#0f0f0f] text-[13px] cursor-pointer">{playlist?.visibility }</p>
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