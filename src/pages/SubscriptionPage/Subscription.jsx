import React, { useEffect, useState,useContext } from "react";
import { Link,useLocation } from "react-router-dom";
import Icons from "../../assets/Icons";
import ColumnTypeVideoCard from "../../components/Cards/HomePage/ColumnTypeCard"
import RowTypeCard from "../../components/Cards/SubscriptionPage/RowTypeCard";
import useSubscriptions from "../../hooks/useSubscriptions";
import VideoSkeleton from "../../components/Skeletons/VideoSkeleton/VideoSkeleton"
import { AuthContext } from "../../context/AuthContext";

const Subscriptions = () => {

    const [flow,setFlow] = useState("1");

    // Get Location Params
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    // hooks
    const [videoSubscriptionError,videoSubscriptionLoading,subscriptionData] = useSubscriptions();

    // for flow
    useEffect( () => {

        if(params.get("flow") != undefined){
            setFlow(params.get("flow"));
        }else if(!params.get("flow")){
            setFlow("1")
        }

    },[location.search])


    // for errors
    useEffect( () => {
        if(videoSubscriptionError) return "some thing wrong";
    },[videoSubscriptionError])

    // Authentication
    const {isLoggedInUser} = useContext(AuthContext);

    return ( 
        <>
            {isLoggedInUser() === true ? (
                <> 
                    {/* Notification Videos And Grid GridList Section */}
                    { flow == "1" ? (
                        <>
                            {/* Flow 1 */}
                            <section className="flex flex-col w-[full] max-w-full px-0 mt-4">

                                {/* Top Header : Latest label on left and right grid grid list manage */}
                                <section id="topHeader" className="flex justify-between w-[full] px-3">

                                    {/* Latest Label */}
                                    <div>
                                        <h2 className="font-medium text-[20px] text-[#0f0f0f]">Latest</h2>
                                    </div>
                                    
                                    {/* Grid Icon And Grid List Ico */}
                                    <div className="flex space-x-5 items-start justify-start ">

                                        {/* Manage Link */}
                                        <div>
                                            <Link to="#"> Manage </Link>
                                        </div>
                                        
                                        {/* Grid Ico */}
                                        <div>
                                            <Link to="/subscription?flow=1">
                                                <Icons.GridIco />
                                            </Link>
                                        </div>
                                        
                                        {/* Grid List Ico */}
                                        <div>
                                            <Link to="/subscription?flow=2">
                                                <Icons.GridListIcon />
                                            </Link>
                                        </div>
                                    
                                    </div>

                                </section>

                                {/* Videos Section */}

                                <section className="w-[full] max-w-full">
                                    {videoSubscriptionLoading && (
                                        <>
                                            {Array(10).fill(null).map( (_y,i) => (
                                                <VideoSkeleton key={i} />
                                            ))}
                                        </>
                                    )}
                                    {subscriptionData?.length > 0 && !videoSubscriptionLoading && (
                                        <>
                                            {subscriptionData?.map( (video,index) => (
                                                <ColumnTypeVideoCard video={video} key={index} />
                                            ) )}
                                        </>
                                    )}
                                </section>

                            </section>
                        </>
                    ) : flow == "2" ? (
                        <>   
                            <section className="flex justify-center items-start w-[full] px-10 mt-7">
                                
                                <section id="mainWrapper" className="w-[1284px] flex flex-col space-y-2 ">
                                        
                                    {/* Right: Manage + Grid Icons */}
                                    <div className="flex items-center text-left justify-end  space-x-5">
                                                    
                                        <Link to="#">Manage</Link>
                                                    
                                        <Link to="/subscription?flow=1">
                                            <Icons.GridIco />
                                        </Link>
                                                    
                                        <Link to="/subscription?flow=2">
                                            <Icons.GridListIcon />
                                    </Link>
                
                                    </div>

                                    <div className="flex flex-col justify-left items-start">
                                        { subscriptionData?.map( (video) => (
                                            <React.Fragment key={video?._id}>

                                                <div className="flex space-x-2 mt-2 items-center justify-start ">
                                                    <div id="avatar">
                                                        <img src={video.owner.avatar} className="clip-circle w-[32px] h-[32px] rounded-full object-cover"/>
                                                    </div>
                                                    <div id="channelName" className="text-[#0f0f0f] font-medium text-[14px]">
                                                        <p>{video.owner.username}</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="border-b border-[#d9d9d9]">    
                                                    <RowTypeCard video={video} />
                                                </div>

                                            </React.Fragment>
                                        ) ) }
                                    </div>

                                </section>

                            </section>
                        </>
                    ) : "Inavalid Access" }
                </>
            ) : (
               <section className="flex flex-col space-y-5 justify-center items-center min-h-[48vh]">
                    <div>
                        <Icons.LibraryIco width="120px"  height="120px"/>
                    </div>
                    <div>
                        <h1 className="text-[#0f0f0f] text-[24px]">Don’t miss new videos</h1>
                    </div>
                    <div>
                        <p className="text-[#0f0f0f] text-[14px]">Sign in to see updates from your favorite YouTube channels</p>
                    </div>
                    <div className="w-[130px]">
                        <Link to="/login" className="flex space-x-2 items-center border border-[#d9d9d9] text-[#065fd4] px-5 py-2 rounded-full hover:bg-[#def1ff] hover:border-transparent transition">
                            <Icons.UserIco />
                            <span>Sign In</span>
                        </Link>
                    </div>
               </section>
            )}
        </>
    )

}

export default Subscriptions;