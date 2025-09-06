import React from "react";
import PlaylistTypeCard from "../../components/Cards/PlaylistPage/PlaylistTypeCard";

const Playlists = () => {

    const randomVideo = {
        _id: "123abc",
        title: "Exploring the Mountains in 4K",
        thumbnail: "https://i.ytimg.com/vi/M0hgSl43Mlg/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Ac4FgAKACooCDAgAEAEYPiBYKHIwDw==&rs=AOn4CLDHwjpbFeJO-BgYoeWX4Ui052loew",
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
            
            {/* Content Sections For Playlisy */}
            <section className="flex flex-col space-y-3">
                    
                    {/* Playlist To Header */}
                    <section className="flex flex-col space-y-3">

                        {/* Heading Playlist */}
                        <div>
                            <h1 className="text-[#0f0f0f] font-medium text-[28px]">Playlists</h1>
                        </div>

                        {/* Buttons */}
                        <div className="flex space-x-2">
                            <button type="button" className="bg-[#f2f2f2] px-3 py-1 text-[#0f0f0f] hover:bg-[#d9d9d9] rounded-md ">Mix</button>
                            <button type="button" className="bg-[#f2f2f2] px-3 py-1 text-[#0f0f0f] hover:bg-[#d9d9d9] rounded-md ">Music</button>
                            <button type="button" className="bg-[#f2f2f2] px-3 py-1 text-[#0f0f0f] hover:bg-[#d9d9d9] rounded-md ">Mixes</button>
                            <button type="button" className="bg-[#f2f2f2] px-3 py-1 text-[#0f0f0f] hover:bg-[#d9d9d9] rounded-md ">Owned</button>
                            <button type="button" className="bg-[#f2f2f2] px-3 py-1 text-[#0f0f0f] hover:bg-[#d9d9d9] rounded-md ">Saved</button>
                        </div>

                    </section>
                    
                    {/* Playlist Section */}
                    <section>
                        <PlaylistTypeCard video={randomVideo} />
                        <PlaylistTypeCard video={randomVideo} />
                        <PlaylistTypeCard video={randomVideo} />
                        <PlaylistTypeCard video={randomVideo} />
                    </section>

            </section>
        </>
    )


}

export default Playlists;