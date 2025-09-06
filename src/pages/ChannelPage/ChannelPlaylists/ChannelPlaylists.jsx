import React from "react";
import Icons from "../assets/Icons";
import ChannelHeaderSection from "../components/ChannelHeaderSection";
import ChannelTabs from "../components/ChannelTabs";
import PlaylistTypeVideoCard from ".././components/Cards/ChannelPage/PlaylistTypeCard";

const ChannelPlaylists = () => {

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
    
    return (
        <>

            <section className="w-[90%] flex justify-start space-y-2 items-start ml-[200px] flex-col overflow-y-auto">
                    {/* Thumbnail,Channel,ChannelName,Operations,Subscribers,Videos Length */}
                    <section id="headerSection">
                        <ChannelHeaderSection />
                    </section>
                    
                    {/* Tabs for example Home,Videos,Shorts,Playlists,Posts,SearchIcon */}
                    <section id="tabsSection">
                        <ChannelTabs />
                    </section>

                    {/* Videos */}
                    <section id="videosSection" className="relative">
                        {/* Latest Video Section */}
                        <section id="top-video-section" className=" flex justify-between items-start  w-[1300px]">
                            
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
                        <section>
                            <PlaylistTypeVideoCard  video={randomVideo} />
                            <PlaylistTypeVideoCard  video={randomVideo} />
                            <PlaylistTypeVideoCard  video={randomVideo} />
                            <PlaylistTypeVideoCard  video={randomVideo} />
                        </section>
                        
                    </section>

            </section>

        </>
    )

}

export default ChannelPlaylists;