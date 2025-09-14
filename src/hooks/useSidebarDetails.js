import React, { useEffect, useState } from 'react';
import { handleGetsidebarDetails } from '../api/AxiosInstance';

const UseSidebarDetails = () => {
    
    // states
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState([]);

    // handle get latest sidebar details
    useEffect( () => {
        ( async () => {
            try {
                setLoading(true)
                const fetchDetailsAndSubscriptions = await handleGetsidebarDetails();
                // check data fetched succesfully
                if(fetchDetailsAndSubscriptions?.data?.success === true && fetchDetailsAndSubscriptions?.data?.statusCode === 200){
                    setLoading(false)
                    setData(fetchDetailsAndSubscriptions?.data?.data)
                }
            } catch (error) {
                if(error?.response?.data?.message === "Unauthorized Request" && error?.response?.data?.statusCode === 401){
                    return setError(null)
                }
                setError(error?.response?.data || error?.response || error)
            } finally {
                setLoading(false)
            }
        })();
    },[])

    return [error,loading,data]
}

export default UseSidebarDetails;
