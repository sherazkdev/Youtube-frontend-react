import React,{useState} from "react";
import {handleCreatePlaylist as handleCreatePlaylistApi} from "../api/AxiosInstance";

const useCreatePlaylist = () => {

    // hooks
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);

    const handleCreatePlaylist = async (payload) => {
        try {
            console.log(payload)
            setLoading(true)
            const playlistCreatedPayload = await handleCreatePlaylistApi(payload);
            setLoading(false);
            return playlistCreatedPayload;
        } catch (error) {
            console.log(error)
            return setError(error?.response?.data || error?.response || error)
        }
    }

    // finaly return 
    return [error,loading,handleCreatePlaylist];
    
}

export default useCreatePlaylist;