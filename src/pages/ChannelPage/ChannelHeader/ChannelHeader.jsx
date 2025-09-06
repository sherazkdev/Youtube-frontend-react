import React from "react";
import { Link } from "react-router-dom";
import Icons from "../../../assets/Icons";
const ChannelHeaderSection = () => {

    const handleThumbnailMouseMove = () => {
        const cameraEditSection = document.getElementById("editThumbnailLink");
        cameraEditSection.classList.remove("hidden");
        cameraEditSection.classList.add("flex");
    }
    const handleThumbnailMouseLeave = () => {
        const cameraEditSection = document.getElementById("editThumbnailLink");
        cameraEditSection.classList.remove("flex");
        cameraEditSection.classList.add("hidden");
    }

    const handleAvatarMouseMove = () => {
        const cameraEditSection = document.getElementById("editAvatarSection");
        cameraEditSection.classList.remove("opacity-0");
        cameraEditSection.classList.add("opacity-1");
    }
    const handleAvatarMouseLeave = () => {
        const cameraEditSection = document.getElementById("editAvatarSection");
        cameraEditSection.classList.remove("opacity-1");
        cameraEditSection.classList.add("opacity-0");
    }
    
    return (
        <>
            {/* Thumbnail Section */}
            <section className="relative w-[1284px] h-[206px] overflow-hidden ">    

                {/* Thumbnail Image */}
                <div id="thumbnail" onMouseOver={ handleThumbnailMouseMove } onMouseOut={ handleThumbnailMouseLeave } className="w-[1284px] h-[206px]">
                    <img className="rounded-2xl" src="https://yt3.googleusercontent.com/ZZJ1lwwvpu0DNzMVcnN7xv8kMmpRNO_DT5Rasq0F_ZLWCs4yz4q-b8ih9j4fYmYqs0KEV0zIRls=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj" />
                </div>
                
                {/* Operation Edit Thumbnail Link */}
                <div id="editThumbnailSection" >
                    <Link to={`/edit/profile/thumbnail`} onMouseOver={ handleThumbnailMouseMove } id="editThumbnailLink" className="items-start absolute text-[#fff] space-x-2 justify-center hidden right-4 bottom-4">
                        {/* Camera Icon */}
                        <div className="text-[#fff]">
                            <Icons.CameraIco />
                        </div>
                        
                        {/* Edit Label */}
                        <div>
                            <h3>Edit</h3>
                        </div>
                    </Link>
                </div>
            
            </section>
                
            {/* Channel Section */}
            <section className="flex items-start justify-start space-x-2 mt-6 ">

            {/* Channel Avatar */}
            <div className="relative" onMouseMove={handleAvatarMouseMove} onMouseOut={handleAvatarMouseLeave}>
                
                {/* Avatar */}
                <div>
                    <img className="clip-circle-channel-logo" src="https://yt3.googleusercontent.com/ytc/AIdro_nEJir8QeoAfhppIzqqWN0DYBx-lz3supkvA2qcidRlDA=s160-c-k-c0x00ffffff-no-rj" />
                </div>

                {/* Camera Overlay */}

                <div id="editAvatarSection" className="opacity-0 flex w-[160px] h-[160px] bg-[#00000099] absolute clip-circle-channel-logo top-0 justify-center items-center">
                    <Link to={"#"}>
                        <Icons.CameraIco color="white" />
                    </Link>
                </div>

            </div>

            {/* ChannelName,ChannelUsername,ChannelSubscribes VideosLenght Description, Subscribe Button */}
            <div className="flex flex-col space-y-2 space-x-3">
                
                {/*  Channel Name */}
                <div className="ml-2">
                    <h1 id="channelName" className="font-bold text-[#0f0f0f] text-4xl">Quran Channel</h1>
                </div>
                
                {/* Channel Username,ChannelTotalSubscribers,ChannelTotalVideos */}
                <div className="flex items-center justify-start space-x-1">
                    
                    {/* Username */}
                    <div>
                        <h3 className="text-[#0f0f0f] font-medium lowercase">@salsabeelquran</h3>
                    </div>
                    
                    <span className="text-[#606060] mb-2 font-bold">.</span>

                    {/* Total Subscribers */}
                    <div> 
                        <p className="text-[#606060] font-normal">3.11M subscribers</p>
                    </div>

                    <span className="text-[#606060] mb-2 font-bold">.</span>

                    {/* Todo Videos */}
                    <div className="text-[#606060] font-normal"> <p> 53 videos </p> </div>

                </div>
                
                {/* About Channel */}
                <div className="flex items-start">
                    <p className="text-[#606060]">More This Channel </p>
                    <button type="button" className="text-[#0f0f0f] font-medium"> ...More</button>
                </div>
                
                {/* Subscribe,UnSubscribe,Channel Is You Show Customize Channel Manage Videos */}
                <div className="flex justify-start items-start">

                    {/* Account InterFace */}
                    <div className="hidden items-start justify-start space-x-3">
                        <Link to={`#studio`} className="bg-[#f2f2f2] px-4 py-2 rounded-full text-[#0f0f0f] font-medium transition hover:bg-[#d9d9d9]"> Customize channel </Link>
                        <Link to={`#studio`} className="bg-[#f2f2f2] px-4 py-2 rounded-full text-[#0f0f0f] font-medium transition hover:bg-[#d9d9d9]"> Manage Videos </Link>
                    </div>

                    {/* Channel InterFace */}
                    <div className="flex text-[#fff] font-medium bg-[#0f0f0f] py-2 px-4 rounded-full ">
                        <button type="button"> 

                            <span>
                                <p>Subscribed</p>
                            </span>
                        
                        </button>
                    </div>
                
                </div>

            </div>

            </section>
        </>
        
    )
}

export default ChannelHeaderSection;