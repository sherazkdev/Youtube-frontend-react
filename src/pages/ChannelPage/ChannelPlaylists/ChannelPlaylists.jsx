import React, { useEffect, useState } from "react";
import Icons from "../../../assets/Icons";
import ChannelHeaderSection from "../ChannelHeader/ChannelHeader";
import useChannelPlaylists from "../../../hooks/useChannelPlaylists";
import ChannelTabs from "../ChannelTabs/ChannelTabs";
import PlaylistTypeVideoCard from "../../../components/Cards/ChannelPage/PlaylistTypeCard";
import { useLocation, useNavigate } from "react-router-dom";

const ChannelPlaylists = () => {
    

    // get url parameters
    const currentLocation = useLocation();

    // parameters
    const variables = new URLSearchParams(currentLocation?.search);

    // Redirection
    const Redirect = useNavigate();

    // get username from variables
    const [username,setUsername] = useState(variables?.get("username") || null);
    const [errors,setErrors] = useState(null);

    // hook using for get all playlist and Channel Info
    const [channelPlaylistError,channelPlaylistLoading,channelPlaylists] = useChannelPlaylists(username || variables?.get("username"));

    // this useEffect checking username is exist in url and getting
    useEffect( () => {
        if(!variables?.get("username")){
            Redirect("/",{replace:false});
        }
        setUsername(variables?.get("username"));

        // eslint-disable-next-line
    },[currentLocation?.search])

    // error handling by useEffect
    useEffect( () => {
        if(channelPlaylistError) setErrors({channelPlaylistError:channelPlaylistError});
    },[channelPlaylistError]);


    // check any one error is exist
    if(errors?.length > 0){
        Redirect("/",{replace:false});
    }

    return (
        <>
            {!channelPlaylistLoading && channelPlaylists && (
                <section className="flex justify-center space-y-3 items-start flex-col ">
                        {/* Thumbnail,Channel,ChannelName,Operations,Subscribers,Videos Length */}
                        <section id="headerSection">
                            <ChannelHeaderSection data={channelPlaylists}/>
                        </section>
                        
                        {/* Tabs for example Home,Videos,Shorts,Playlists,Posts,SearchIcon */}
                        <section id="tabsSection">
                            <ChannelTabs />
                        </section>

                        {/* Videos */}
                        <section id="videosSection" className="relative w-full">
                            {/* Latest Video Section */}
                            <section id="top-video-section" className="flex justify-between items-start w-full">
                                
                                {/* Created Playlists Label */}
                                <div>
                                    <h3 className="font-normal text-[#0f0f0f]">Created Playlists</h3>
                                </div>

                                {/*  */}
                                <div className="flex space-x-2 items-start cursor-pointer justify-start">
                                    <button type="button"> <Icons.SortBarIco /> </button>
                                    <p className="text-[#0f0f0f]">Sort By</p>
                                </div>

                            </section>

                            {/* Playlists Section */}
                            <section className="w-full">
                                {channelPlaylists?.playlists?.map( (playlist) => (
                                    <PlaylistTypeVideoCard  playlist={playlist} />
                                ))}
                            </section>
                            
                        </section>

                </section>
            )}

        </>
    )

}

export default ChannelPlaylists;