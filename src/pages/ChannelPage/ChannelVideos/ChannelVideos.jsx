import React, { useState,useEffect } from "react";
import ColumnTypeCardMedium from "../../../components/Cards/ChannelPage/ColumnTypeCardMedium";
import ChannelTabs from "../ChannelTabs/ChannelTabs";
import ChannelHeaderSection from "../ChannelHeader/ChannelHeader";
import { useNavigate,useLocation } from "react-router-dom";
import useChannelVideos from "../../../hooks/useChannelVideos";

const ChannelVideos = () => {

    // Redirection
    const Redirect = useNavigate();

    // get location and get url paramter or queries
    const currentLocation = useLocation();

    // search url username or variables get from url by using urlSearchParam
    const variables = new URLSearchParams(currentLocation.search);

    const [username,setUsername] = useState(variables?.get("username") || null);

    // hook for get all this channel Videos by username
    const [channelVideosError,channelVideosLoading,channelVideosData] = useChannelVideos(username);

    // this useEffect using for username for update to unMount component
    useEffect( () => {

        if(variables?.get("username") === undefined){
            Redirect("/404",{replace:false});
        }
        setUsername(variables?.get("username"));

        // eslint-disable-next-line
    },[currentLocation.search,currentLocation.pathname])

        // this useEffect for error handling
    useEffect( () => {
        if(channelVideosError) {
            console.log(channelVideosError)
            Redirect("/404",{replace:true} );
        }
        // eslint-disable-next-line
    },[channelVideosError])
    return (
        <>

            <section className="flex justify-center space-y-3 items-start flex-col">
                    {/* Thumbnail,Channel,ChannelName,Operations,Subscribers,Videos Length */}
                    <section id="headerSection">
                        {channelVideosLoading === false && channelVideosData !== null && (
                            <ChannelHeaderSection data={channelVideosData}/>
                        )}
                    </section>
                    
                    {/* Tabs for example Home,Videos,Shorts,Playlists,Posts,SearchIcon */}
                    <section id="tabsSection">
                        <ChannelTabs />
                    </section>

                    {/* Videos */}
                    <section id="videosSection" className="relative">
                        <section id="videos-section" className="mt-3 border-b border-b-[#0000001a] p-[0px_0px_20px_0px] w-[1300px]" >
                            
                            <section id="links" className="flex items-start space-x-2 mb-3 mt-[-30px]">
                                <button type="button" className="bg-[#f2f2f2] p-[7px] rounded-lg text-[#0f0f0f] font-medium">Popular</button>
                                <button type="button" className="bg-[#f2f2f2] p-[7px] rounded-lg text-[#0f0f0f] font-medium">Latest</button>
                                <button type="button" className="bg-[#f2f2f2] p-[7px] rounded-lg text-[#0f0f0f] font-medium">Oldest</button>
                            </section>
                            {channelVideosData?.videos?.map( (video) => (
                                <ColumnTypeCardMedium video={video} key={video?._id}/>
                            ))}        
                                
                        </section>
                    </section>
                
            </section>

        </>
    )
}

export default ChannelVideos;