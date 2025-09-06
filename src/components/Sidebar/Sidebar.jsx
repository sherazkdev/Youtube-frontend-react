import React, { useRef } from "react";
import Icons from "../../assets/Icons";
import { Link } from "react-router-dom";

/**
 * Unified Sidebar component.
 * Props:
 *   - variant: "expanded" | "collapsed" | "mobile"
 * 
 */
const Sidebar = ({ variant = "expanded" }) => {
    // From MobileSidebar.jsx
    const overlaySidebarRef = useRef(undefined);
    const handleClickOverlaySidebarOnOut = () => {
        if(overlaySidebarRef.current.className.includes("hidden")){
            overlaySidebarRef.current.classList.remove("hidden");
            overlaySidebarRef.current.classList.add("flex");
        }else if(overlaySidebarRef.current.className.includes("flex")){
            overlaySidebarRef.current.classList.remove("flex");
            overlaySidebarRef.current.classList.add("hidden");
        }
    };

    return (
        <>
            {variant === "mobile" && (
            
                <>
                                    
                    <div id="sidebarOverlay" ref={overlaySidebarRef} onClick={handleClickOverlaySidebarOnOut} className="hidden justify-start z-[200] inset-0  items-start w-[100%] h-[100%] fixed top-0 bg-[#00000080]">
                            
                            <aside id="overlaySidebar" className="max-w-[240px] flex flex-col space-y-3 absolute top-0 left-0 shadow-[0px_0px_3px_#ccc] transition duration-1000 h-[100%] bg-white" onMouseOver={ () => document.querySelector("aside").style.overflowY = `scroll`} onMouseLeave={ () => document.querySelector("aside").style.overflowY = `hidden`} >
                            
                            <section id="left-section" className=" py-5  px-5 flex space-x-2 items-center">
                                <div>
                                    <button> <Icons.BarIco /> </button>
                                </div>
                                <div>
                                    <Link to={"/"}> <Icons.YoutubeIco /> </Link>
                                </div>
                            </section>

                            <section>
                            
                                <ul className="py-0  px-2">
                                
                                <li className="rounded-xl p-[5px_10px] hover:bg-[#f2f2f2]"><Link to="/" className="flex justify-start space-x-3 mb-1 items-start "><span> <Icons.HomeIco /> </span> <span> Home </span></Link></li>
                                
                                <li className="rounded-xl p-[5px_10px] hover:bg-[#f2f2f2]"><Link to="/Shorts" className="flex justify-start space-x-3 mb-1 items-start mt-2"><span> <Icons.ShortIco /> </span> <span> Shorts </span></Link></li>
                                
                                <li className="rounded-xl p-[5px_10px] hover:bg-[#f2f2f2]"><Link to="/subscription?flow=1" className="flex justify-start space-x-3 mb-1 items-start mt-2"><span> <Icons.SubscriptionIco /></span> <span> Subscriptions </span></Link></li>
                                
                                <hr className="bg-[#e5e5e5] m-[12px_0px]"/>
                                
                                <li className="rounded-xl p-[5px_10px] hover:bg-[#f2f2f2]"><Link to="/history" className="flex justify-start space-x-3 mb-1 items-start mt-2 "><span> <Icons.HistoryIco /> </span> <span> History </span></Link></li>
                                
                                <li className="rounded-xl p-[5px_10px] hover:bg-[#f2f2f2]"><Link to="/playlists" className="flex justify-start space-x-3 mb-1 items-start mt-2 "><span> <Icons.PlayListIco /> </span> <span> Playlists </span></Link></li>
                                
                                <li className="rounded-xl p-[5px_10px] hover:bg-[#f2f2f2]"><Link to="/videos" className="flex justify-start space-x-3 mb-1 items-start mt-2 "><span> <Icons.VideoIco /> </span> <span> Your Videos </span></Link></li>
                                
                                <li className="rounded-xl p-[5px_10px] hover:bg-[#f2f2f2]"><Link to="/watch-later" className="flex justify-start space-x-3 mb-1 items-start mt-2"><span> <Icons.WatchIco /> </span> <span> Watch Later </span></Link></li>
                                
                                <li className="rounded-xl p-[5px_10px] hover:bg-[#f2f2f2]"><Link to="/playlist" className="flex justify-start space-x-3 mb-1 items-start mt-2"><span> <Icons.ThumbOutline /> </span> <span> Liked Videos </span></Link></li>
                                
                                <hr className="bg-[#e5e5e5] m-[12px_0px]"/>
                                
                                <p className="px-4 text-[#0f0f0f] font-medium">Subscriptions</p>
                                
                                <div id="subscriptions" className="py-0 px-0">
                                
                                    <div id="subscription" className="flex justify-start space-x-3 mb-3 items-start rounded-xl mt-2 p-[5px_12px] hover:bg-[#f2f2f2]" >
                                            <div>
                                                <img className="clip-circle rounded-full w-[24px] h-[24px] object-cover" src="https://yt3.ggpht.com/ytc/AIdro_mSh0doIgogNhhpzLcRYEMRorZefkBUe_6LYOWnLgzSyFc=s88-c-k-c0x00ffffff-no-rj" title="Watch Video" />
                                            </div>
                                            <div>
                                                <p id="channel">Techno Gamerz</p>
                                            </div>
                                    </div>
                                
                                    <div id="subscription" className="flex justify-start space-x-3 mb-3 items-start rounded-xl mt-2 p-[5px_12px] hover:bg-[#f2f2f2]" >
                                            <div>
                                                <img className="clip-circle rounded-full w-[24px] h-[24px] object-cover" src="https://yt3.ggpht.com/ytc/AIdro_mSh0doIgogNhhpzLcRYEMRorZefkBUe_6LYOWnLgzSyFc=s88-c-k-c0x00ffffff-no-rj" title="Watch Video" />
                                            </div>
                                            <div>
                                                <p id="channel">Techno Gamerz</p>
                                            </div>
                                    </div>
                                
                                    <div id="subscription" className="flex justify-start space-x-3 mb-3 items-start rounded-xl mt-2 p-[5px_12px] hover:bg-[#f2f2f2]" >
                                        <div>
                                            <img className="clip-circle rounded-full w-[24px] h-[24px] object-cover" src="https://yt3.ggpht.com/VunTf0NzCeboiPjbesBdnQuxaF3Lja7UGRbBGQAWRJgMSTj9TTLO3pS1X9qPOJGCNnmPrXeY=s88-c-k-c0x00ffffff-no-rj" title="Watch Video" />
                                        </div>
                                        <div>
                                            <p id="channel">Techno Gamerz</p>
                                        </div>
                                    </div>
                                
                                </div>

                                <hr className="bg-[#e5e5e5] mb-3"/>
                                
                                <div id="terms">
                                    
                                    <div className="text-[#606060] font-semibold flex flex-wrap space-y-[5px] text-[12px] px-5 text-left">
                                        <Link to="/about">About Press Copyright</Link>
                                        <Link to="/contact">Contact Creater Advertize</Link>
                                        <Link to="/developers">Developers</Link>
                                    </div>

                                    <div className="text-[#606060] font-semibold flex flex-wrap space-y-[5px]  text-[12px] px-5 text-left">

                                        <Link to="/terms">Terms Policy Privacy & Safety</Link>
                                        <Link to="/how">How Creaters Text</Link>
                                        <Link to="/testnewfetures">Test new Fetures</Link>
                                    
                                    </div>
                                    
                                    <div>
                                        <p className="text-[#606060] px-5 font-semibold text-left mt-3 text-[15px]">2025 LLC</p>
                                    </div>
                                
                                </div>
                                </ul>
                            </section>

                            </aside>
                        
                    </div>
                    
                </>
    
            )}

            {variant === "expanded" && (

                <>
                    <aside id="detailedSidebar" className="block w-[240px] sticky top-[70px] h-[calc(100vh-70px)] bg-white" onMouseOver={ () => document.querySelector("aside").style.overflowY = `scroll`} onMouseLeave={ () => document.querySelector("aside").style.overflowY = `hidden`} >
                        <ul className="py-0  px-2">
                                
                                <li className="rounded-xl p-[5px_10px] hover:bg-[#f2f2f2]"><Link to="/" className="flex justify-start space-x-3 mb-1 items-start "><span> <Icons.HomeIco /> </span> <span> Home </span></Link></li>
                                
                                <li className="rounded-xl p-[5px_10px] hover:bg-[#f2f2f2]"><Link to="/Shorts" className="flex justify-start space-x-3 mb-1 items-start mt-2"><span> <Icons.ShortIco /> </span> <span> Shorts </span></Link></li>
                                
                                <li className="rounded-xl p-[5px_10px] hover:bg-[#f2f2f2]"><Link to="/subscription?flow=1" className="flex justify-start space-x-3 mb-1 items-start mt-2"><span> <Icons.SubscriptionIco /></span> <span> Subscriptions </span></Link></li>
                                
                                <hr className="bg-[#e5e5e5] m-[12px_0px]"/>
                                
                                <li className="rounded-xl p-[5px_10px] hover:bg-[#f2f2f2]"><Link to="/history" className="flex justify-start space-x-3 mb-1 items-start mt-2 "><span> <Icons.HistoryIco /> </span> <span> History </span></Link></li>
                                
                                <li className="rounded-xl p-[5px_10px] hover:bg-[#f2f2f2]"><Link to="/playlists" className="flex justify-start space-x-3 mb-1 items-start mt-2 "><span> <Icons.PlayListIco /> </span> <span> Playlists </span></Link></li>
                                
                                <li className="rounded-xl p-[5px_10px] hover:bg-[#f2f2f2]"><Link to="/videos" className="flex justify-start space-x-3 mb-1 items-start mt-2 "><span> <Icons.VideoIco /> </span> <span> Your Videos </span></Link></li>
                                
                                <li className="rounded-xl p-[5px_10px] hover:bg-[#f2f2f2]"><Link to="/watch-later" className="flex justify-start space-x-3 mb-1 items-start mt-2"><span> <Icons.WatchIco /> </span> <span> Watch Later </span></Link></li>
                                
                                <li className="rounded-xl p-[5px_10px] hover:bg-[#f2f2f2]"><Link to="/playlist" className="flex justify-start space-x-3 mb-1 items-start mt-2"><span> <Icons.ThumbOutline /> </span> <span> Liked Videos </span></Link></li>
                                
                                <hr className="bg-[#e5e5e5] m-[12px_0px]"/>
                                
                                <p className="px-4 text-[#0f0f0f] font-medium">Subscriptions</p>
                                
                                <div id="subscriptions" className="py-0 px-0">
                                
                                    <div id="subscription" className="flex justify-start space-x-3 mb-3 items-start rounded-xl mt-2 p-[5px_12px] hover:bg-[#f2f2f2]" >
                                            <div>
                                                <img className="clip-circle rounded-full w-[24px] h-[24px] object-cover" src="https://yt3.ggpht.com/ytc/AIdro_mSh0doIgogNhhpzLcRYEMRorZefkBUe_6LYOWnLgzSyFc=s88-c-k-c0x00ffffff-no-rj" title="Watch Video" />
                                            </div>
                                            <div>
                                                <p id="channel">Techno Gamerz</p>
                                            </div>
                                    </div>
                                
                                    <div id="subscription" className="flex justify-start space-x-3 mb-3 items-start rounded-xl mt-2 p-[5px_12px] hover:bg-[#f2f2f2]" >
                                            <div>
                                                <img className="clip-circle rounded-full w-[24px] h-[24px] object-cover" src="https://yt3.ggpht.com/ytc/AIdro_mSh0doIgogNhhpzLcRYEMRorZefkBUe_6LYOWnLgzSyFc=s88-c-k-c0x00ffffff-no-rj" title="Watch Video" />
                                            </div>
                                            <div>
                                                <p id="channel">Techno Gamerz</p>
                                            </div>
                                    </div>
                                
                                    <div id="subscription" className="flex justify-start space-x-3 mb-3 items-start rounded-xl mt-2 p-[5px_12px] hover:bg-[#f2f2f2]" >
                                        <div>
                                            <img className="clip-circle rounded-full w-[24px] h-[24px] object-cover" src="https://yt3.ggpht.com/VunTf0NzCeboiPjbesBdnQuxaF3Lja7UGRbBGQAWRJgMSTj9TTLO3pS1X9qPOJGCNnmPrXeY=s88-c-k-c0x00ffffff-no-rj" title="Watch Video" />
                                        </div>
                                        <div>
                                            <p id="channel">Techno Gamerz</p>
                                        </div>
                                    </div>
                                
                                </div>

                                <hr className="bg-[#e5e5e5] mb-3"/>
                                
                                <div id="terms">
                                    
                                    <div className="text-[#606060] font-semibold flex flex-wrap space-y-[5px] text-[12px] px-5 text-left">
                                        <Link to="/about">About Press Copyright</Link>
                                        <Link to="/contact">Contact Creater Advertize</Link>
                                        <Link to="/developers">Developers</Link>
                                    </div>

                                    <div className="text-[#606060] font-semibold flex flex-wrap space-y-[5px]  text-[12px] px-5 text-left">

                                        <Link to="/terms">Terms Policy Privacy & Safety</Link>
                                        <Link to="/how">How Creaters Text</Link>
                                        <Link to="/testnewfetures">Test new Fetures</Link>
                                    
                                    </div>
                                    
                                    <div>
                                        <p className="text-[#606060] px-5 font-semibold text-left mt-3 text-[15px]">2025 LLC</p>
                                    </div>
                                
                                </div>
                        </ul>
                    </aside>
                    
                    <aside id="shortSlider" className="sticky top-[70px] px-2 w-[75px] hidden">
                        <ul className="flex flex-col">
                            <li><Link to={"/"} className="flex items-center flex-col text-[10px]  font-medium text-[#0f0f0f] p-[16px_0px_14px_0px] hover:bg-[#f2f2f2] rounded-lg"><span> <Icons.HomeIco /> </span> <span> Home </span></Link></li>
                            <li><Link to={"/shorts"} className="flex items-center flex-col text-[10px]  font-medium text-[#0f0f0f] p-[16px_0px_14px_0px] hover:bg-[#f2f2f2] rounded-lg"><span> <Icons.ShortIco /> </span> <span> Shorts </span></Link></li>
                            <li><Link to={"/subscriptions"} className="flex items-center flex-col text-[10px]  font-medium text-[#0f0f0f] p-[16px_0px_14px_0px] hover:bg-[#f2f2f2] rounded-lg"><span> <Icons.SubscriptionIco /> </span> <span> Subscriptions </span></Link></li>
                            <li><Link to={"/subscriptions"} className="flex items-center flex-col text-[10px]  font-medium text-[#0f0f0f] p-[16px_0px_14px_0px] hover:bg-[#f2f2f2] rounded-lg"><span> <Icons.UserIco /> </span> <span> You </span></Link></li>
                        </ul>
                    </aside>
                </>
    
            )}

            {variant === "collapsed" && (
    
                <>
                    <aside id="detailedSidebar" className="max-w-[250px] hidden sticky top-[70px] h-[calc(100vh-70px)] bg-white" onMouseOver={ () => document.querySelector("aside").style.overflowY = `scroll`} onMouseLeave={ () => document.querySelector("aside").style.overflowY = `hidden`} >
                        <ul className="py-0  px-2">
                                
                                <li><Link to="/" className="flex justify-start space-x-3 mb-3 items-start rounded-xl p-[5px_12px] hover:bg-[#f2f2f2]"><span> <Icons.HomeIco /> </span> <span> Home </span></Link></li>
                                
                                <li><Link to="/Shorts" className="flex justify-start space-x-3 mb-3 items-start rounded-xl p-[5px_12px] hover:bg-[#f2f2f2]"><span> <Icons.ShortIco /> </span> <span> Shorts </span></Link></li>
                                
                                <li><Link to="/subscription?flow=1" className="flex justify-start space-x-3 mb-3 items-start rounded-xl p-[5px_12px] hover:bg-[#f2f2f2]"><span> <Icons.SubscriptionIco /></span> <span> Subscriptions </span></Link></li>
                                
                                <hr className="bg-[#e5e5e5] mb-3"/>
                                
                                <li><Link to="/history" className="flex justify-start space-x-3 mb-3 items-start rounded-xl p-[5px_12px] hover:bg-[#f2f2f2]"><span> <Icons.HistoryIco /> </span> <span> History </span></Link></li>
                                
                                <li><Link to="/playlists" className="flex justify-start space-x-3 mb-3 items-start rounded-xl p-[5px_12px] hover:bg-[#f2f2f2]"><span> <Icons.PlayListIco /> </span> <span> Playlists </span></Link></li>
                                
                                <li><Link to="/videos" className="flex justify-start space-x-3 mb-3 items-start rounded-xl p-[5px_12px] hover:bg-[#f2f2f2]"><span> <Icons.VideoIco /> </span> <span> Your Videos </span></Link></li>
                                
                                <li><Link to="/watch-later" className="flex justify-start space-x-3 mb-3 items-start rounded-xl p-[5px_12px] hover:bg-[#f2f2f2]"><span> <Icons.WatchIco /> </span> <span> Watch Later </span></Link></li>
                                
                                <li><Link to="/liked" className="flex justify-start space-x-3 mb-3 items-start rounded-xl p-[5px_12px] hover:bg-[#f2f2f2]"><span> <Icons.ThumbFilled /> </span> <span> Liked Videos </span></Link></li>
                                
                                <hr className="bg-[#e5e5e5] mb-3"/>
                                
                                <p className="px-4 text-[#0f0f0f] font-medium">Subscriptions</p>
                                
                                <div id="subscriptions" className="py-0 px-0">
                                
                                    <div id="subscription" className="flex justify-start space-x-3 mb-3 items-start rounded-xl mt-2 p-[5px_12px] hover:bg-[#f2f2f2]" >
                                            <div className="clip-circle">
                                                <img src="https://yt3.ggpht.com/ytc/AIdro_mSh0doIgogNhhpzLcRYEMRorZefkBUe_6LYOWnLgzSyFc=s88-c-k-c0x00ffffff-no-rj" title="Watch Video" />
                                            </div>
                                            <div>
                                                <p id="channel">Techno Gamerz</p>
                                            </div>
                                    </div>
                                
                                    <div id="subscription" className="flex justify-start space-x-3 mb-3 items-start rounded-xl mt-2 p-[5px_12px] hover:bg-[#f2f2f2]" >
                                            <div className="clip-circle">
                                                <img src="https://yt3.ggpht.com/ytc/AIdro_mSh0doIgogNhhpzLcRYEMRorZefkBUe_6LYOWnLgzSyFc=s88-c-k-c0x00ffffff-no-rj" title="Watch Video" />
                                            </div>
                                            <div>
                                                <p id="channel">Techno Gamerz</p>
                                            </div>
                                    </div>
                                
                                    <div id="subscription" className="flex justify-start space-x-3 mb-3 items-start rounded-xl mt-2 p-[5px_12px] hover:bg-[#f2f2f2]" >
                                        <div className="clip-circle">
                                            <img src="https://yt3.ggpht.com/ytc/AIdro_mSh0doIgogNhhpzLcRYEMRorZefkBUe_6LYOWnLgzSyFc=s88-c-k-c0x00ffffff-no-rj" title="Watch Video" />
                                        </div>
                                        <div>
                                            <p id="channel">Techno Gamerz</p>
                                        </div>
                                    </div>
                                
                                </div>

                                <hr className="bg-[#e5e5e5] mb-3"/>
                                
                                <div id="terms">
                                    
                                    <div className="text-[#606060] font-semibold flex flex-wrap space-y-[5px] text-[12px] px-5 text-left">
                                        <Link to="/about">About Press Copyright</Link>
                                        <Link to="/contact">Contact Creater Advertize</Link>
                                        <Link to="/developers">Developers</Link>
                                    </div>

                                    <div className="text-[#606060] font-semibold flex flex-wrap space-y-[5px]  text-[12px] px-5 text-left">

                                        <Link to="/terms">Terms Policy Privacy & Safety</Link>
                                        <Link to="/how">How Creaters Text</Link>
                                        <Link to="/testnewfetures">Test new Fetures</Link>
                                    
                                    </div>
                                    
                                    <div>
                                        <p className="text-[#606060] px-5 font-semibold text-left mt-3 text-[15px]">2025 LLC</p>
                                    </div>
                                
                                </div>
                        </ul>
                    </aside>
                
                    <aside id="shortSlider" className="sticky top-[70px] px-2 w-[75px] block">
                        <ul className="flex flex-col">
                            <li><Link to={"/"} className="flex items-center flex-col text-[10px]  font-medium text-[#0f0f0f] p-[16px_0px_14px_0px] hover:bg-[#f2f2f2] rounded-lg"><span> <Icons.HomeIco /> </span> <span> Home </span></Link></li>
                            <li><Link to={"/shorts"} className="flex items-center flex-col text-[10px]  font-medium text-[#0f0f0f] p-[16px_0px_14px_0px] hover:bg-[#f2f2f2] rounded-lg"><span> <Icons.ShortIco /> </span> <span> Shorts </span></Link></li>
                            <li><Link to={"/subscriptions"} className="flex items-center flex-col text-[10px]  font-medium text-[#0f0f0f] p-[16px_0px_14px_0px] hover:bg-[#f2f2f2] rounded-lg"><span> <Icons.SubscriptionIco /> </span> <span> Subscriptions </span></Link></li>
                            <li><Link to={"/subscriptions"} className="flex items-center flex-col text-[10px]  font-medium text-[#0f0f0f] p-[16px_0px_14px_0px] hover:bg-[#f2f2f2] rounded-lg"><span> <Icons.UserIco /> </span> <span> You </span></Link></li>
                        </ul>
                    </aside>
                </>
            )}
        </>
    )
}

export default Sidebar;