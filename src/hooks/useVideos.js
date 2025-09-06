import React,{useState,useEffect} from "react";
import { handleGetLatestVideos } from "../api/AxiosInstance";
const useVideos = () => {

    const [error,setError] = useState(null);
    const [latestVideos,setLatestVideos] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect( () => {

        const fetchVideos = async () => {

            setLoading(true);
            
            try {
                
                const videos = await handleGetLatestVideos();
                if(videos?.data?.statusCode == 200 && videos?.data?.success == true){
                    setLatestVideos(videos?.data?.data)
                    
                }

            } catch (error) {
                setError(error?.response?.data?.error || error)
            } finally {
                setLoading(false)
            }

        }

        const timer = setTimeout( fetchVideos , 500 );

        return () => clearTimeout(timer);

    },[])

    return [latestVideos,error,loading]


}

export default useVideos;