import React, { useContext,useMemo, useEffect, useState } from "react";
import {Link, useLocation, useNavigate } from "react-router-dom";
import Icons from "../../assets/Icons";
import VideoCard from "../../components/Cards/HistoryPage/RowTypeCard";
import { AuthContext } from "../../context/AuthContext";
import useWatchHistory from "../../hooks/useWatchHistory";
import NotificationPopUp from "../../components/Popups/Notification/Notification"
import UseRemoveVideoFromWatchHistory from "../../hooks/useRemoveVideoFromWatchHistory";
import useSearchWatchHistory from "../../hooks/useSearchWatchHistory";
import { useForm } from "react-hook-form";
const History = () => {
    
    const [watchHistory,setWatchHistory] = useState([]);
    const [notification,setNotification] = useState(null);    
    const {register,handleSubmit} = useForm();

    // Redirection use navigation
    const navigate = useNavigate();

    // get url parameters
    const location = useLocation();

    const query = useMemo(() => {
        const params = new URLSearchParams(location.search);
        return params.get("query") || null;
    }, [location.search]);

    // hooks

    // Authenticaiton
    const { isLoggedInUser } = useContext(AuthContext);
    // get Watch history Hookl
    const [error, loading, fetchWatchHistory] = useWatchHistory();
    // remove video hooks 
    const [removeVideoError,RemoveVideoLoading,removeSingleVideoFromWatchHistory] = UseRemoveVideoFromWatchHistory();
    // search Watch History
    const [searchHistoryError,_y,fetchSearchedWatchHistory] = useSearchWatchHistory();

    useEffect( () => {
        if(loading === false && !query){
            setWatchHistory(fetchWatchHistory?.watchHistory);
        }
    },[fetchWatchHistory,loading,query])
    
    // Handlers

    // remove single video from watch History
    const handleRemoveVideoFromWatchHistory = async ({videoId}) => {
        try {
            const responsePayload = await removeSingleVideoFromWatchHistory(videoId);
            const matchedIndex = watchHistory.findIndex( (h) => h?._id === responsePayload?.videoId);
            if(matchedIndex !== -1){
                setWatchHistory( (prevHistory) => {
                    const watchHistory = [...prevHistory];
                    watchHistory.splice(matchedIndex,1);
                    setNotification(responsePayload?.message);
                    return watchHistory;
                });

                setTimeout( () => setNotification(null),2400)
                return true;
            }
            return false;
        } catch (error) {
            return console.log(error)
        }
    }

    // handle search Watch History 
    const handleSearchWatchHistory = async () => {
        try {
            const res = await fetchSearchedWatchHistory(query);
            // set search history
            return await setWatchHistory(res?.watchHistory);
        } catch (error) {
            return console.log(error);
        }
    }

    // handle form data submited
    const onSubmit = (data) => { navigate(`/history?query=${data?.query}`); return handleSearchWatchHistory() };

    // for change url query paramter call state handle search history function to directly access with query params
    useEffect(() => {
        if (query) {
            handleSearchWatchHistory();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.search, query]);

    if (error || removeVideoError || searchHistoryError) {
        console.log(error,removeVideoError,searchHistoryError);
    }

    return (
        <section className="w-full flex flex-col items-center px-6">
            {notification && (<NotificationPopUp message={notification} />)}
            {/* Top Header => only for logged in user */}
            {isLoggedInUser() && (
                <div className="w-full max-w-6xl mt-6">
                <h1 className="text-[28px] text-[#0f0f0f] font-medium">
                    Watch History
                </h1>

                {/* Filter buttons */}
                <div className="flex space-x-3 mt-3">
                    {["All", "Videos", "Shorts", "Music"].map((btn) => (
                    <button
                        key={btn}
                        className="bg-[#f2f2f2] px-3 py-1 rounded-md hover:bg-[#e6e6e6] transition"
                    >
                        {btn}
                    </button>
                    ))}
                </div>
                </div>
            )}

            {/* Main Content */}
            <div className="w-full max-w-6xl mt-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Left side => History / Not logged in */}
                <div className="lg:col-span-3">
                {isLoggedInUser() ? (
                    <div className="space-y-4">
                    {watchHistory?.length > 0 ? (
                        watchHistory.map((history) => (
                        <VideoCard key={history._id} video={history} handleRemoveVideoFromWatchHistory={handleRemoveVideoFromWatchHistory} />
                        ))
                    ) : (
                        <p className="text-center text-gray-600">
                            No history found.
                        </p>
                    )}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4 text-center">
                    <Icons.HistoryIco width="96px" height="96px" />
                    <h1 className="text-[24px] font-normal">
                        Keep track of what you watch
                    </h1>
                    <p className="text-[14px] text-gray-700">
                        Watch history isn't viewable when signed out.{" "}
                        <Link className="text-[#065fd4]">Learn more</Link>
                    </p>
                    <Link
                        to="/login"
                        className="flex space-x-2 items-center border border-[#d9d9d9] text-[#065fd4] px-5 py-2 rounded-full hover:bg-[#def1ff] hover:border-transparent transition"
                    >
                        <Icons.UserIco />
                        <span>Sign In</span>
                    </Link>
                    </div>
                )}
                </div>

                {/* Right side => Operations */}
                <aside className="space-y-6 text-[14px]">
                {isLoggedInUser() && (
                    <form action="/history" method="get" onSubmit={handleSubmit(onSubmit)} className="relative">
                    <input
                        type="text"
                        {...register("query",{required:{value:true,message:"these field is required"}})}
                        className="border-b border-[#606060] outline-none w-full pl-7 pr-2 py-1"
                        placeholder="Search watch history"
                    />
                    <button type="submit" className="absolute top-[3px] left-0">
                        <Icons.SearchIco />
                    </button>
                    </form>
                )}

                <Link className="flex items-center space-x-2 cursor-pointer hover:text-[#065fd4]">
                    <Icons.BinIco />
                    <span>Clear all watch history</span>
                </Link>

                <Link className="flex items-center space-x-2 cursor-pointer hover:text-[#065fd4]">
                    <Icons.PaushIco />
                    <span>Pause watch history</span>
                </Link>

                <Link className="flex items-center space-x-2 cursor-pointer hover:text-[#065fd4]">
                    <Icons.BinIco />
                    <span>Clear all search history</span>
                </Link>

                <Link className="flex items-center space-x-2 cursor-pointer hover:text-[#065fd4]">
                    <Icons.PaushIco />
                    <span>Pause search history</span>
                </Link>

                <div>
                    <Link className="flex items-center space-x-2 cursor-pointer hover:text-[#065fd4]">
                    <Icons.SettingIco />
                    <span>Manage All History</span>
                    </Link>
                    <div className="flex flex-col space-y-1 mt-2 ml-6 text-[#606060]">
                    <Link>Comments</Link>
                    <Link>Posts</Link>
                    <Link>Live chat</Link>
                    </div>
                </div>
                </aside>
            </div>
        </section>
    );
};

export default History;
