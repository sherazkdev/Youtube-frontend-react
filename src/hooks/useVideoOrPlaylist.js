import React,{useEffect,useState} from "react";
import { handelGetPlaylistById,handleGetVideoById  } from "../api/AxiosInstance";


const useVideoOrPlaylist = ({videoId,playlistId}) => {
    const [error,setError] = useState(null);
    const [data,setData] = useState([null]);
    const [loading,setLoading] = useState(false);

    useEffect( () => {

        const fetchVideoOrPlaylist = async () => {

            try {
                
                setLoading(true);

                let result = {};

                if(playlistId) {
                    // Playlist fetch by id
                    const fetchPlaylistById = await handelGetPlaylistById(playlistId);
                    if(fetchPlaylistById?.data?.statusCode == 200 && fetchPlaylistById?.data?.success == true){
                        result.playlist = fetchPlaylistById?.data?.data; 
                    }

                } if(videoId){
                    // fetch video by id
                    const fetchVideoById = await handleGetVideoById(videoId);
                    if(fetchVideoById?.data?.statusCode == 200 && fetchVideoById?.data?.success == true){
                        result.video = fetchVideoById?.data?.data[0]; 
                    }

                }
                else {
                    throw new Error("Error: No videoId Or PlaylistId not provided");
                }

                // set Data
                setData(result);

            } catch (error) {
                setError(error?.response?.data || error)
            } finally {
                setLoading(false)
            }

        }

        const timer = setTimeout( fetchVideoOrPlaylist,500 );

        return () => clearTimeout(timer);
    },[videoId,playlistId] )

    return [data,loading,error];


}

export default useVideoOrPlaylist;