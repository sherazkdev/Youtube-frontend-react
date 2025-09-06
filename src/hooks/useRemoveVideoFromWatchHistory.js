import React, { useState } from 'react';
import { handleRemoveVideoFromWatchHistory } from '../api/AxiosInstance';

const UseRemoveVideoFromWatchHistory = () => {

    // hooks
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);

    // remove watchHistoryHandler
    const removeSingleVideoFromWatchHistory = async (videoId) => {
        try {
            console.log(videoId)
            setLoading(true)
            const removeSingleVideo = await handleRemoveVideoFromWatchHistory(videoId);
            console.log(removeSingleVideo)
            if(removeSingleVideo?.data?.statusCode == 200 && removeSingleVideo?.data?.success == true){
                setLoading(false);
                return {videoId:videoId,message:String("All views of this video removed from history")};
            }
        } catch (error) {
            console.log(error)
            setError(error?.response?.data || error?.response || error)
        }
    }

    return [error,loading,removeSingleVideoFromWatchHistory];

}

export default UseRemoveVideoFromWatchHistory;
