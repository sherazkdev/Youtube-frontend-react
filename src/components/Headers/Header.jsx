import React,{useContext,  useState} from "react";
import { Link,useLocation, } from "react-router-dom";
import Icons from "../../assets/Icons"
import {AuthContext} from "../../context/AuthContext";
import SearchBar from "./SearchBar/SearchBar";

const Header = () => {
    // Hooks And States
    
    const location = useLocation();
    const [uploadOverlay,setUploadOverlay] = useState(false);
    const [notification,setNotification] = useState(false);
    const [profile,setProfile] = useState(false);

    // Authentication Checking
    const {loggedInUser,isLoggedInUser} = useContext(AuthContext);

    // Functions    
    const hanldeBarToggle = () => {
        
        if(location.pathname == "/watch"){
            const detailedSidebar = document.querySelector("#sidebarOverlay");
            
            if(detailedSidebar.className.includes("hidden")){

                detailedSidebar.classList.remove("hidden")
                detailedSidebar.classList.add("flex")
            
            }else if(detailedSidebar.className.includes("flex")){
                detailedSidebar.classList.remove("flex")
                detailedSidebar.classList.add("hidden")
            }
        
        }else {
            const shortSidebar = document.getElementById("shortSlider");
            const detailedSidebar = document.getElementById("detailedSidebar");
            
            if(detailedSidebar.className.includes("hidden")){
                shortSidebar.classList.replace("block","hidden");
                detailedSidebar.classList.replace("hidden","block") 
            }else {
                detailedSidebar.classList.replace("block","hidden");
                shortSidebar.classList.replace("hidden","block");
            }
        }
    }
    

    return(
        <>
            {/* Header Section */}
            <header className="flex z-10 justify-between sticky top-0 shadow-[0px_0px_1px_#f2f2f2] bg-[#fff] items-center  h-[70px]  px-5">
                {/* Left Section */}
                <section id="left-section" className="flex space-x-2 items-center">
                    <div>
                        <button onClick={hanldeBarToggle}> <Icons.BarIco /> </button>
                    </div>
                    <div>
                        <Link to={"/"}> <Icons.YoutubeIco /> </Link>
                    </div>
                </section>

                {/* Center Section */}
                <section id="center-section" className="flex items-center space-x-4">
                    <div className="relative">
                        
                        <div className="relative ">
                            <SearchBar />
                        </div>

                    </div>

                    <div>
                        <div id="mic" className="p-2 bg-[#f6f6f6] hover:bg-[#f1eeee] rounded-full"> <button type="button"> <Icons.MicIco /> </button> </div>
                    </div>
                </section>

                {/* Right Section */}
                <section id="right-section" className="flex space-x-4 items-center ">

                    {isLoggedInUser() === true && (
                        <>
                            <div className="relative">
                                <div>
                                    <button onClick={ () => (uploadOverlay == true ? setUploadOverlay(false) : setUploadOverlay(true))} className="flex cursor-pointer items-center space-x-1 px-3 font-medium py-2 text-[13px] rounded-full bg-[#f2f2f2]"> <span> <Icons.PlusIco /> </span> <p title="Upload">Upload</p> <span></span> </button>
                                </div>

                                {uploadOverlay && (
                                    <div id="uploadList" className="absolute flex flex-col space-y-2 bg-[#fff] shadow-[0px_0px_19px_#f0f0f0] w-[176px] h-[90px] py-2 rounded-lg">
                                        <div>
                                            <Link to={`/upload`} className="flex items-center space-x-3 hover:bg-[#f2f2f2] py-1 px-2">
                                                <div>
                                                    <Icons.VideoIco />
                                                </div>
                                                <div>
                                                    <p className="text-[14px]">Upload Video</p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to={`/upload`} className="flex items-center space-x-3 hover:bg-[#f2f2f2] py-1 px-2">
                                                <div>
                                                    <Icons.HotspotIco />
                                                </div>
                                                <div>
                                                    <p className="text-[14px]">Go Live</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                )}

                            </div>
                            
                            <div className="relative">
                                <div className="flex items-center relative">
                                    <button className="w-[30px] h-[24px] cursor-pointer" onClick={ () => (notification == true ? setNotification(false) : setNotification(true))} title="Notifications"> <Icons.BellIco /> </button>
                                    <span className="bg-[#e1002d] text-[#fff] rounded-full text-[10px] p-[0px_3px] text-center absolute top-[-1px] left-[12px] cursor-pointer font-medium h-[16px] w-[18px] max-h-[16px] max-w-[18px]">10</span>
                                </div>
                                {notification && (
                                    <div id="notification-list-hidden-toggle" className="absolute bg-[#fff] shadow-[0px_0px_19px_#f0f0f0] max-w-[480px] max-h-[370px] rounded-xl  left-[-400px]">
                                    
                                    <div id="notifications">
                                            <div id="notification" className="flex justify-between items-center py-2 px-2 border-b border-[#e5e5e5]">
                                                <div>
                                                    <h3> Notifications </h3>
                                                </div>
                                                <div>
                                                    <Icons.SettingIco />
                                                </div>
                                            </div>

                                            <Link to={`/channel`}>
                                                <div id="notification" className="flex justify-between items-start py-2 px-2 border-b border-[#e5e5e5]">
                                                    <div>
                                                        <img className="clip-circle" src="https://yt3.ggpht.com/Y1Ci1OU_KBLwzPzgzrodqUNZ15NiJRml6uvwJiGPPR3P1liqgkWhKdCwS3NyhqgpHVY_k7zSjw=s88-c-k-c0x00ffffff-no-rj" title="Channel Name" />
                                                    </div>
                                                    <div className="ml-2">
                                                        <p className="text-[#0f0f0f] max-w-[350px] text-[13px] font-normal"><span>vidIQ uploaded:</span> YouTube's New Monetization Update is HERE!</p>
                                                        <p className="text-[8px] text-[#606060 font-medium]"> <span id="time">10</span> <span>Hours</span> </p>
                                                    </div>
                                                    <div className="flex items-start">
                                                        <div>    
                                                            <img className="max-w-[48px]" src="https://i.ytimg.com/vi/U_aE3k2EzWo/hqdefault.jpg" title="Video Title" />
                                                        </div>
                                                        <div>
                                                            <div id="three-dot-toggle">
                                                                <Icons.ThreeDotIco />
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>
                                    </div>
                                )}
                            </div>
                            
                            <div className="relative">

                                <div id="avatarImage" className="clip-circle" onClick={() => (profile == false) ? setProfile(true) : setProfile(false)}>
                                    <img src={loggedInUser?.avatar} className="clip-circle w-[32px] h-[32px] rounded-full object-cover"  title={loggedInUser?.username}/>
                                </div>
                                
                                {profile && (
                                    <div className="absolute w-[300px] h-[329px] bg-[#fff] shadow-[0px_0px_19px_#f0f0f0] rounded-lg left-[-260px]">
                                        <ul>
                                        <li><Link to="/channel" className="flex space-x-3 py-3 px-3 items-start border-b border-[#e5e5e5]">
                                            <div id="avatarImage" className="clip-circle mt-2">
                                                <img className="clip-circle w-[32px] h-[32px] roudend-full object-cover" rc={loggedInUser?.avatar}  title={loggedInUser?.username} />
                                            </div>

                                            <div className="">
                                                <p id="channelName" className="text-[#0f0f0f] ">{loggedInUser?.fullname}</p>
                                                <p id="channelUsername" className="text-[#0f0f0f] ">@{loggedInUser?.username}</p>
                                                <p className="text-[#065fd4] text-[12px] font-medium"><Link to="/channel">View Channel</Link></p>
                                            </div>
                                        </Link></li>
                                        <li><Link to="/setting" className="flex space-x-3 py-3 px-3 items-start hover:bg-[#f2f2f2]"><span><Icons.SettingIco /></span><span>Settings</span></Link></li>
                                        <li><Link to="/logout" className="flex space-x-3 py-3 px-3 items-start hover:bg-[#f2f2f2]"><span><Icons.OutDoorIco  /></span><span>Log Out</span></Link></li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </>
                    ) }

                    {isLoggedInUser() === false && (
                        <>
                            <button type="button"><Icons.ThreeDotIco /></button>
                            <Link to="/login" className="flex space-x-1 border border-[#d9d9d9] text-[#065fd4] px-3 py-1.5 rounded-full items-center hover:bg-[#def1ff] hover:border-transparent"> <span> <Icons.UserIco color="#065fd4" /> </span> <span>Sign In</span> </Link>
                        </>
                    )}
                </section>
            </header>

        </>
    )
}

export default Header;