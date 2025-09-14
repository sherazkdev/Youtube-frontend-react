import React,{useEffect, useState} from "react";
import { handleGetChannelPlaylistByUsername } from "../api/AxiosInstance";

const useChannelPlaylists = (username) => {
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);
    const [channelPlaylists,setChannelPlaylists] = useState([]);

    // fetching all playlist in useEffect
    useEffect( () => {
        // handle get all playlist by username
        const fetchAllPlaylistByUsername = async () => {
            try {
                setLoading(true)
                const playlists = await handleGetChannelPlaylistByUsername(username);
                // check playlists is successfully fetched 
                if(playlists?.data?.statusCode === 200 && playlists?.data?.success === true){
                    setLoading(false)
                    return setChannelPlaylists(playlists?.data?.data);
                }
            } catch (error) {
                console.log(error)
                setLoading(false);
                setError(error?.response?.data || error?.response?.message || error?.response || error)
            } finally {
                setLoading(false)
            }
        }
        fetchAllPlaylistByUsername();

        // set timer
        const timer = setTimeout(fetchAllPlaylistByUsername,500);

        return () => { clearTimeout(timer) };

    },[username])

    // return response
    return [error,loading,channelPlaylists];
}

export default useChannelPlaylists;