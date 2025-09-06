import React from "react";
import ChannelTabs from "./ChannelTabs/ChannelTabs";
import ChannelHeaderSection from "./ChannelHeader/ChannelHeader";

// New Card
import RowTypeVideoCard from "../../components/Cards/ChannelPage/RowTypeCard";
import ColumnTypeVideoCardSmall from "../../components/Cards/ChannelPage/ColumnTypeCardSmall";

const Channel = () => {

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
                        {/* Latest Video Section */}
                        <section id="featured-video-section" className="border-b border-b-[#0000001a] p-[0px_0px_20px_0px] w-[1300px]">
                            <RowTypeVideoCard video={randomVideo}/>
                        </section>
                        {/* Videos Section */}
                        <section id="videos-section" className="mt-3 border-b border-b-[#0000001a] p-[0px_0px_20px_0px] w-[1300px]" >
                            <h3 className="mb-2">Videos</h3>
                            <ColumnTypeVideoCardSmall video={randomVideo }/>
                        </section>
                        {/* Popular Videos */}
                        <section id="popular-videos-section" className="mt-3 border-b border-b-[#0000001a] p-[0px_0px_20px_0px] w-[1300px]">
                            <h3 className="mb-2">Popuplar Videos</h3>
                            <ColumnTypeVideoCardSmall video={randomVideo }/>
                        </section>
                    </section>
                
            </section>
        </>
    )

}

export default Channel;