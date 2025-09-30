import React, { useEffect, useState } from "react";
import ChannelTabs from "./ChannelTabs/ChannelTabs";
import ChannelHeaderSection from "./ChannelHeader/ChannelHeader";
import ErrorPage from "../ErrorPage/ErrorPage";
import {useLocation,useNavigate} from "react-router-dom";

// custon hooks
import useChannelByUsername from "../../hooks/useChannelByUsername";

// New Card
import RowTypeVideoCard from "../../components/Cards/ChannelPage/RowTypeCard";
import ColumnTypeVideoCardSmall from "../../components/Cards/ChannelPage/ColumnTypeCardSmall";

const Channel = () => {

    // get username param from url
    const currentLocation = useLocation();
    
    // url search params
    const variables = new URLSearchParams(currentLocation.search);

    // redirection
    const Redirect = useNavigate();

    const [username,setUsername] = useState(variables.get("username") || "");

    // extract username from url
    useEffect( () => {
        if(!variables.get("username")){
            Redirect("/404")
        }
        setUsername(variables.get("username"));
        // eslint-disable-next-line
    },[currentLocation.pathname,currentLocation.search])

    // this hook for get channel by username
    const [channelError,channelLoading,channelData] = useChannelByUsername(username);

    // this useEffect for error handling
    useEffect( () => {
        console.log(channelError)
        if(channelError) {
            Redirect("/404",{replace:true} );
        }
        // eslint-disable-next-line
    },[channelError])
    
    return (
        <> 
    {}
            <section className="flex justify-center space-y-3 items-center flex-col overflow-y-auto">
                {!channelLoading && channelData && (
                    <>
                        {/* Thumbnail,Channel,ChannelName,Operations,Subscribers,Videos Length */}
                        <section id="headerSection" className="flex justify-center  items-start flex-col">
                            <ChannelHeaderSection data={channelData}/>
                        </section>
                        
                        {/* Tabs for example Home,Videos,Shorts,Playlists,Posts,SearchIcon */}
                        <section id="tabsSection" className="flex justify-center items-start">
                            <ChannelTabs />
                        </section>
                    
                

                        {/* Videos */}
                        <section id="videosSection" className="relative w-[1300px] flex justify-center items-start flex-col">
                            {/* Latest Video Section */}
                            <section id="featured-video-section" className="border-b border-b-[#0000001a] p-[0px_0px_20px_0px] w-full">
                                <RowTypeVideoCard video={channelData?.allVideos?.latest[0]}/>
                            </section>
                            {/* Videos Section */}
                            <section id="videos-section" className="mt-3 border-b border-b-[#0000001a] p-[0px_0px_20px_0px] w-full" >
                                <h3 className="mb-2">Videos</h3>
                                {channelData?.allVideos?.others[0]?.map( (video) => (
                                    <ColumnTypeVideoCardSmall key={video._id} video={video}/>
                                ))}
                            </section>
                            {/* Popular Videos */}
                            <section id="popular-videos-section" className="mt-3 border-b border-b-[#0000001a] p-[0px_0px_20px_0px] ">
                                <h3 className="mb-2">Popuplar Videos</h3>
                                {channelData?.allVideos?.popular[0]?.map( (video) => (
                                    <ColumnTypeVideoCardSmall video={video} key={video?._id}/>
                                ))}
                                
                            </section>
                        </section>
                    </>
                )}
            </section>
        </>
    )

}

export default Channel;