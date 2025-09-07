import React, { useEffect, useState } from 'react';
import {handleGetWatchLaterPlatlist,handleGetLikeVideosPlaylist} from "../api/AxiosInstance.jsx";
const UseWatchLater = (playlistType) => {

    // states
    const [error,setError] = useState();
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState([]);

    useEffect( () => {
        console.log("playlist type",playlistType);
        // handle get watch all later videos
        const getWatchLaterVideos = async () => {
            try {
                setLoading(true);
                if(playlistType == "LL") {
                    const response = await handleGetLikeVideosPlaylist();
                    console.log(response)
                    if(response.data?.success === true || response.data?.statusCode === 200) {
                        setLoading(false);
                        return setData(response.data?.data[0]);
                    } else {
                        setError(response.data?.message || "Some error occured");
                    }
                }else if(playlistType == "WL") {
                    const response = await handleGetWatchLaterPlatlist();
                    console.log(response)
                    if(response.data?.success === true || response.data?.statusCode === 200) {
                        setLoading(false);
                        return setData(response.data?.data[0]);
                    } else {
                        setError(response.data?.message || "Some error occured");
                    }
                }
                
            }catch (error) {
                setError(error?.response?.data || error?.response || error || "Some error occured");
                console.log("Error in getting watch later videos",error);
            }finally {
                setLoading(false);
            }
        }

        const timer = setTimeout( getWatchLaterVideos,500);
        return () => clearTimeout(timer);

        // eslint-disable-next-line
    },[]);

    return [error,loading,data];

}

export default UseWatchLater;
