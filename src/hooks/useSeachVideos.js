import React,{useState} from 'react';
import { handleSearchVideoByTitle } from '../api/AxiosInstance';
const useSeachVideos = () => {

    // states
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);

    // handle searc videos
    const handleSearchVideosByQuery = async (query) => {
        try {
            setLoading(true);
            // api calling
            const searchVideos = await handleSearchVideoByTitle(query);
            // check is data is sending by else if
            if(searchVideos?.data?.statusCode === 200 && searchVideos?.data?.success === true){
                setLoading(false);
                return searchVideos?.data?.data;
            }

        } catch (error) {
            return setError(error?.response?.data || error?.response || error)
        }
    }

    // return hook 
    return [error,loading,handleSearchVideosByQuery];

}

export default useSeachVideos;
