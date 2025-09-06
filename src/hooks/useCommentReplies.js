import React, { useState } from 'react';
import {handleGetCommentReplies} from "../api/AxiosInstance";
const useCommentReplies = () => {
    
    // states
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);

    // fetch video comment replies handler
    const fetchLatestCommentReplies = async (payload) => {
        try {
            setLoading(true);
            const latestReplies = await handleGetCommentReplies(payload);
            console.log(latestReplies)
            if(latestReplies?.data?.statusCode === 200 && latestReplies?.data?.success === true){
                setLoading(false);
                return latestReplies?.data?.data;
            }

        } catch (error) {
            setError(error?.response?.data || error?.response || error)
        }
    }  

    return [error,loading,fetchLatestCommentReplies];

}

export default useCommentReplies;
