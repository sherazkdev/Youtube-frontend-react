import React from "react";
import ColumnTypeCardMedium from "../components/Cards/ChannelPage/ColumnTypeCardMedium";
import ChannelTabs from "../components/ChannelTabs";
import ChannelHeaderSection from "../components/ChannelHeaderSection";

const ChannelVideos = () => {

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

            <section className="w-[90%] flex justify-start space-y-3 items-start ml-[200px] flex-col overflow-y-auto">
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
                        <section id="videos-section" className="mt-3 border-b border-b-[#0000001a] p-[0px_0px_20px_0px] w-[1300px]" >
                            
                            <section id="links" className="flex items-start space-x-2 mb-3 mt-[-30px]">
                                <button type="button" className="bg-[#f2f2f2] p-[7px] rounded-lg text-[#0f0f0f] font-medium">Popular</button>
                                <button type="button" className="bg-[#f2f2f2] p-[7px] rounded-lg text-[#0f0f0f] font-medium">Latest</button>
                                <button type="button" className="bg-[#f2f2f2] p-[7px] rounded-lg text-[#0f0f0f] font-medium">Oldest</button>
                            </section>

                            <ColumnTypeCardMedium video={randomVideo }/>
                            <ColumnTypeCardMedium video={randomVideo }/>
                            <ColumnTypeCardMedium video={randomVideo }/>
                            <ColumnTypeCardMedium video={randomVideo }/>
                            <ColumnTypeCardMedium video={randomVideo }/>
                            <ColumnTypeCardMedium video={randomVideo }/>
                            <ColumnTypeCardMedium video={randomVideo }/>
                        </section>
                    </section>
                
            </section>

        </>
    )
}

export default ChannelVideos;