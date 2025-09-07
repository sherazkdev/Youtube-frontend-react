import React,{useState,useRef,useEffect} from "react";
import {Link, useLocation, useNavigate } from "react-router-dom";
import Icons from "../../assets/Icons";
import ColorThief from 'colorthief';
import LikeVideoTypeCard from "../../components/Cards/PlaylistPage/LikeVideoTypeCard";
import WatchHistoryTypeCard from "../../components/Cards/PlaylistPage/WatchHistoryTypeCard";
import useWatchLaterOrLikeVideosPlaylist from "../../hooks/useWatchLaterOrLikeVideosPlaylist";
import DateCalculate from "../../utils/DateCalculate";

const SinglePlaylist = () => {

    // hoook for getPla

    const latestImgRef = useRef(null);
    const [bgColor, setBgColor] = useState([30, 30, 30]); // fallback RGB
    const [list,setList] = useState(null);
    const [playlistData,setPlaylistData] = useState(null);
    const location = useLocation();
    const Navigate = useNavigate();

    // this useeffect using for getting url params
    useEffect( () => {

        const params = new URLSearchParams(location.search);
        if(params.get("list") === "WL" || params.get("list") === "LL"){
            setList(params.get("list"))
        }else(
            Navigate("/",{replace:true})
        )
        // eslint-disable-next-line
    },[location.search,location.pathname])

    // hook for watch later or like videos
    const [playlistFetchingError,playlistFetchingLoading,data] = useWatchLaterOrLikeVideosPlaylist("LL");

    useEffect( () => { 
        if(playlistFetchingLoading) {
            return;
        }
        if(data?.length < 1 && playlistFetchingLoading === true){
            return;
        }
        setPlaylistData(data);
    },[playlistFetchingLoading,data,playlistData]);

    // use effect for error handling
    useEffect( () => {
        if(playlistFetchingError) return (<>Some error occured: {playlistFetchingError}</>)
    },[playlistFetchingError])

    // get color from image using ColorThief
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
        console.log(color)
        setBgColor(color); 
      }
    },[playlistData,latestImgRef]);
    
    const gradientStyle = {
        background: `linear-gradient(to bottom, rgba(${bgColor.join(",")},0.9), rgba(${bgColor.join(",")},0.5))`
    };

    return (
        <>
            {playlistFetchingLoading == false && data && (
                <section id="watchLaterSection" className="w-full grid grid-cols-[360px_1fr] grid-rows-[minmax(300px,800px)_1fr] gap-[1rem]">
                            {/* playlist panel */}
                            <aside style={gradientStyle} className={`p-4 rounded-lg border border-gray-300 row-span-2`}>
                                {/* last added video in watch later thumbnail */}
                                <div className="w-[312px] h-[175px]">
                                    {playlistData?.videos?.length > 0 && (
                                        <img
                                            ref={latestImgRef}
                                            crossOrigin="anonymous"
                                            src={playlistData?.videos[Math.floor(Math.random() * (playlistData?.videos?.length -1))]?.thumbnail}
                                            alt="Latest Video Thumbnail"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                        
                                    )}
                                </div>

                                {/* playlist info */}
                                <div className="grid row-span-2 gap-y-[1.5rem]">
                                    {/* playlist name */}
                                    <div>
                                        <h2 className="text-[#ffffff] font-bold text-[28px]">{data?.name}</h2>
                                    </div>

                                    {/* owner name, last updated, and operations */}
                                    <div className="grid row-span-3 gap-y-3">
                                        {/* owner name + stats */}
                                        <div className="grid row-span-2 gap-y-1">
                                        <h3 className="text-[#ffffff] text-[16px] font-normal">Sheraz Dev</h3>
                                        <div className="flex text-[#ffffffb3] text-[14px] gap-x-1 font-normal">
                                            <p>{playlistData?.videos?.length} videos</p>
                                            <span>•</span>
                                            <p>No views</p>
                                            <span>•</span>
                                            <p>Last updated in {<DateCalculate localDate={data?.updatedAt} />}</p>
                                        </div>
                                        </div>

                                        {/* download and add videos */}
                                        <div className="gap-x-3 flex">
                                            <button className="bg-[#ffffff1a] p-2 hover:bg-[#fff3] border border-[#00000000] rounded-full fill-[#ffffff]">
                                                <Icons.DownloadIco />
                                            </button>
                                            <button className="bg-[#ffffff1a] p-2 hover:bg-[#fff3] border border-[#00000000] rounded-full fill-[#ffffff]">
                                                <Icons.ThreeDotIco />
                                            </button>
                                        </div>

                                        {/* play all + shuffle */}
                                        <div className="flex gap-x-1">
                                            <Link to={`/watch?v=${ playlistData?.videos?.length > 0 ? playlistData?.videos[0]?._id : ""}&playlistId=${playlistData?._id}`} className="bg-[#ffffff] p-[6px_25px] hover:bg-[#d9d9d9] flex gap-x-2 rounded-full">
                                                <span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    focusable="false"
                                                    aria-hidden="true"
                                                >
                                                    <path d="m7 4 12 8-12 8V4z"></path>
                                                </svg>
                                                </span>
                                                <span>Play all</span>
                                            </Link>

                                            <Link to={`/watch?v=${ playlistData?.videos?.length > 0 ? playlistData?.videos[0]?._id : ""}&playlistId=${playlistData?._id}`} className="bg-[#ffffff1a] p-[6px_25px] hover:bg-[#fff3] border border-[#00000000] text-[#ffffff] gap-x-2 flex rounded-full">
                                                <span>
                                                <div style={{ display: "block", fill: "currentcolor" }}>
                                                    <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    enableBackground="new 0 0 24 24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    focusable="false"
                                                    aria-hidden="true"
                                                    >
                                                    <path d="M18.15 13.65 22 17.5l-3.85 3.85-.71-.71L20.09 18H19c-2.84 0-5.53-1.23-7.39-3.38l.76-.65C14.03 15.89 16.45 17 19 17h1.09l-2.65-2.65.71-.7zM19 7h1.09l-2.65 2.65.71.71L22 6.51l-3.85-3.85-.71.71L20.09 6H19c-3.58 0-6.86 1.95-8.57 5.09l-.73 1.34C8.16 15.25 5.21 17 2 17v1c3.58 0 6.86-1.95 8.57-5.09l.73-1.34C12.84 8.75 15.79 7 19 7zM8.59 9.98l.75-.66C7.49 7.21 4.81 6 2 6v1c2.52 0 4.92 1.09 6.59 2.98z"></path>
                                                    </svg>
                                                </div>
                                                </span>
                                                <span>Shuffle</span>
                                            </Link>
                                        </div>

                                    </div>
                                </div>

                            </aside>

                            {/* playlist videos */}
                            <section className="grid w-[97%] grid-rows-[minmax(30px,50px)1fr] row-gap-[1.5rem]" style={{margin:"0px"}}>
                                {/* top header */}
                                <div className="sticky top-0 bg-[#ffffff] flex justify-start border-b border-gray-300 pb-2 mb-2">
                                    <button className="active:bg-[#f2f2f2] flex p-[1] gap-2 items-start">
                                        <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 24 24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            focusable="false"
                                            aria-hidden="true"
                                        >
                                            <path d="M21 6H3V5h18v1zm-6 5H3v1h12v-1zm-6 6H3v1h6v-1z"></path>
                                        </svg>
                                        </span>
                                        <span>Sort</span>
                                    </button>
                                </div>
                                                
                                {/* video list */}
                                <div className="h-full w-full flex flex-col gap-y-[1rem]">
                                    {playlistData?.videos?.length > 0 ? playlistData?.videos?.map( (video) => (
                                        <WatchHistoryTypeCard video={video}  key={video?._id}/>
                                    )) : (<>No videos in watch later</>)}
                                </div>
                            </section>

                </section>
            )}
        </>
    )

}

export default SinglePlaylist;