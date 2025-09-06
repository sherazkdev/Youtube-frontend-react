import React, { useState } from 'react';
import { handleSearchWatchHistory } from '../api/AxiosInstance';

const UseSearchWatchHistory = () => {
    
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);

    // fetch watch history by queries
    const fetchSearchedWatchHistory = async (query) => {
        try {
            setLoading(true)
            const searchedWatchHistory = await handleSearchWatchHistory(query);
            if(searchedWatchHistory?.data?.statusCode == 200 && searchedWatchHistory?.data?.success){
                setLoading(false);
                return searchedWatchHistory?.data?.data[0];
            }
        } catch (error) {
            setError(error?.response?.data || error?.response || error)
        }
    }

    return [error,loading,fetchSearchedWatchHistory]

}

export default UseSearchWatchHistory;
