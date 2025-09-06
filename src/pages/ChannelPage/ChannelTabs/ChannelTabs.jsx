import React,{useState} from "react";
import { Link,useLocation } from "react-router-dom";
import Icons from "../../../assets/Icons";

const ChannelTabs = () => {
    const [activeTab,setActiveTab] = useState("home");
    const location = useLocation();
    const isActiveUrl = (path) => location.pathname === path;

    const tabs = [
        {
            to : "/channel/featured",
            key : "home",
            label : "Home"
        },
        {
            to : "/channel/videos",
            key : "videos",
            label : "Videos"
        },
        {
            to : "/channel/playlists",
            key : "playlists",
            label : "Playlist"
        }
    ];
    
    // Search Tab 
    const [showSearchInput,setShowSearchInput] = useState(false);

    return (
        <>
            <ul className="flex list-none relative space-x-4 mt-4 items-start justify-start flex-wrap border-b w-[1300px] border-[#0000001a] mb-[20px]">
                                
                {tabs.map( (tab) => (
                    <li id="menuLink" className={`relative ${isActiveUrl(tab.to) ? "activeLink" : ""} `}>
                        <Link
                            to={tab.to}
                            onClick={ () => setActiveTab(tab.key)}
                            className={`text-[#606060] text-[16px] font-medium after:content-[''] after:absolute after:left-0 after:bottom-[-13px] after:rounded-full  after:bg-[#606060] after:h-[2px] after:w-[0%] hover:after:w-[100%]`}>{tab.label}</Link>
                    </li>
                ) )}


                <li className="relative mb-[15px]   ">
                            <button type="buttton" onClick={ () => (showSearchInput == true) ? setShowSearchInput(false) : setShowSearchInput(true)}>
                                <Icons.SearchIco />
                        </button>
                </li>
                
                { showSearchInput && (     
                            <li>
                                <form>
                                    <input type="text" placeholder="Search" id="searchChannelInfo" className="border-l-transparent border-r-transparent border-t-transparent border-b-[1px] outline-none border-[#0f0f0f]" />
                            </form>
                            </li>
                )}
            </ul>
        </>
    )
}

export default ChannelTabs;