import React,{useState} from "react";
import { handleSubscribeAndUnsubscribeToggle } from "../api/AxiosInstance";

const useSubscriptionToggle = () => {

    // states 
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);

    // handle subscription toggle
    const handleSubscriptionToggle = async (channelId) => {
        try {
            console.log(channelId)
            setLoading(true)
            const isSubscriptionToggle = await handleSubscribeAndUnsubscribeToggle(channelId);
            console.log(isSubscriptionToggle);
            if(isSubscriptionToggle?.data?.statusCode == 200 && isSubscriptionToggle?.data?.success == true && isSubscriptionToggle?.data?.message == "channel unSubscribed successfully"){
                setLoading(false);
                return false;
            }else if(isSubscriptionToggle?.data?.statusCode == 200 && isSubscriptionToggle?.data?.success == true && isSubscriptionToggle?.data?.message == "channel Subscribed successfully"){
                setLoading(false);
                return true;
            }
        } catch (error) {
            setError(error?.response?.data || error?.response || error)
        }
    }

    return [error,loading,handleSubscriptionToggle]

}

export default useSubscriptionToggle;