import React,{useState} from "react";
import {handleAddVideoInPlaylist,handleRemoveVideoFromPlaylist} from "../api/AxiosInstance";
const useAddVideoOrRemoveFromPlaylist = () => {

    // hooks
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);

    // add video in playlist 
    const handleAddNewVideoInPlaylistAndRemove = async (payload) => {
        try {
            console.log(payload)
            // if checked add new video inplaylist 
            if(payload.isChecked == true){
                const video = await handleAddVideoInPlaylist(payload);
                if(video?.data?.statusCode == 200 && video?.data?.message === "video added successfully in playlist" && video?.data?.success == true){
                    setLoading(false);
                    return {playlist:video?.data?.data,message:`Added to ${video?.data?.data?.name}`};
                };
            }else if(payload.isChecked == false){
                // remove video from playlist
                const removedVideo = await handleRemoveVideoFromPlaylist(payload);
                if(removedVideo?.data?.statusCode == 200 && removedVideo?.data?.message === "video removed from playlist operation is successfull" && removedVideo?.data?.success == true){
                    setLoading(false);
                    return {playlist:removedVideo?.data?.data,message:`Removed from ${removedVideo?.data?.data?.name}`};
                };
            }
        } catch (error) {
            console.log(error)
            setError(error?.response?.data || error?.response || error);
        }
    }

    return [error,loading,handleAddNewVideoInPlaylistAndRemove];

}

export default useAddVideoOrRemoveFromPlaylist;