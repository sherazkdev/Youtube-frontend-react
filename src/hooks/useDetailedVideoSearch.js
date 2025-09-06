import React, { useState } from 'react';
import { handleSearchVideoWithFullDetails } from '../api/AxiosInstance';
const UseDetailedVideoSearch = () => {
    
    // states 
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);

    // get search videos handler
    const searchVideoByOrDescriptionWithDetails = async (query) => {
            try {
                setLoading(true)
                const searchVideos = await handleSearchVideoWithFullDetails(query);
                if(searchVideos?.data?.statusCode === 200 && searchVideos?.data?.success == true){
                    console.log(searchVideos?.data?.data)
                    setLoading(false);
                    return searchVideos?.data?.data;
                }
            } catch (error) {
                return setError(error?.response?.data || error?.response || error)
            }
    }

    // return variables
    return [error,loading,searchVideoByOrDescriptionWithDetails];
}

export default UseDetailedVideoSearch;
