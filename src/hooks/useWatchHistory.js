import React,{useState,useEffect} from "react";
import {handleGetWatchHistory} from "../api/AxiosInstance";

const useWatchHistory = () => {
    const [watchHistory,setWatchHistory] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);

    useEffect( () => {

        const getUserWatchHistory = async () => {
            try {
                setLoading(true)
                const watchHistory = await handleGetWatchHistory();
                if(watchHistory?.data?.statusCode == 200 && watchHistory?.data?.success == true){
                    setWatchHistory(watchHistory?.data?.data);
                }
                setLoading(false);
            } catch (error) {
                setError(error?.response?.data || error?.response || error)
            }
        }

        setTimeout( getUserWatchHistory,500 );

    },[])

    return [error,loading,watchHistory];

}

export default useWatchHistory;