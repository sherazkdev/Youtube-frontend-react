import React,{useState,useEffect} from "react";
import { handleGetVideoCommentsByVideoId } from "../api/AxiosInstance";
const useVideoComments = (videoId) => {

    
    const [comments,setComments] = useState(undefined);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    
    useEffect( () => {
        
        if(!videoId) return;

        const fetchVideoComments = async () => {
            try {
                setLoading(true)
                const comments = await handleGetVideoCommentsByVideoId(videoId);
                if(comments?.data?.success == true && comments.data.statusCode == 200){
                    setComments(comments?.data?.data)
                    setLoading(false);
                }
            } catch (error) {
                setError(error?.response?.data || error?.response || error)
                setLoading(false);
            } finally{
                setLoading(false);
            }
        }
        const timer = setTimeout( fetchVideoComments, 100);

        return () => clearTimeout(timer);

        

    },[videoId] )
    return [comments,loading,error];



}

export default useVideoComments;