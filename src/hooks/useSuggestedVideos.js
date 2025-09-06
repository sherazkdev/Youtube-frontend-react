import React,{useState,useEffect} from "react";
import { handleGetRelatedVideosByVideoId } from "../api/AxiosInstance";

const useSuggestedVideos = (videoId) => {

    const [data,setData] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);
        
    useEffect( () => {
            
            if(!videoId) return;
            setLoading(true);

            const fetchRelatedVideos = async () => {
                
                try {
                    const suggestedVideos = await handleGetRelatedVideosByVideoId(videoId);
                    
                    if(suggestedVideos?.data?.statusCode == 200 && suggestedVideos?.data?.success == true){
                        setData(suggestedVideos?.data?.data);
                        setLoading(false);
                    }

                } catch (error) {
                    setError(error?.response?.data || error?.response || error)
                }
            }

            fetchRelatedVideos();
    },[videoId] )

    return [data,loading,error];

}

export default useSuggestedVideos;