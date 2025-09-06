import React,{useState,useEffect} from "react";
import { handleGetSubscriptions } from "../api/AxiosInstance";

const useSubscriptions = (query) => {
    
    // states || hooks
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [data,setData] = useState([]);

    // fetch latest subscriptions videos
    useEffect( () => {
        // fetch videos handle hook
        const subscriptions = async () => {
            try {
                setLoading(true)
                const data = await handleGetSubscriptions(query);
                if(data?.data?.statusCode === 200 && data?.data?.success === true){
                    setLoading(false);
                    return setData(data?.data?.data);
                }
            } catch (error) {
                setError(error?.response?.data || error?.response || error)
            }
        }

        const timer = setTimeout(subscriptions,500);
        return () => clearTimeout(timer);
    },[query])

    return [error,loading,data]
} 

export default useSubscriptions;