import React, { useEffect,useState } from "react";
import { handleGetUserChannelByUsername } from "../api/AxiosInstance";

const useChannel = (username) => {

    const [channelData, setChannelData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log(username)

    useEffect( () => {
        const fetchChannelData = async () => {
            try {
                setLoading(true);
                const response = await handleGetUserChannelByUsername(username);
                console.log(response)
                if(response?.data?.success === false || response.status !== 200){ 
                    throw new Error(response?.data?.message || 'Failed to fetch channel data');
                } 
                setChannelData(response?.data?.data);
            } catch (error) {
                if(error?.response?.data?.statusCode === 404 && error?.response?.data?.message === "Channel Not Found"){
                    return setError(error?.response?.data)
                }
                setError(error?.response?.data || error.response || error);
            } finally {
                setLoading(false);
            }
    }
        const timer = setTimeout(fetchChannelData,200);
        return () => { clearTimeout(timer)};
    }, [username]);

    return [error,loading,channelData ];
}

export default useChannel;