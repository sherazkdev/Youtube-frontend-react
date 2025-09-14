import React, { useEffect, useState } from "react";
import { handleGetChannelVideos } from "../api/AxiosInstance";

const useChannelVideos = (username) => {
    
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);
    const [channelVideos,setChannelVideos] = useState([]);

    // fetch by username channel videos
    useEffect( () => {

        const fetchChannelVideos = async () => {
            try {
                setLoading(true)
                const fetchLatestVideosByUsername = await handleGetChannelVideos(username);
                if(fetchLatestVideosByUsername?.data?.statusCode === 200 && fetchLatestVideosByUsername?.data?.success === true){
                    setLoading(false);
                    setChannelVideos(fetchLatestVideosByUsername?.data?.data);
                }
            } catch (error) {
                setError(error?.response?.data || error?.response?.message || error?.response || error)
            } finally {
                setLoading(false);
            }
        }

        // timer
        const timer = setTimeout(fetchChannelVideos,200);

        return () => { clearTimeout(timer) }

    },[username])

    // return response
    return [error,loading,channelVideos];
}

export default useChannelVideos;