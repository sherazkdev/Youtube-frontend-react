import React,{useState} from "react";
import {handleGetAllPlaylist} from "../api/AxiosInstance";
const usePlaylist = () => {
    
    // hooks states
    const [error,setError] = useState(null);

    // handle get all playlist by owner details
    const getAllPlaylist = async () => {
        try {
            const fetchedPlaylists = await handleGetAllPlaylist();
            if(fetchedPlaylists?.data?.statusCode == 200 && fetchedPlaylists?.data?.success == true){
                return fetchedPlaylists?.data?.data;
            }
        } catch (error) {
            setError(error?.response?.data || error?.response || error);
        }
    }

    // return array of hook
    return [error,getAllPlaylist];
}

export default usePlaylist;